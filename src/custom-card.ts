import { LitElement, html, PropertyValues } from 'lit-element';
import { property, state } from 'lit/decorators.js';
import { HomeAssistant, CardConfig, OptionalEntity, CustomDetailEvent, Limit, EntityState, EntityIdKey } from './types'; // Added EntityIdKey import
import { cardStyles } from './styles';
import { localize } from './utils/translations';
import { loadHaComponents } from './utils/load-ha-components';
import './components/evse-slider';
import './components/limit';
import './components/progress-bar';
import './components/status-icons';
import './components/status-heading';
import './components/info-grid';
import './components/vehicle-info';
import './components/override-controls';
import './components/optional-entities';

class CustomCard extends LitElement {
    @property({ attribute: false }) hass?: HomeAssistant;
    @property({ attribute: false }) config?: CardConfig;

    @state() private _lang?: string;
    @state() private _localTimeElapsed: number = 0;
    @state() private _lastEntityTime: number = 0;
    @state() private _timeUpdateInterval: number | null = null;
    @state() private _isCharging: boolean = false;
    @state() private _limit?: Limit | null = null;
    @state() private _hasLimit?: boolean = false;

    constructor() {
        super();
    }

    override disconnectedCallback(): void {
        super.disconnectedCallback();
        if (this._timeUpdateInterval) {
            clearInterval(this._timeUpdateInterval);
            this._timeUpdateInterval = null;
        }
    }

    override async firstUpdated(): Promise<void> {
            try {
                await loadHaComponents();
            } catch (error) {
                console.error('Error loading ha-components:', error);
            }
            this._lang = this.hass?.language || "en";
        }

    public getGridOptions() {
        return {
            columns: 12,
            max_columns: 12,
            min_columns: 9
        };
    }

    _setupTimeInterval(): void {
        // Clear any existing interval
        if (this._timeUpdateInterval) {
            clearInterval(this._timeUpdateInterval);
            this._timeUpdateInterval = null;
        }

        // Only set up interval if charging
        if (this._isCharging) {
            // Set up new interval that runs every second
            this._timeUpdateInterval = window.setInterval(() => {
                // Increment local time by 1 second in minutes (1/60)
                this._localTimeElapsed += (1 / 60);
            }, 1000);
        }
    }


    override updated(changedProperties: PropertyValues): void {
        if (changedProperties.has("hass") && this.hass) {
            this._lang = this.hass.language || "en";

            // Check if charging status has changed
            if (this.config && this.config.charging_status_entity &&
                this.hass.states[this.config.charging_status_entity]) {

                    const chargingEntity = this.hass.states[this.config.charging_status_entity];
                    const isNowCharging = chargingEntity.state === "charging";

                    // If charging status changed
                    if (isNowCharging !== this._isCharging) {
                        this._isCharging = isNowCharging;

                        // Update interval based on new status
                        this._setupTimeInterval();
                    }
                }

            // Check if time_elapsed_entity exists and has changed
            if (this.config && this.config.time_elapsed_entity &&
                this.hass.states[this.config.time_elapsed_entity]) {

                const timeEntity = this.hass.states[this.config.time_elapsed_entity];
                const newTime = parseFloat(timeEntity.state);

                // If the entity time has changed, update our local time
                if (!isNaN(newTime) && newTime !== this._lastEntityTime) {
                    this._lastEntityTime = newTime;
                    this._localTimeElapsed = newTime;
                }
            }

            // check if limit status has changed
            if (this.config && this.config.limit_active_entity &&
                this.hass.states[this.config.limit_active_entity]) {
                const newLimitActive = this.hass.states[this.config.limit_active_entity].state === "on";
                if (newLimitActive != this._hasLimit) {
                    this._hasLimit = newLimitActive;
                    if (this.config.device_id) {
                        this._getLimit().then(limit => {
                            this._limit = limit;
                        });
                    }
                }
            }
        }

        // Handle first load setup
        if (changedProperties.has("config") && !changedProperties.has("hass") &&
            this.config && this.hass) {

            // Check charging status on first load
            if (this.config.charging_status_entity &&
                this.hass.states[this.config.charging_status_entity]) {

                const chargingEntity = this.hass.states[this.config.charging_status_entity];
                this._isCharging = chargingEntity.state === "charging";
            }

            // Initialize time elapsed
            if (this.config.time_elapsed_entity &&
                this.hass.states[this.config.time_elapsed_entity]) {

                const timeEntity = this.hass.states[this.config.time_elapsed_entity];
                if (timeEntity) {
                    this._lastEntityTime = parseFloat(timeEntity.state);
                    this._localTimeElapsed = this._lastEntityTime;

                    // Set up timer if charging
                    if (this._isCharging) {
                        this._setupTimeInterval();
                    }
                }
            }
        }
    }

    // Card configuration options
    static getConfigElement(): HTMLElement {
        return document.createElement('openevse-card-editor');
    }

    static getStubConfig(): CardConfig {
        return {
            header: true,
            name: 'OpenEVSE',
            feat_soc: false,
            feat_range: false,
            feat_max_range: 600,
            feat_max_energy: 100,
            device_id: '',
            override_entity: '',
            status_entity: '',
            power_entity: '',
            current_entity: '',
            charge_rate_entity: '',
            vehicle_connected_entity: '',
            charging_status_entity: '',
            session_energy_entity: '',
            time_elapsed_entity: '',
            wifi_signal_strength_entity: '',
            limit_active_entity: '',
            vehicle_battery_level_entity: '',
            vehicle_range_entity: '',
            optional_entities: [],
        };
    }

    // Card styling
    static override get styles() {
        return cardStyles;
    }

    // Validate configuration
    setConfig(config: CardConfig): void {
        this.config = config;
    }

    // Card size
    getCardSize(): number {
        return 3;
    }

    // Call service for the buttons
    _selectOverrideState(entity_id: string, option: string | number): void {
        if (this.hass) {
            this.hass.callService('select', 'select_option', {
                entity_id: entity_id,
                option: option.toString(),
            });
        }
    }
    // Call service to get limit
    async _getLimit(): Promise<Limit | null> {
        if (!this.hass) return null;

        try {
            const response = await this.hass.callService('openevse', 'get_limit', {
                device_id: this.config?.device_id,
            }, undefined, false, true);

            const limit: Limit | null = response?.response ?
                response.response as unknown as Limit
                : null;
            return limit;
        } catch (error) {
            console.error('Error while getting limit', error);
            return null;
        }
    }

    // Set limit function
    _setLimit(type: string, value: number): void {
        if (!this.hass) return;
        try {
            this.hass.callService('openevse', 'set_limit', {
                device_id: this.config?.device_id,
                type: type,
                value: value,
                auto_release: true
            }, undefined, false, false);
            return;
        } catch (error) {
            console.error('Error while setting limit', error);
            return;
        }
    }

    // Delete limit function
    _delLimit(): void {
        if (!this.hass) return;
        try {
            this.hass.callService('openevse', 'clear_limit', {
                device_id: this.config?.device_id,
            }, undefined, false, false);
            return;
        } catch (error) {
            console.error('Error while removing limit', error);
            return;
        }

    }

    // Show entity more-info dialog
    _showMoreInfo(entity_id: string): void {
        const event = new Event('hass-more-info', {
            bubbles: true,
            composed: true,
        }) as CustomDetailEvent;

        event.detail = { entityId: entity_id };
        this.dispatchEvent(event);
       }

       // Helper to safely get entity state
       _getEntityState(entityIdKey: EntityIdKey): EntityState | null { // Use the specific EntityIdKey type
           const entityId = this.config?.[entityIdKey];
           // Ensure entityId is a non-empty string and states exist
           if (typeof entityId !== 'string' || !entityId || !this.hass?.states) {
               return null;
           }
           // Access states only if entityId is a valid string key
           return this.hass.states[entityId] || null;
       }

       _convertSeconds(sec: number): string {
        if (isNaN(sec) || sec < 0 || sec == undefined) {
            return "00:00:00";
        }

        const hours = Math.floor(sec / 3600);
        const minutes = Math.floor((sec % 3600) / 60);
        const seconds = Math.floor(sec % 60);

        return [hours, minutes, seconds]
            .map(unit => String(unit).padStart(2, '0'))
            .join(':');
    }

    _convertTime(t: number): string {
        if (isNaN(t) || t < 0) {
            return "00:00:00";
        }
        const totalSeconds = Math.round(t * 60);
        return this._convertSeconds(totalSeconds);
       }

       // Removed the _t method

       _updateSlider(e: CustomEvent) {
        if (this.hass && this.config?.charge_rate_entity) {
            this.hass.callService('number', 'set_value', {
                entity_id: this.config.charge_rate_entity,
                value: e.detail.value
            })
        }
    }

    // Render the card
    override render() {
        if (!this.hass || !this.config) {
            return html``;
        }

        // Get entities using the helper method
        const overrideEntity = this._getEntityState('override_entity');
        const statusEntity = this._getEntityState('status_entity');
        const powerEntity = this._getEntityState('power_entity');
        const currentEntity = this._getEntityState('current_entity');
        const chargeRateEntity = this._getEntityState('charge_rate_entity');
        const vehicleConnectedEntity = this._getEntityState('vehicle_connected_entity');
        const chargingStatusEntity = this._getEntityState('charging_status_entity');
        const sessionEnergyEntity = this._getEntityState('session_energy_entity');
        const timeElapsedEntity = this._getEntityState('time_elapsed_entity');
        const wifiSignalEntity = this._getEntityState('wifi_signal_strength_entity');
        const vehicleBatteryLevelEntity = this._getEntityState('vehicle_battery_level_entity');
        const vehicleRangeEntity = this._getEntityState('vehicle_range_entity');


        const getOptionalEntities = (): OptionalEntity[] =>
            this.config?.optional_entities?.map((entity) => {
                return {
                    name: entity.name as string | null
                        ? entity.name as string | null
                        : entity.id ? this.hass?.states[entity.id]?.attributes.friendly_name as string | null : null,
                    value: entity.id ? this.hass?.formatEntityState(
                        this.hass.states[entity.id]
                    ) ?? null : null,
                    icon: entity.icon,
                    id: entity.id ? entity.id : undefined,
                };
            }) ?? [];

        // wifiIcon function removed as it's now in status-icons component

        const optionalEntities = getOptionalEntities();


        // HTML output

        return html`
        <ha-card>
            ${this.config.header
                        ? html`<h1 class="card-header">
                    ${this.config.name || 'OpenEVSE'}
                    </h1>`
                        : ''}
            <div class="card-content">
                <div class="evse-states">
                    <status-icons
                        .hass=${this.hass}
                        .config=${this.config}
                        .wifiSignalEntity=${wifiSignalEntity}
                        .statusEntity=${statusEntity}
                        .vehicleConnectedEntity=${vehicleConnectedEntity}
                        .chargingStatusEntity=${chargingStatusEntity}
                        .showMoreInfoHandler=${this._showMoreInfo.bind(this)}
                    ></status-icons>
                    <status-heading
                        .statusEntity=${statusEntity}
                        .chargingStatusEntity=${chargingStatusEntity}
                        .language=${this._lang}
                    ></status-heading>
                            </div>
                   <info-grid
                       .hass=${this.hass}
                       .config=${this.config}
                       .powerEntity=${powerEntity}
                       .currentEntity=${currentEntity}
                       .sessionEnergyEntity=${sessionEnergyEntity}
                       .timeElapsedEntity=${timeElapsedEntity}
                       .localTimeElapsed=${this._localTimeElapsed}
                       .language=${this._lang}
                       .showMoreInfoHandler=${this._showMoreInfo.bind(this)}
                       .convertTimeHandler=${this._convertTime.bind(this)}
                   ></info-grid>
                   <vehicle-info
                       .config=${this.config}
                       .vehicleBatteryLevelEntity=${vehicleBatteryLevelEntity}
                       .vehicleRangeEntity=${vehicleRangeEntity}
                   ></vehicle-info>

                  <override-controls
                      .config=${this.config}
                      .overrideEntity=${overrideEntity}
                      .chargingStatusEntity=${chargingStatusEntity}
                      .selectOverrideStateHandler=${this._selectOverrideState.bind(this)}
                  ></override-controls>
                    <div class="container">
                        <evse-slider
                            .min=${typeof chargeRateEntity?.attributes.min === 'number' ? chargeRateEntity.attributes.min : 0}
                            .max=${typeof chargeRateEntity?.attributes.max === 'number' ? chargeRateEntity.attributes.max : 32}
                            .step=${typeof chargeRateEntity?.attributes.step === 'number' ? chargeRateEntity.attributes.step : 1}
                            .value=${Number(chargeRateEntity?.state || 0)}
                            .unit=${typeof chargeRateEntity?.attributes.unit_of_measurement === 'string' ? chargeRateEntity.attributes.unit_of_measurement : 'A'}
                            .label=${localize("charge rate", this._lang)}
                            .disabled=${!chargeRateEntity}
                            @value-changed=${this._updateSlider}
                        ></evse-slider>
                    </div>
                    <!-- Limit -->
                    <div class="container">
                        <limit-component
                            .limit=${this._limit as Limit}
                            .setLimit=${this._setLimit.bind(this)}
                            .delLimit=${this._delLimit.bind(this)}
                            .feat_soc=${this.config.feat_soc || false}
                            .feat_range=${this.config.feat_range || false}
                            .range_max_value=${Number(this.config.feat_max_range)}
                            .energy_max_value=${Number(this.config.feat_max_energy)}
                            .range_unit=${String(vehicleRangeEntity?.attributes.unit_of_measurement || '')}
                            .language=${this._lang}
                        ></limit-component>
                    </div>
                    <!-- End of Limit -->
                    <optional-entities
                        .hass=${this.hass}
                        .entities=${optionalEntities}
                        .showMoreInfoHandler=${this._showMoreInfo.bind(this)}
                    ></optional-entities>
            </div>
        </ha-card>
    `;
    }
}

export { CustomCard };
