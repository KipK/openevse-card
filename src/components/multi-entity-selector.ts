import { LitElement, css, TemplateResult } from 'lit';
import { html, nothing } from 'lit/html.js';
import { customElement, property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { mdiClose, mdiArrowUp, mdiArrowDown } from "@mdi/js";
import { HomeAssistant } from '../types';

// Assuming necessary HA components are available globally or imported elsewhere
// import '@material/mwc-button'; // Example
// import 'home-assistant-frontend/src/components/entity/ha-entity-picker';
// import 'home-assistant-frontend/src/components/ha-icon-button';
// import 'home-assistant-frontend/src/components/ha-svg-icon';
// import 'home-assistant-frontend/src/components/ha-sortable'; // Not using sortable for now

// Basic EntityConfig definition (adapt if more complex structure is needed)
export interface EntityConfig {
  entity: string;
  // Add other potential properties from LovelaceRowConfig if needed later
  // type?: string;
  // name?: string;
  // icon?: string;
  // ...
}

// Define the event detail structure
export interface MultiEntitiesChangedEvent {
  entities: EntityConfig[];
}

@customElement('multi-entity-selector')
export class MultiEntitySelector extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  // Input property for initial configuration
  private _configEntities?: (string | EntityConfig)[];
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

  setConfig(config: { entities?: (string | EntityConfig)[], label?: string }): void {
    this.label = config.label;
    this._configEntities = config.entities || [];
    // Convert string entities to EntityConfig objects
    this._entities = (this._configEntities || []).map(entity =>
        typeof entity === 'string' ? { entity: entity } : entity
    );
  }

  protected override render(): TemplateResult | typeof nothing {
    if (!this.hass) {
      return nothing;
    }

    return html`
      ${this.label ? html`<h3>${this.label}</h3>` : nothing}
      <div class="entities">
        ${repeat(
          this._entities,
          (entityConf) => this._getKey(entityConf),
          (entityConf, index) => html`
            <div class="entity-row">
              <ha-entity-picker
                allow-custom-entity
                hide-clear-icon
                .hass=${this.hass}
                .value=${entityConf.entity}
                .index=${index}
                @value-changed=${this._entityValueChanged}
              ></ha-entity-picker>

              <ha-icon-button
                label="Move Up"
                .path=${mdiArrowUp}
                .index=${index}
                @click=${this._moveEntity}
                .disabled=${index === 0}
              ></ha-icon-button>
              <ha-icon-button
                label="Move Down"
                .path=${mdiArrowDown}
                .index=${index}
                @click=${this._moveEntity}
                .disabled=${index === this._entities.length - 1}
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

    // Prevent duplicates
    if (this._entities.some(conf => conf.entity === value)) {
        (ev.target as any).value = ''; // Reset picker
        // Optionally show a warning/notification
        return;
    }

    this._entities = [...this._entities, { entity: value }];
    (ev.target as any).value = ''; // Reset picker
    this._valueChanged();
  }

  private _moveEntity(ev: CustomEvent): void {
    const index = (ev.currentTarget as any).index;
    const direction = (ev.currentTarget as any).label === "Move Up" ? -1 : 1;
    const newIndex = index + direction;

    if (newIndex < 0 || newIndex >= this._entities.length) return;

    const entities = [...this._entities];
    const element = entities.splice(index, 1)[0];
    entities.splice(newIndex, 0, element);

    this._entities = entities;
    this._valueChanged();
  }

  private _removeEntity(ev: CustomEvent): void {
    const index = (ev.currentTarget as any).index;
    this._entities = this._entities.filter((_, i) => i !== index);
    this._valueChanged();
  }

  private _entityValueChanged(ev: CustomEvent): void {
    const value = ev.detail.value;
    const index = (ev.target as any).index;
    // No need to check for empty value here as hide-clear-icon is used
    // and ha-entity-picker doesn't allow clearing with that flag.
    // If value becomes empty somehow, it might indicate an issue elsewhere.

    if (value && this._entities[index].entity !== value) {
        // Prevent duplicates when changing an existing entity
        if (this._entities.some((conf, i) => i !== index && conf.entity === value)) {
            // Optionally show warning, revert picker value?
            (ev.target as any).value = this._entities[index].entity; // Revert
            return;
        }

        const newEntities = [...this._entities];
        newEntities[index] = { ...newEntities[index], entity: value };
        this._entities = newEntities;
        this._valueChanged();
    }
  }

  private _valueChanged(): void {
    // Fire event with the current list of entities
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
      gap: 8px; /* Add spacing between rows */
      margin-bottom: 12px;
    }
    .entity-row {
      display: flex;
      align-items: center;
      gap: 4px; /* Adjust gap between picker and buttons */
    }
    .entity-row ha-entity-picker {
      flex-grow: 1;
    }
    .add-entity {
      display: block;
      /* Adjust margin if needed, original had specific margins */
      margin-top: 8px;
    }
    ha-icon-button {
      --mdc-icon-button-size: 36px; /* Match HA style */
      color: var(--secondary-text-color);
    }
    .remove-icon {
       color: var(--error-color); /* Make remove button stand out */
    }
    h3 {
        margin-bottom: 8px; /* Space below label */
        font-size: 1rem; /* Adjust as needed */
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
  }
}