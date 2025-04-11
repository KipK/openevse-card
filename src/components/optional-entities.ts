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
    @property({attribute: false}) entities: RenderedOptionalEntity[] = [];
    @property({attribute: false}) showMoreInfoHandler?: (
        entityId: string
    ) => void;

    static override get styles() {
        return cardStyles;
    }

    override render() {
        if (!this.hass || !this.entities || this.entities.length === 0) {
            return html``;
        }

        return html`
            <div>
                ${this.entities.map(
                    (entity) => html`
                        <div class="other-entities-container clickable"
                        @click=${() => this.showMoreInfoHandler?.(entity.id || '')}>
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
                                    data-entity-id=${entity.id ?? ''}
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
