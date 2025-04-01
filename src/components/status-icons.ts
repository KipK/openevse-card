import { LitElement, html } from 'lit-element';
import { property, customElement } from 'lit/decorators.js';
import { HomeAssistant, CardConfig, EntityState } from '../types';
import { cardStyles } from '../styles';

@customElement('status-icons')
export class StatusIcons extends LitElement {
    @property({ attribute: false }) hass?: HomeAssistant;
    @property({ attribute: false }) config?: CardConfig;
    @property({ attribute: false }) wifiSignalEntity?: EntityState | null;
    @property({ attribute: false }) statusEntity?: EntityState | null;
    @property({ attribute: false }) vehicleConnectedEntity?: EntityState | null;
    @property({ attribute: false }) chargingStatusEntity?: EntityState | null;
    @property({ attribute: false }) showMoreInfoHandler?: (entityId: string) => void;

    static override get styles() {
        return cardStyles;
    }

    private _wifiIcon(dbi: number): string {
        if (dbi >= -65) return "mdi:wifi-strength-4";
        if (-65 > dbi && dbi >= -70) return "mdi:wifi-strength-3";
        if (-70 > dbi && dbi >= -75) return "mdi:wifi-strength-2";
        if (-75 > dbi && dbi >= -80) return "mdi:wifi-strength-1";
        return "mdi:wifi-strength-alert-outline";
    }

    private _handleIconClick(entityIdKey: keyof CardConfig) {
        const entityId = this.config?.[entityIdKey];
        if (this.showMoreInfoHandler && typeof entityId === 'string' && entityId) {
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
                ${this.wifiSignalEntity ? html`
                    <div
                        class="status-icon clickable"
                        @click=${() => this._handleIconClick('wifi_signal_strength_entity')}
                    >
                        <ha-icon
                            icon="${this._wifiIcon(wifiDbi)}"
                            class="wifi-icon"
                        ></ha-icon>
                    </div>
                `: ''}

                <div
                    class="status-icon clickable"
                    @click=${() => this._handleIconClick('status_entity')}
                >
                    <ha-icon
                        icon="${statusState === 'active'
                            ? vehicleConnectedState === 'off' ? 'mdi:timer-sand' : 'mdi:lightning-bolt'
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
                    @click=${() => this._handleIconClick('vehicle_connected_entity')}
                >
                    <ha-icon
                        icon="${vehicleConnectedState === 'off' ? 'mdi:car-off' : 'mdi:car'}"
                        class="${vehicleConnectedState === 'off' ? 'disabled bg-disabled' : 'active bg-active'}"
                    ></ha-icon>
                </div>
            </div>
        `;
    }
}
