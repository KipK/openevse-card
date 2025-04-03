import { LitElement, html, css, TemplateResult, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { mdiClose, mdiDrag, mdiPencil } from "@mdi/js";
import { HomeAssistant, EntityConfig } from '../types';

// Assuming necessary HA components are available globally or imported elsewhere
// Need ha-sortable, ha-entity-picker, ha-icon-button, ha-svg-icon
// import 'home-assistant-frontend/src/components/ha-sortable';
// import 'home-assistant-frontend/src/components/entity/ha-entity-picker';
// import 'home-assistant-frontend/src/components/ha-icon-button';
// import 'home-assistant-frontend/src/components/ha-svg-icon';

// Define the event detail structure for changes
export interface MultiEntitiesChangedEvent {
  entities: EntityConfig[]; // Emit the full config objects
}

// Define the event detail structure for requesting detailed edit
export interface RequestEditDetailEvent {
    index: number;
    config: EntityConfig;
}

@customElement('multi-entity-selector')
export class MultiEntitySelector extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  // Public property to receive the configuration array
  @property({ attribute: false }) public entities?: (string | EntityConfig)[];
  @property() public label?: string; // Optional label for the component

  @state() private _entities: EntityConfig[] = []; // Internal state using EntityConfig

  // For repeat directive
  private _entityKeys = new WeakMap<EntityConfig, string>();
  private _getKey(entityConf: EntityConfig) {
    if (!this._entityKeys.has(entityConf)) {
      this._entityKeys.set(entityConf, Math.random().toString());
    }
    return this._entityKeys.get(entityConf)!;
  }

  // Use willUpdate to process incoming config changes from the 'entities' property
  override willUpdate(changedProperties: Map<string | symbol, unknown>): void {
    super.willUpdate(changedProperties); // Call super
    if (changedProperties.has('entities')) {
        this._processIncomingConfig();
    }
  }

  private _processIncomingConfig(): void {
    // Process the public 'entities' property
    if (!this.entities) {
        this._entities = [];
        return;
    }
    // Normalize incoming config (string | EntityConfig)[] to EntityConfig[]
    this._entities = this.entities.map(entity =>
        typeof entity === 'string' ? { entity: entity } : entity // Ensure internal state is always EntityConfig[]
    );
    // Reset keys map whenever config is processed
    this._entityKeys = new WeakMap<EntityConfig, string>();
  }

  // Removed setConfig method - configuration is now passed via the 'entities' property


  protected override render(): TemplateResult | typeof nothing {
    if (!this.hass) {
      return nothing;
    }

    return html`
      ${this.label ? html`<h3>${this.label}</h3>` : nothing}
      <ha-sortable handle-selector=".handle" @item-moved=${this._rowMoved}>
        <div class="entities">
          ${repeat(
            this._entities,
            (entityConf) => this._getKey(entityConf),
            (entityConf, index) => html`
              <div class="entity-row">
                <div class="handle">
                  <ha-svg-icon .path=${mdiDrag}></ha-svg-icon>
                </div>
                <div class="entity-info">
                  ${entityConf.entity /* Only show picker if it's a standard entity row */
                    ? html`
                        <ha-entity-picker
                          allow-custom-entity
                          hide-clear-icon
                          .hass=${this.hass}
                          .value=${entityConf.entity}
                          .index=${index}
                          @value-changed=${this._entityValueChanged}
                        ></ha-entity-picker>
                        ${entityConf.name || entityConf.icon ? html`<span class="secondary">(${entityConf.name ? `Name: ${entityConf.name}` : ''}${entityConf.name && entityConf.icon ? ', ' : ''}${entityConf.icon ? `Icon: ${entityConf.icon}` : ''})</span>` : ''}
                      `
                    : html`
                        <!-- Placeholder for special row types if needed later -->
                        <span>Special Row Type: ${entityConf.type}</span>
                      `
                  }
                </div>
                <ha-icon-button
                  label="Edit"
                  .path=${mdiPencil}
                  class="edit-icon"
                  .index=${index}
                  @click=${this._editRow}
                ></ha-icon-button>
                <ha-icon-button
                  label="Remove"
                  .path=${mdiClose}
                  class="remove-icon"
                  .index=${index}
                  @click=${this._removeEntity}
                ></ha-icon-button>
              </div>
            `
          )}
        </div>
      </ha-sortable>
      <ha-entity-picker
        class="add-entity"
        .hass=${this.hass}
        @value-changed=${this._addEntity}
      ></ha-entity-picker>
    `;
  }

  private _addEntity(ev: CustomEvent): void {
    const value = ev.detail.value;
    if (!value) return;

    // Prevent duplicates based on entity ID
    if (this._entities.some(conf => conf.entity === value)) {
        (ev.target as any).value = ''; // Reset picker
        return;
    }

    // Add as a simple EntityConfig object
    this._entities = [...this._entities, { entity: value }];
    (ev.target as any).value = ''; // Reset picker
    this._valueChanged();
  }

  // Handles drag-and-drop reordering
  private _rowMoved(ev: CustomEvent): void {
    ev.stopPropagation();
    const { oldIndex, newIndex } = ev.detail;

    if (oldIndex === newIndex) return;

    const newEntities = [...this._entities];
    const [movedItem] = newEntities.splice(oldIndex, 1);
    newEntities.splice(newIndex, 0, movedItem);

    this._entities = newEntities;
    this._valueChanged();
  }

  private _removeEntity(ev: CustomEvent): void {
    const index = (ev.currentTarget as any).index;
    this._entities = this._entities.filter((_, i) => i !== index);
    this._valueChanged();
  }

  // Handles changes in the entity picker for a row
  private _entityValueChanged(ev: CustomEvent): void {
    ev.stopPropagation();
    const value = ev.detail.value;
    const index = (ev.target as any).index;

    if (!value || this._entities[index].entity === value) {
        // Value unchanged or cleared (though hide-clear-icon should prevent clearing)
        // If it somehow clears, revert to old value? Or remove row? For now, revert.
        (ev.target as any).value = this._entities[index].entity;
        return;
    }

    // Prevent duplicates when changing an existing entity ID
    if (this._entities.some((conf, i) => i !== index && conf.entity === value)) {
        (ev.target as any).value = this._entities[index].entity; // Revert
        return;
    }

    const newEntities = [...this._entities];
    // Update only the entity ID, keep other custom properties (name, icon)
    newEntities[index] = { ...newEntities[index], entity: value };
    this._entities = newEntities;
    this._valueChanged();
  }

  // Fires event to signal request for detailed editing
  private _editRow(ev: CustomEvent): void {
    const index = (ev.currentTarget as any).index;
    const event = new CustomEvent<RequestEditDetailEvent>('request-edit-detail', {
        detail: { index: index, config: this._entities[index] },
        bubbles: true,
        composed: true,
    });
    this.dispatchEvent(event);
    // Note: The parent component (e.g., custom-card-editor) needs to listen for this
    // and open a dialog/form to edit the details (name, icon, etc.) of this._entities[index].
    // After editing, the parent should update the config and pass it back down.
  }

  private _valueChanged(): void {
    // Fire event with the current list of full EntityConfig objects
    const event = new CustomEvent<MultiEntitiesChangedEvent>('entities-changed', {
      detail: { entities: this._entities },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  static override styles = css`
    .entities {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 12px;
    }
    .entity-row {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .handle {
      padding-right: 8px;
      cursor: move; /* fallback */
      cursor: grab;
    }
    .handle > * {
      pointer-events: none; /* Prevent icon from interfering with drag */
    }
    .entity-info {
        flex-grow: 1;
        display: flex;
        flex-direction: column; /* Stack picker and secondary info */
    }
    .entity-info ha-entity-picker {
        /* Picker takes available space */
    }
    .secondary {
        font-size: 0.8em;
        color: var(--secondary-text-color);
        margin-left: 4px; /* Indent secondary info slightly */
    }
    .add-entity {
      display: block;
      margin-left: 31px; /* Align with entity info, accounting for handle */
      margin-right: 71px; /* Align with entity info, accounting for buttons */
      margin-inline-start: 31px;
      margin-inline-end: 71px;
      direction: var(--direction);
      margin-top: 8px;
    }
    ha-icon-button {
      --mdc-icon-button-size: 36px;
      color: var(--secondary-text-color);
    }
    .remove-icon {
       color: var(--error-color);
    }
    .edit-icon {
        /* Standard secondary color */
    }
    h3 {
        margin-bottom: 8px;
        font-size: 1rem;
        color: var(--primary-text-color);
    }
  `;
}

// Update global event map
declare global {
  interface HTMLElementTagNameMap {
    'multi-entity-selector': MultiEntitySelector;
  }
  interface HASSDomEvents {
    "entities-changed": MultiEntitiesChangedEvent;
    "request-edit-detail": RequestEditDetailEvent; // Add the new event
  }
}