import { LitElement, html } from 'lit-element'; // Removed css import
import { property } from 'lit/decorators.js';
import { CardConfig, EntityState } from '../types';
import './progress-bar'; // Ensure progress-bar is imported if used internally
import { cardStyles } from '../styles'; // Import cardStyles

class VehicleInfo extends LitElement {
    @property({ attribute: false }) config?: CardConfig;
    @property({ attribute: false }) vehicleBatteryLevelEntity?: EntityState | null;
    @property({ attribute: false }) vehicleRangeEntity?: EntityState | null;

    static override get styles() {
        return cardStyles; // Use imported styles
    }

    override render() {
        if (!this.config) {
            return html``;
        }

        const showSoc = this.config.feat_soc && this.vehicleBatteryLevelEntity;
        const showRange = this.config.feat_range && this.vehicleRangeEntity;

        if (!showSoc && !showRange) {
            return html``; // Render nothing if neither feature is enabled/available
        }

        return html`
            <div class="vehicle">
                ${showSoc ? html`
                    <progress-bar
                        value=${Number(this.vehicleBatteryLevelEntity?.state)}
                        unit="%"
                        icon="mdi:battery-medium"
                    ></progress-bar>
                `: ''}
                ${showRange ? html`
                    <progress-bar
                        value=${Number(this.vehicleRangeEntity?.state)}
                        max_value=${this.config?.feat_max_range || 600}
                        unit=${this.vehicleRangeEntity?.attributes.unit_of_measurement || ''}
                        icon="mdi:map-marker-distance"
                    ></progress-bar>
                `: ''}
            </div>
        `;
    }
}

customElements.define('vehicle-info', VehicleInfo);

export { VehicleInfo };