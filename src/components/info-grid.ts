import {LitElement, html, nothing} from 'lit';
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
        entityId: string | undefined
    ) => void;
    @property({attribute: false}) convertTimeHandler?: (time: number) => string;

    constructor() {
        super();
    }

    static override get styles() {
        return cardStyles;
    }

    override render() {
        if (!this.hass || !this.config || !this.convertTimeHandler) {
            return html``;
        }

        return html`
            <div class="grid-container">
                ${this.powerEntity
                    ? html`
                          <div class="grid-item clickable"
                           @click=${() => this.showMoreInfoHandler?.(this.config?.power_entity) || nothing}
                           >
                              <div class="grid-item-label">
                                  ${localize('power', this.language)}
                              </div>
                              <div class="grid-item-value">
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
                          <div class="grid-item clickable"
                          @click=${() => this.showMoreInfoHandler?.(this.config?.current_entity) || nothing}
                          >
                              <div class="grid-item-label">
                                  ${localize('current', this.language)}
                              </div>
                              <div class="grid-item-value clickable">
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
                              <div class="grid-item clickable"
                               @click=${() => this.showMoreInfoHandler?.(this.config?.session_energy_entity) || nothing}
                              >
                                  <div class="grid-item-label">
                                      ${localize('session', this.language)}
                                  </div>
                                  <div
                                      class="grid-item-value clickable">
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
                          ` 
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
