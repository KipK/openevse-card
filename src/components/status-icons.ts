import {LitElement, html} from 'lit';
import {property, customElement} from 'lit/decorators.js';
import {HomeAssistant, CardConfig, EntityState} from '../types';
import {cardStyles} from '../styles';

@customElement('status-icons')
export class StatusIcons extends LitElement {
    @property({attribute: false}) hass?: HomeAssistant;
    @property({attribute: false}) config?: CardConfig;
    @property({attribute: false}) wifiSignalEntity?: EntityState | null;
    @property({attribute: false}) statusEntity?: EntityState | null;
    @property({attribute: false}) vehicleConnectedEntity?: EntityState | null;
    @property({attribute: false}) chargingStatusEntity?: EntityState | null;
    @property({attribute: false}) showMoreInfoHandler?: (
        entityId: string
    ) => void;

    constructor() {
        super();
        // Bind the new click handlers
        this._handleWifiClick = this._handleWifiClick.bind(this);
        this._handleStatusClick = this._handleStatusClick.bind(this);
        this._handleVehicleClick = this._handleVehicleClick.bind(this);
    }

    static override get styles() {
        return cardStyles;
    }

    private _wifiIcon(dbi: number): string {
        if (dbi >= -65) return 'mdi:wifi-strength-4';
        if (-65 > dbi && dbi >= -70) return 'mdi:wifi-strength-3';
        if (-70 > dbi && dbi >= -75) return 'mdi:wifi-strength-2';
        if (-75 > dbi && dbi >= -80) return 'mdi:wifi-strength-1';
        return 'mdi:wifi-strength-alert-outline';
    }

    // Specific handler for WiFi icon
    private _handleWifiClick() {
        const entityId = this.config?.wifi_signal_strength_entity;
        if (
            this.showMoreInfoHandler &&
            typeof entityId === 'string' &&
            entityId
        ) {
            this.showMoreInfoHandler(entityId);
        }
    }

    // Specific handler for Status icon
    private _handleStatusClick() {
        const entityId = this.config?.status_entity;
        if (
            this.showMoreInfoHandler &&
            typeof entityId === 'string' &&
            entityId
        ) {
            this.showMoreInfoHandler(entityId);
        }
    }

    // Specific handler for Vehicle icon
    private _handleVehicleClick() {
        const entityId = this.config?.vehicle_connected_entity;
        if (
            this.showMoreInfoHandler &&
            typeof entityId === 'string' &&
            entityId
        ) {
            this.showMoreInfoHandler(entityId);
        }
    }

    override render() {
        if (!this.hass || !this.config) {
            return html``;
        }

        const wifiDbi = Number(this.wifiSignalEntity?.state);
        const statusState = this.statusEntity?.state;
        const vehicleConnectedState = this.vehicleConnectedEntity?.state;
        const chargingState = this.chargingStatusEntity?.state;

        return html`
            <div class="status-icons">
                ${this.wifiSignalEntity
                    ? html`
                          <div
                              class="status-icon clickable"
                              @click=${() =>
                                  this._handleWifiClick} // Use bound method
                          >
                              <ha-icon
                                  icon="${this._wifiIcon(wifiDbi)}"
                                  class="wifi-icon"
                              ></ha-icon>
                          </div>
                      `
                    : ''}

                <div
                    class="status-icon clickable"
                    @click=${this._handleStatusClick} // Use bound method
                >
                    <ha-icon
                        icon="${statusState === 'active'
                            ? vehicleConnectedState === 'off'
                                ? 'mdi:timer-sand'
                                : 'mdi:lightning-bolt'
                            : 'mdi:cancel'}"
                        class="${statusState === 'active'
                            ? chargingState === 'charging'
                                ? 'charging'
                                : 'active bg-active'
                            : 'disabled bg-disabled'}"
                    ></ha-icon>
                </div>

                <div
                    class="status-icon clickable"
                    @click=${this._handleVehicleClick} // Use bound method
                >
                    <ha-icon
                        icon="${vehicleConnectedState === 'off'
                            ? 'mdi:car-off'
                            : 'mdi:car'}"
                        class="${vehicleConnectedState === 'off'
                            ? 'disabled bg-disabled'
                            : 'active bg-active'}"
                    ></ha-icon>
                </div>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'status-icons': StatusIcons;
    }
}
