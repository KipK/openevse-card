import {LitElement, html, nothing} from 'lit';
import {property, customElement} from 'lit/decorators.js';
import {CardConfig, EntityState} from '../types';
import './progress-bar';
import {cardStyles} from '../styles';

@customElement('vehicle-info')
export class VehicleInfo extends LitElement {
    @property({attribute: false}) config?: CardConfig;
    @property({attribute: false})
    vehicleBatteryLevelEntity?: EntityState | null;
    @property({ attribute: false }) vehicleRangeEntity?: EntityState | null;
    @property({ attribute: false }) showMoreInfoHandler?: (
        entityId: string
    ) => void;

    static override get styles() {
        return cardStyles;
    }

    // Specific handler for Session item
    private _handleSocClick() {
        const entityId = this.config?.vehicle_battery_level_entity;
        if (
            this.showMoreInfoHandler &&
            typeof entityId === 'string' &&
            entityId
        ) {
            this.showMoreInfoHandler(entityId);
        }
    }

    // Specific handler for Session item
    private _handleRangeClick() {
        const entityId = this.config?.vehicle_range_entity;
        if (
            this.showMoreInfoHandler &&
            typeof entityId === 'string' &&
            entityId
        ) {
            this.showMoreInfoHandler(entityId);
        }
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
                ${showSoc
                    ? html`
                          <progress-bar
                              value=${Number(
                                  this.vehicleBatteryLevelEntity?.state
                              )}
                              unit="%"
                              icon="mdi:battery-medium"
                              @click=${this._handleSocClick}
                          ></progress-bar>
                      `
                    : ''}
                ${showRange
                    ? html`
                          <progress-bar
                              value=${Number(this.vehicleRangeEntity?.state)}
                              max_value=${this.config?.feat_max_range || 600}
                              unit=${this.vehicleRangeEntity?.attributes
                                  .unit_of_measurement || nothing}
                              icon="mdi:map-marker-distance"
                              @click=${this._handleRangeClick}
                          ></progress-bar>
                      `
                    : ''}
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vehicle-info': VehicleInfo;
    }
}
