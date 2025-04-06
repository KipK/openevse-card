import {LitElement, html, nothing} from 'lit';
import {property, customElement} from 'lit/decorators.js';
import {HomeAssistant} from '../types'; // Removed OptionalEntity import

// Define the expected input structure based on custom-card.ts getOptionalEntities
export interface RenderedOptionalEntity {
    name: string | null;
    value: string | null; // Re-added value property
    icon: string | undefined;
    id: string | undefined;
}
import {cardStyles} from '../styles';

@customElement('optional-entities')
export class OptionalEntities extends LitElement {
    @property({attribute: false}) hass?: HomeAssistant;
    @property({attribute: false}) entities: RenderedOptionalEntity[] = []; // Use the new interface
    @property({attribute: false}) showMoreInfoHandler?: (
        entityId: string
    ) => void;

    static override get styles() {
        return cardStyles;
    }

    // Modified to be an event handler
    private _handleEntityClick(event: MouseEvent) {
        const target = event.target as HTMLElement;
        // Find the closest clickable element with the data attribute
        const clickableElement = target.closest('.clickable[data-entity-id]') as HTMLElement | null;
        const entityId = clickableElement?.dataset.entityId;

        if (this.showMoreInfoHandler && entityId) {
            this.showMoreInfoHandler(entityId);
        }
    }

    override render() {
        if (!this.hass || !this.entities || this.entities.length === 0) {
            return html``;
        }

        // Add the single listener to a wrapper div
        return html`
            <div @click=${this._handleEntityClick}>
                ${this.entities.map(
                    (entity) => html`
                        <div class="other-entities-container">
                            <div class="entity-row">
                                <div class="entity-title">
                                    ${entity.icon != null
                                    ? html`
                                          <div class="entity-icon">
                                              <ha-icon
                                                  icon=${entity.icon}
                                              ></ha-icon>
                                          </div>
                                      `
                                    : html`<div class="entity-icon"></div>`}
                                <div class="entity-label">
                                    ${entity.name || entity.id || nothing}
                                </div>
                            </div>
                                <div
                                    class="entity-value clickable"
                                    data-entity-id=${entity.id ?? ''} // Add data attribute
                                >
                                    ${entity.value ?? ''}
                            </div>
                        </div>
                    </div>
                `
                )}
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'optional-entities': OptionalEntities;
    }
}
