import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {HomeAssistant, CardConfig, EntityState} from '../types';
import {localize} from '../utils/translations';
import {cardStyles} from '../styles';

@customElement('info-grid')
export class InfoGrid extends LitElement {
    @property({attribute: false}) hass?: HomeAssistant;
    @property({attribute: false}) config?: CardConfig;
    @property({attribute: false}) powerEntity?: EntityState | null;
    @property({attribute: false}) currentEntity?: EntityState | null;
    @property({attribute: false}) sessionEnergyEntity?: EntityState | null;
    @property({attribute: false}) timeElapsedEntity?: EntityState | null;
    @property({type: Number}) localTimeElapsed: number = 0;
    @property({type: String}) language?: string;
    @property({attribute: false}) showMoreInfoHandler?: (
        entityId: string
    ) => void;
    @property({attribute: false}) convertTimeHandler?: (time: number) => string;

    constructor() {
        super();
        // Bind the new click handlers
        this._handlePowerClick = this._handlePowerClick.bind(this);
        this._handleCurrentClick = this._handleCurrentClick.bind(this);
        this._handleSessionClick = this._handleSessionClick.bind(this);
    }

    static override get styles() {
        return cardStyles;
    }

    // Specific handler for Power item
    private _handlePowerClick() {
        const entityId = this.config?.power_entity;
        if (
            this.showMoreInfoHandler &&
            typeof entityId === 'string' &&
            entityId
        ) {
            this.showMoreInfoHandler(entityId);
        }
    }

    // Specific handler for Current item
    private _handleCurrentClick() {
        const entityId = this.config?.current_entity;
        if (
            this.showMoreInfoHandler &&
            typeof entityId === 'string' &&
            entityId
        ) {
            this.showMoreInfoHandler(entityId);
        }
    }

    // Specific handler for Session item
    private _handleSessionClick() {
        const entityId = this.config?.session_energy_entity;
        if (
            this.showMoreInfoHandler &&
            typeof entityId === 'string' &&
            entityId
        ) {
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
                              <div class="grid-item-label">
                                  ${localize('power', this.language)}
                              </div>
                              <div
                                  class="grid-item-value clickable"
                                  @click=${this._handlePowerClick} // Use bound method
                              >
                                  ${this.hass.formatEntityState(
                                      this.powerEntity
                                  )}
                              </div>
                          </div>
                      `
                    : html` <div class="grid-item">
                          <div class="grid-item-label">
                              ${localize('power', this.language)}
                          </div>
                          <div class="grid-item-value">0 W</div>
                      </div>`}
                ${this.currentEntity
                    ? html`
                          <div class="grid-item">
                              <div class="grid-item-label">
                                  ${localize('current', this.language)}
                              </div>
                              <div
                                  class="grid-item-value clickable"
                                  @click=${this._handleCurrentClick} // Use bound method
                              >
                                  ${this.hass.formatEntityState(
                                      this.currentEntity
                                  )}
                              </div>
                          </div>
                      `
                    : html` <div class="grid-item">
                          <div class="grid-item-label">
                              ${localize('current', this.language)}
                          </div>
                          <div class="grid-item-value">0 A</div>
                      </div>`}
                ${
                    this.sessionEnergyEntity
                        ? html`
                              <div class="grid-item">
                                  <div class="grid-item-label">
                                      ${localize('session', this.language)}
                                  </div>
                                  <div
                                      class="grid-item-value clickable"
                                      @click=${this._handleSessionClick} // Use bound method
                                  >
                                      ${this.hass.formatEntityState(
                                          this.sessionEnergyEntity
                                      )}
                                  </div>
                              </div>
                          `
                        : html`
                              <div class="grid-item">
                                  <div class="grid-item-label">
                                      ${localize('session', this.language)}
                                  </div>
                                  <div class="grid-item-value">0 kWh</div>
                              </div>
                          ` // Added newline before backtick
                }
                ${this.timeElapsedEntity
                    ? html`
                          <div class="grid-item">
                              <div class="grid-item-label">
                                  ${localize('elapsed', this.language)}
                              </div>
                              <div class="grid-item-value">
                                  ${this.convertTimeHandler(
                                      this.localTimeElapsed || 0
                                  )}
                              </div>
                          </div>
                      `
                    : html` <div class="grid-item">
                          <div class="grid-item-label">
                              ${localize('elapsed', this.language)}
                          </div>
                          <div class="grid-item-value">00:00:00</div>
                      </div>`}
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'info-grid': InfoGrid;
    }
}
