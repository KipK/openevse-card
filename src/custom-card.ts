import { LitElement, html, PropertyValues } from 'lit-element';
import { HomeAssistant, CardConfig, OptionalEntity, TranslationDict, CustomDetailEvent } from './types';
import { cardStyles } from './styles';
import translations from './translations';
import './evse-slider/evse-slider';

class CustomCard extends LitElement {
    static override get properties() {
        return {
            hass: { type: Object },
            config: { type: Object },
            _lang: { type: String },
            _localTimeElapsed: { type: Number },
            _lastEntityTime: { type: Number },
            _timeUpdateInterval: { type: Number },
            _isCharging: { type: Boolean }
        };
    }

    hass?: HomeAssistant;
    config?: CardConfig;
    _lang?: string;
    _localTimeElapsed: number = 0;
    _lastEntityTime: number = 0;
    _timeUpdateInterval: number | null = null;
    _isCharging: boolean = false;
    _translations: TranslationDict = translations;

    constructor() {
        super();
        this._translations = translations;
        this._localTimeElapsed = 0;
        this._lastEntityTime = 0;
        this._timeUpdateInterval = null;
        this._isCharging = false;
    }

    override disconnectedCallback(): void {
        super.disconnectedCallback();
        if (this._timeUpdateInterval) {
            clearInterval(this._timeUpdateInterval);
            this._timeUpdateInterval = null;
        }
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
                this.requestUpdate();
            }, 1000);
        }
    }

    override firstUpdated(): void {
        this._lang = this.hass?.language || "en";
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
    _callService(entity_id: string, option: string | number): void {
        if (this.hass) {
            this.hass.callService('select', 'select_option', {
                entity_id: entity_id,
                option: option.toString(),
            });
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

    _convertSeconds(sec: number): string {
        if (isNaN(sec) || sec < 0) {
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

    _t(key: string): string {
        const lang = this._lang || "en";
        return this._translations[lang]?.[key] ||
            this._translations["en"]?.[key] ||
            key;
    }

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

        // Get entities from hass states
        const overrideEntity = this.config.override_entity ? this.hass.states[this.config.override_entity] : null;
        const statusEntity = this.config.status_entity ? this.hass.states[this.config.status_entity] : null;
        const powerEntity = this.config.power_entity
            ? this.hass.states[this.config.power_entity]
            : null;
        const currentEntity = this.config.current_entity
            ? this.hass.states[this.config.current_entity]
            : null;
        const chargeRateEntity =
            this.config.charge_rate_entity ? this.hass.states[this.config.charge_rate_entity] : null;
        const vehicleConnectedEntity =
            this.config.vehicle_connected_entity ? this.hass.states[this.config.vehicle_connected_entity] : null;
        const chargingStatusEntity =
            this.config.charging_status_entity ? this.hass.states[this.config.charging_status_entity] : null;
        const sessionEnergyEntity =
            this.config.session_energy_entity ? this.hass.states[this.config.session_energy_entity] : null;
        const timeElapsedEntity =
            this.config.time_elapsed_entity ? this.hass.states[this.config.time_elapsed_entity] : null;

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

        const optionalEntities = getOptionalEntities();

        return html`
      <ha-card>
      ${this.config.header
                ? html`<h1 class="card-header">
            ${this.config.name || 'OpenEVSE'}
            </h1>`
                : ''}
      <div class="card-content">
          <div class="evse-states">
          <div class="status-icons">
              <div
              class="status-icon clickable"
              @click=${() =>
                this._showMoreInfo(
                    this.config?.status_entity || ''
                )}
              >
                <ha-icon
                    icon="${statusEntity?.state == 'active'
                ? vehicleConnectedEntity?.state == 'off' ? 'mdi:timer-sand' : 'mdi:lightning-bolt'
                    : 'mdi:cancel'}"
                    class="${statusEntity?.state == 'active'
                    ? chargingStatusEntity?.state == 'charging'
                        ? 'charging'
                        : 'active bg-active'
                    : 'disabled bg-disabled'}"
                ></ha-icon>
              </div>
              <div
              class="status-icon clickable"
              @click=${() =>
                this._showMoreInfo(
                    this.config?.vehicle_connected_entity || ''
                )}
              >
                <ha-icon
                    icon="${vehicleConnectedEntity?.state ==
                'off'
                ? 'mdi:car-off'
                : 'mdi:car'}"
                    class="${vehicleConnectedEntity?.state ==
                'off'
                ? 'disabled bg-disabled'
                : 'active bg-active'}"
                ></ha-icon>
              </div>
          </div>
          <div class="status-heading">
              <div
                  class="status-badge ${chargingStatusEntity?.state ==
                'error'
                ? 'badge-error'
                : statusEntity?.state == 'disabled'
                    ? 'badge-disabled'
                    : chargingStatusEntity?.state == 'charging'
                        ? 'badge-charging'
                        : 'badge-active'}"
              >
               ${this._t(chargingStatusEntity?.state || '')}
              </div>
          </div>
          </div>
          <div class="grid-container">
          ${powerEntity
                ? html`
                <div class="grid-item">
                    <div class="grid-item-label">${this._t("power")}</div>
                    <div
                    class="grid-item-value current-value clickable"
                    @click=${() =>
                        this._showMoreInfo(
                            this.config?.power_entity || ''
                        )}
                    >
                    ${powerEntity ? this.hass.formatEntityState(
                            powerEntity
                        ) : "0 W"}
                    </div>
                </div>
                `
                : html`
                <div class="grid-item">
                    <div class="grid-item-label">${this._t("power")}</div>
                    <div class="grid-item-value current-value">0 W</div>
                </div>`
            }
          ${currentEntity
                ? html`
                <div class="grid-item">
                    <div class="grid-item-label">${this._t("current")}</div>
                    <div
                    class="grid-item-value current-value clickable"
                    @click=${() =>
                        this._showMoreInfo(
                            this.config?.current_entity || ''
                        )}
                    >
                    ${currentEntity ? this.hass.formatEntityState(
                            currentEntity
                        ) : "0 A"}
                    </div>
                </div>
                `
                : html`
                <div class="grid-item">
                    <div class="grid-item-label">${this._t("current")}</div>
                    <div class="grid-item-value current-value">0 A</div>
                </div>`
            }
          ${sessionEnergyEntity
                ? html`
                <div class="grid-item">
                    <div class="grid-item-label">${this._t("session")}</div>
                    <div
                    class="grid-item-value current-value clickable"
                    @click=${() =>
                        this._showMoreInfo(
                            this.config?.session_energy_entity || ''
                        )}
                    >
                    ${sessionEnergyEntity ? this.hass.formatEntityState(
                            sessionEnergyEntity
                        ) : "0 kWh"}
                    </div>
                </div>
                `
                : html`
                <div class="grid-item">
                    <div class="grid-item-label">${this._t("session")}</div>
                    <div class="grid-item-value current-value">0 kWh</div>
                </div>`
            }

          ${timeElapsedEntity
                ? html`
          <div class="grid-item">
              <div class="grid-item-label">${this._t("elapsed")}</div>
              <div
              class="grid-item-value current-value"
              >
              ${this._convertTime(this._localTimeElapsed || 0)}
              </div>
          </div>
          `: html`
                <div class="grid-item">
                    <div class="grid-item-label">${this._t("elapsed")}</div>
                    <div class="grid-item-value current-value">00:00:00</div>
                </div>`
            }
          </div>
          <div class="override-controls">
          <div class="override-row">
              <div
              class="override-button ${overrideEntity?.state ==
                'active'
                ? 'active'
                : ''}"
              data-option="active"
              @click=${() =>
                this._callService(
                    this.config?.override_entity || '',
                    'active'
                )}
              >
              <ha-icon
                  icon="mdi:lightning-bolt"
                  class="${overrideEntity?.state == 'active' &&
                chargingStatusEntity?.state == 'charging'
                ? 'charging'
                : ''}"
              ></ha-icon>
              </div>
              <div
              class="override-button ${overrideEntity?.state ==
                'auto'
                ? 'active'
                : ''}"
              data-option="auto"
              @click=${() =>
                this._callService(
                    this.config?.override_entity || '',
                    'auto'
                )}
              >
              <ha-icon
                  icon="mdi:robot"
                  class="${overrideEntity?.state == 'auto' &&
                chargingStatusEntity?.state == 'charging'
                ? 'charging'
                : ''}"
              ></ha-icon>
              </div>
              <div
              class="override-button ${overrideEntity?.state ==
                'disabled'
                ? 'active'
                : ''}"
              data-option="disabled"
              @click=${() =>
                this._callService(
                    this.config?.override_entity || '',
                    'disabled'
                )}
              >
              <ha-icon icon="mdi:cancel"></ha-icon>
              </div>
          </div>
          </div>
          
            <evse-slider
                .min=${typeof chargeRateEntity?.attributes.min === 'number' ? chargeRateEntity.attributes.min : 0}
                .max=${typeof chargeRateEntity?.attributes.max === 'number' ? chargeRateEntity.attributes.max : 32}
                .step=${typeof chargeRateEntity?.attributes.step === 'number' ? chargeRateEntity.attributes.step : 1}
                .value=${Number(chargeRateEntity?.state || 0)}
                .unit=${typeof chargeRateEntity?.attributes.unit_of_measurement === 'string' ? chargeRateEntity.attributes.unit_of_measurement : 'A'}
                .label=${this._t("charge rate")}
                .disabled=${!chargeRateEntity}
                @value-changed=${this._updateSlider}
            ></evse-slider>
          ${optionalEntities?.map(
                (entity) => html`
              <div class="other-entities-container">
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
                        : html`
                        <div
                            class="entity-icon"
                        ></div>
                        `}

                  <div class="entity-label">
                      ${entity.name ? entity.name : entity.id ? entity.id : ""}
                  </div>
                  </div>
                  <div
                  class="entity-value clickable"
                  @click=${() =>
                        this._showMoreInfo(entity.id ? entity.id : "")}
                  >
                  ${entity.value ? entity.value : ""}
                  </div>
              </div>
              </div>
          `
            )}
      </div>
      </ha-card>
    `;
    }
}

export { CustomCard };
