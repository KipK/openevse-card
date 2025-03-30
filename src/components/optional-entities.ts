import { LitElement, html, nothing } from 'lit-element';
import { property } from 'lit/decorators.js';
import { HomeAssistant, OptionalEntity } from '../types';
import { cardStyles } from '../styles';

class OptionalEntities extends LitElement {
    @property({ attribute: false }) hass?: HomeAssistant;
    @property({ attribute: false }) entities: OptionalEntity[] = [];
    @property({ attribute: false }) showMoreInfoHandler?: (entityId: string) => void;

    static override get styles() {
        return cardStyles;
    }

    private _handleEntityClick(entityId?: string) {
        if (this.showMoreInfoHandler && entityId) {
            this.showMoreInfoHandler(entityId);
        }
    }

    override render() {
        if (!this.hass || !this.entities || this.entities.length === 0) {
            return html``;
        }

        return html`
            ${this.entities.map((entity) => html`
                <div class="other-entities-container">
                    <div class="entity-row">
                        <div class="entity-title">
                            ${entity.icon != null
                                ? html`
                                    <div class="entity-icon">
                                        <ha-icon icon=${entity.icon}></ha-icon>
                                    </div>
                                `
                                : html`<div class="entity-icon"></div>`
                            }
                            <div class="entity-label">
                                ${entity.name || entity.id || nothing}
                            </div>
                        </div>
                        <div
                            class="entity-value clickable"
                            @click=${() => this._handleEntityClick(entity.id)}
                        >
                            ${entity.value || ""}
                        </div>
                    </div>
                </div>
            `)}
        `;
    }
}

customElements.define('optional-entities', OptionalEntities);

export { OptionalEntities };