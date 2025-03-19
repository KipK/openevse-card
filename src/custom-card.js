import {LitElement, html} from 'lit';

import {cardStyles} from './styles.js';

import translations from './translations.js'
class CustomCard extends LitElement {
    static get properties() {
        return {
            hass: {type: Object},
            config: {type: Object},
            _sliderValue: {type: Number},
            _dragging: { type: Boolean },
            _lang: { type: String }
        };
    }

    constructor() {
        super();
        this._sliderValue = undefined;
        this._dragging = false;
        this._translations = translations;
    }

    firstUpdated() {
        this._lang = this.hass?.language || "en";
    }

    updated(changedProperties) {
        if (changedProperties.has("hass") && this.hass) {
            this._lang = this.hass.language || "en";
        }
    }

    // Card configuration options
    static getConfigElement() {
        return document.createElement('openevse-card-editor');
    }

    static getStubConfig() {
        return {
            header: true,
            name: 'Custom Card',
            override_entity: '',
            status_entity: '',
            power_entity: '',
            current_entity: '',
            charge_rate_entity: '',
            vehicleConnectedEntity: '',
            charging_status_entity: '',
            session_energy_entity: '',
            time_elapsed_entity: '',
            optional_entities: [],
        };
    }

    // Card styling
    static get styles() {
        return cardStyles;
    }
    // Validate configuration
    setConfig(config) {
        if (!config.override_entity) {
            throw new Error('Please define an override entity (select)');
        }
        if (!config.status_entity) {
            throw new Error('Please define a status entity (sensor)');
        }
        if (!config.charge_rate_entity) {
            throw new Error('Please define a charge_rate entity (number)');
        }
        if (!config.vehicle_connected_entity) {
            throw new Error(
                'Please define a vehicle_connected entity (binary_sensor)'
            );
        }
        if (!config.current_entity) {
            throw new Error('Please define a current entity (sensor)');
        }

        this.config = config;
    }

    // Card size
    getCardSize() {
        return 3;
    }

    // Call service for the buttons
    _callService(entity_id, option) {
        this.hass.callService('select', 'select_option', {
            entity_id: entity_id,
            option: option.toString(),
        });
    }

    // Show entity more-info dialog
    _showMoreInfo(entity_id) {
        const event = new Event('hass-more-info', {
            bubbles: true,
            composed: true,
        });
        event.detail = {entityId: entity_id};
        this.dispatchEvent(event);
    }

    // Custom slider handlers
    _handleSliderStart(ev) {
        const chargeRateEntity =
            this.hass.states[this.config.charge_rate_entity];
        if (!chargeRateEntity) return;

        this._dragging = true;
        this._updateSliderValue(ev);
        this.addEventListener('mousemove', this._handleSliderMove);
        this.addEventListener('touchmove', this._handleSliderMove, {
            passive: false,
        });
        this.addEventListener('mouseup', this._handleSliderEnd);
        this.addEventListener('mouseout', this._handleSliderEnd);
        this.addEventListener('touchend', this._handleSliderEnd);
        ev.preventDefault();
    }

    _handleSliderMove = (ev) => {
        if (this._dragging) {
            this._updateSliderValue(ev);
            ev.preventDefault();
        }
    };

    _handleSliderEnd = (ev) => {
        if (this._dragging) {
            this.removeEventListener('mousemove', this._handleSliderMove);
            this.removeEventListener('touchmove', this._handleSliderMove);
            this.removeEventListener('mouseup', this._handleSliderEnd);
            this.removeEventListener('mouseout', this._handleSliderEnd);
            this.removeEventListener('touchend', this._handleSliderEnd);

            // Call service to update the actual entity value
            this.hass.callService('number', 'set_value', {
                entity_id: this.config.charge_rate_entity,
                value: this._sliderValue,
            });
            // wait for service call to have finished before stopping dragging state
            setTimeout(() => (this._dragging = false), 2000);
        }
    };

    _updateSliderValue(ev) {
        const chargeRateEntity =
            this.hass.states[this.config.charge_rate_entity];
        if (!chargeRateEntity) return;

        const track = this.shadowRoot.querySelector('.slider-wrapper');
        const trackRect = track.getBoundingClientRect();
        const min = chargeRateEntity.attributes.min || 6;
        const max = chargeRateEntity.attributes.max || 32;
        const step = chargeRateEntity.attributes.step || 1;

        // Get cursor position
        let x;
        if (ev.type.startsWith('touch')) {
            x = ev.touches[0].clientX;
        } else {
            x = ev.clientX;
        }

        // Calculate value based on position
        let percentage = (x - trackRect.left) / trackRect.width;
        percentage = Math.min(Math.max(percentage, 0), 1);

        // Calculate value respecting min, max, and step
        let value = min + percentage * (max - min);
        value = Math.round(value / step) * step;
        value = Math.min(Math.max(value, min), max);

        // Update slider value
        this._sliderValue = Number(value.toFixed(2));
        this.requestUpdate();
    }

    _convertSeconds = (seconds) => {
        const hours = ('0' + Math.floor(seconds / 3600)).slice(-2);
        const minutes = ('0' + Math.floor((seconds % 3600) / 60)).slice(-2);
        const remainingSeconds = ('0' + (seconds % 60)).slice(-2);
        return hours + ':' + minutes + ':' + remainingSeconds;
    };

    _t(key) {
        const lang = this._lang || "en";
        return this._translations[lang]?.[key] ||
            this._translations["en"]?.[key] ||
            key;
    }

    // Render the card
    render() {
        if (!this.hass || !this.config) {
            return html``;
        }

        // Get entities from hass states
        const overrideEntity = this.hass.states[this.config.override_entity];
        const statusEntity = this.hass.states[this.config.status_entity];
        const powerEntity = this.config.power_entity
            ? this.hass.states[this.config.power_entity]
            : null;
        const currentEntity = this.config.current_entity
            ? this.hass.states[this.config.current_entity]
            : null;
        const chargeRateEntity =
            this.hass.states[this.config.charge_rate_entity];
        const vehicleConnectedEntity =
            this.hass.states[this.config.vehicle_connected_entity];
        const chargingStatusEntity =
            this.hass.states[this.config.charging_status_entity];
        const sessionEnergyEntity =
            this.hass.states[this.config.session_energy_entity];
        const timeElapsedEntity =
            this.hass.states[this.config.time_elapsed_entity];
        const getOptionalEntities = (foreach) =>
            this.config.optional_entities?.map((entity) => {
                return {
                    name: entity.name
                        ? entity.name
                        : this.hass.states[entity.id].attributes.friendly_name,
                    value: this.hass.formatEntityState(
                        this.hass.states[entity.id]
                    ),
                    icon: entity.icon,
                    id: entity.id,
                };
            }) ?? [];

        const optionalEntities = getOptionalEntities();

        // Check if entities exist
        if (
            !overrideEntity ||
            !statusEntity ||
            !chargeRateEntity ||
            !vehicleConnectedEntity
        ) {
            return html`
                <ha-card>
                    <div class="card-content">
                        Entity not found:
                        ${!overrideEntity ? this.config.override_entity : ''}
                        ${!statusEntity ? this.config.status_entity : ''}
                        ${!chargeRateEntity
                            ? this.config.charge_rate_entity
                            : ''}
                        ${!vehicleConnectedEntity
                            ? this.config.vehicle_connected_entity
                            : ''}
                        ${!currentEntity ? this.config.current_entity : ''}
                    </div>
                </ha-card>
            `;
        }

        // Slider calculations
        const min = chargeRateEntity.attributes.min || 0;
        const max = chargeRateEntity.attributes.max || 100;
        const value = this._dragging
            ? this._sliderValue
            : Number(chargeRateEntity.state);
        const percentage = ((value - min) / (max - min)) * 100;

        // Format the slider value for display
        const formatValue = (val) => {
            const step = chargeRateEntity.attributes.step || 1;
            return step < 1 ? val.toFixed(1) : val.toFixed(0);
        };

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
                                        this.config.status_entity
                                    )}
                            >
                                <ha-icon
                                    icon="${statusEntity.state == 'active'
                                        ? 'mdi:lightning-bolt'
                                        : 'mdi:cancel'}"
                                    class="${statusEntity.state == 'active'
                                        ? chargingStatusEntity == 'charging'
                                            ? 'charging'
                                            : 'active'
                                        : 'disabled'}"
                                ></ha-icon>
                            </div>
                            <div
                                class="status-icon clickable"
                                @click=${() =>
                                    this._showMoreInfo(
                                        this.config.vehicle_connected_entity
                                    )}
                            >
                                <ha-icon
                                    icon="${vehicleConnectedEntity.state ==
                                    'off'
                                        ? 'mdi:car-off'
                                        : 'mdi:car'}"
                                    class="${vehicleConnectedEntity.state ==
                                    'off'
                                        ? 'disabled'
                                        : 'active'}"
                                ></ha-icon>
                            </div>
                        </div>
                        <div class="status-heading">
                            <div
                                class="status-badge ${chargingStatusEntity.state ==
                                'error'
                                    ? 'badge-error'
                                    : statusEntity.state == 'disabled'
                                    ? 'badge-disabled'
                                    : chargingStatusEntity.state == 'charging'
                                    ? 'badge-charging'
                                    : 'badge-active'}"
                            >
                                 ${this._t(chargingStatusEntity.state)}
                            </div>
                        </div>
                    </div>
                    <div class="grid-container">
                        ${powerEntity
                            ? html`
                                  <div class="grid-item">
                                      <div class="grid-item-label"> ${this._t("power")}</div>
                                      <div
                                          class="grid-item-value current-value clickable"
                                          @click=${() =>
                                              this._showMoreInfo(
                                                  this.config.power_entity
                                              )}
                                      >
                                          ${this.hass.formatEntityState(
                                              powerEntity
                                          )}
                                      </div>
                                  </div>
                              `
                            : ''}
                        ${currentEntity
                            ? html`
                                  <div class="grid-item">
                                      <div class="grid-item-label">${this._t("current")}</div>
                                      <div
                                          class="grid-item-value current-value clickable"
                                          @click=${() =>
                                              this._showMoreInfo(
                                                  this.config.current_entity
                                              )}
                                      >
                                          ${this.hass.formatEntityState(
                                              currentEntity
                                          )}
                                      </div>
                                  </div>
                              `
                            : ''}
                        ${sessionEnergyEntity
                            ? html`
                                  <div class="grid-item">
                                      <div class="grid-item-label">${this._t("session")}</div>
                                      <div
                                          class="grid-item-value current-value clickable"
                                          @click=${() =>
                                              this._showMoreInfo(
                                                  this.config
                                                      .session_energy_entity
                                              )}
                                      >
                                          ${this.hass.formatEntityState(
                                              sessionEnergyEntity
                                          )}
                                      </div>
                                  </div>
                              `
                            : ''}
                        ${timeElapsedEntity
                            ? html`
                                  <div class="grid-item">
                                      <div class="grid-item-label">${this._t("elapsed")}</div>
                                      <div
                                          class="grid-item-value current-value"
                                      >
                                          ${this._convertSeconds(
                                              timeElapsedEntity.state
                                          )}
                                      </div>
                                  </div>
                              `
                            : ''}
                    </div>
                    <div class="override-controls">
                        <div class="override-row">
                            <div
                                class="override-button ${overrideEntity.state ==
                                'active'
                                    ? 'active'
                                    : ''}"
                                data-option="active"
                                @click=${() =>
                                    this._callService(
                                        this.config.override_entity,
                                        'active'
                                    )}
                            >
                                <ha-icon
                                    icon="mdi:lightning-bolt"
                                    class="${overrideEntity.state == 'active' &&
                                    chargingStatusEntity.state == 'charging'
                                        ? 'charging'
                                        : ''}"
                                ></ha-icon>
                            </div>
                            <div
                                class="override-button ${overrideEntity.state ==
                                'auto'
                                    ? 'active'
                                    : ''}"
                                data-option="auto"
                                @click=${() =>
                                    this._callService(
                                        this.config.override_entity,
                                        'auto'
                                    )}
                            >
                                <ha-icon
                                    icon="mdi:robot"
                                    class="${overrideEntity.state == 'auto' &&
                                    chargingStatusEntity.state == 'charging'
                                        ? 'charging'
                                        : ''}"
                                ></ha-icon>
                            </div>
                            <div
                                class="override-button ${overrideEntity.state ==
                                'disabled'
                                    ? 'active'
                                    : ''}"
                                data-option="disabled"
                                @click=${() =>
                                    this._callService(
                                        this.config.override_entity,
                                        'disabled'
                                    )}
                            >
                                <ha-icon icon="mdi:cancel"></ha-icon>
                            </div>
                        </div>
                    </div>

                    <div class="slider-container">
                        <div class="slider-label">${this._t("charge rate")}</div>
                        <div class="slider-badge">
                            ${formatValue(value)}
                            ${chargeRateEntity.attributes.unit_of_measurement ||
                            ''}
                        </div>
                        <div class="slider-row">
                            <div
                                class="slider-wrapper"
                                @mousedown=${this._handleSliderStart}
                                @touchstart=${this._handleSliderStart}
                            >
                                <div
                                    class="slider-track clickable"
                                    style="width: ${percentage}%"
                                ></div>
                                <div
                                    class="slider-knob"
                                    style="left: calc(${percentage}% - 16px)"
                                ></div>
                            </div>
                        </div>
                    </div>
                    ${optionalEntities.map(
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
                                            ${entity.name}
                                        </div>
                                    </div>
                                    <div
                                        class="entity-value clickable"
                                        @click=${() =>
                                            this._showMoreInfo(entity.id)}
                                    >
                                        ${entity.value}
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

export {CustomCard};
