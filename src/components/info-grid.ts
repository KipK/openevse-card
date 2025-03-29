import { LitElement, html } from 'lit-element'; // Removed css import
import { property } from 'lit/decorators.js';
import { HomeAssistant, CardConfig, EntityState } from '../types';
import { localize } from '../utils/translations';
import { cardStyles } from '../styles'; // Import cardStyles

class InfoGrid extends LitElement {
    @property({ attribute: false }) hass?: HomeAssistant;
    @property({ attribute: false }) config?: CardConfig;
    @property({ attribute: false }) powerEntity?: EntityState | null;
    @property({ attribute: false }) currentEntity?: EntityState | null;
    @property({ attribute: false }) sessionEnergyEntity?: EntityState | null;
    @property({ attribute: false }) timeElapsedEntity?: EntityState | null;
    @property({ type: Number }) localTimeElapsed: number = 0;
    @property({ type: String }) language?: string;
    @property({ attribute: false }) showMoreInfoHandler?: (entityId: string) => void;
    @property({ attribute: false }) convertTimeHandler?: (time: number) => string;

    static override get styles() {
        return cardStyles; // Use imported styles
    }

    private _handleItemClick(entityIdKey: keyof CardConfig) {
        const entityId = this.config?.[entityIdKey];
        if (this.showMoreInfoHandler && typeof entityId === 'string' && entityId) {
            this.showMoreInfoHandler(entityId);
        }
    }

    override render() {
        if (!this.hass || !this.config || !this.convertTimeHandler) {
            return html``;
        }

        return html`
            <div class="grid-container">
                ${this.powerEntity
                    ? html`
                        <div class="grid-item">
                            <div class="grid-item-label">${localize("power", this.language)}</div>
                            <div
                                class="grid-item-value clickable"
                                @click=${() => this._handleItemClick('power_entity')}
                            >
                                ${this.hass.formatEntityState(this.powerEntity)}
                            </div>
                        </div>
                        `
                    : html`
                        <div class="grid-item">
                            <div class="grid-item-label">${localize("power", this.language)}</div>
                            <div class="grid-item-value">0 W</div>
                        </div>`
                }
                ${this.currentEntity
                    ? html`
                        <div class="grid-item">
                            <div class="grid-item-label">${localize("current", this.language)}</div>
                            <div
                                class="grid-item-value clickable"
                                @click=${() => this._handleItemClick('current_entity')}
                            >
                                ${this.hass.formatEntityState(this.currentEntity)}
                            </div>
                        </div>
                        `
                    : html`
                        <div class="grid-item">
                            <div class="grid-item-label">${localize("current", this.language)}</div>
                            <div class="grid-item-value">0 A</div>
                        </div>`
                }
                ${this.sessionEnergyEntity
                    ? html`
                        <div class="grid-item">
                            <div class="grid-item-label">${localize("session", this.language)}</div>
                            <div
                                class="grid-item-value clickable"
                                @click=${() => this._handleItemClick('session_energy_entity')}
                            >
                                ${this.hass.formatEntityState(this.sessionEnergyEntity)}
                            </div>
                        </div>
                        `
                    : html`
                        <div class="grid-item">
                            <div class="grid-item-label">${localize("session", this.language)}</div>
                            <div class="grid-item-value">0 kWh</div>
                        </div>
                        ` // Added newline before backtick
                }
                ${this.timeElapsedEntity
                    ? html`
                        <div class="grid-item">
                            <div class="grid-item-label">${localize("elapsed", this.language)}</div>
                            <div class="grid-item-value">
                                ${this.convertTimeHandler(this.localTimeElapsed || 0)}
                            </div>
                        </div>
                       `: html`
                        <div class="grid-item">
                            <div class="grid-item-label">${localize("elapsed", this.language)}</div>
                            <div class="grid-item-value">00:00:00</div>
                        </div>`
                }
            </div>
        `;
    }
}

customElements.define('info-grid', InfoGrid);

export { InfoGrid };