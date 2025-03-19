import {LitElement, html, css} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {loadHaForm} from './load-ha-form/load-ha-form';

// Editor for the card configuration
class CustomCardEditor extends LitElement {
    static get properties() {
        return {
            hass: {type: Object},
            config: {type: Object},
        };
    }

    firstUpdated() {
        (async () => await loadHaForm())();
    }

    static get styles() {
        return css`
            .form-container {
                display: flex;
                flex-direction: column;
            }
            .row {
                padding: 8px 0;
                margin-bottom: 8px;
            }
            .entities {
                margin-top: 16px;
            }
            .entity-row {
                padding: 8px;
                margin-bottom: 8px;
                border: 1px solid var(--divider-color);
                border-radius: 4px;
            }
            .ha-form-selector {
                width: 100%;
                margin-bottom: 8px;
            }
            .entity-name {
                margin-bottom: 8px;
            }

            .entity-row label {
                display: flex;
                align-items: center;
                gap: 4px;
            }
            .remove-button {
                display: flex;
                justify-content: flex-end;
            }
            .add-entity {
                margin-top: 8px;
            }
        `;
    }

    setConfig(config) {
        this.config = config;
        this.optionalEntities = config.optional_entities || [];
    }

    // Handle optional entities
    _handleEntitySelection(ev) {
        const entityId = ev.target.value;
        if (entityId && !this.optionalEntities.some((e) => e.id === entityId)) {
            this.optionalEntities = [
                ...this.optionalEntities,
                {id: entityId, name: null, icon: null},
            ];
            this._updateConfig();
        }
    }

    _editDetailElement(ev) {
        this._subElementEditorConfig = ev.detail.subElementConfig;
    }

    _updateConfig() {
        const event = new CustomEvent('config-changed', {
            detail: {
                config: {
                    ...this.config,
                    optional_entities: this.optionalEntities,
                },
            },
        });
        this.dispatchEvent(event);
    }

    _removeEntity(index) {
        this.optionalEntities = this.optionalEntities.filter(
            (_, i) => i !== index
        );
        this._updateConfig();
    }

    _updateEntity(index, field, value) {
        this.optionalEntities[index] = {
            ...this.optionalEntities[index],
            [field]: value,
        };
        this._updateConfig();
    }

    // Handle configuration changes
    _valueChanged(ev) {
        if (!this.config || !this.hass) {
            return;
        }

        const target = ev.target;
        const value = ev.detail?.value || ev.target.value;
        const configValue = target.configValue;

        if (this.config[configValue] === value) {
            return;
        }

        const newConfig = {
            ...this.config,
            [configValue]:
                target.checked !== undefined ? target.checked : value,
        };

        // Fire config changed event
        const event = new CustomEvent('config-changed', {
            detail: {config: newConfig},
        });
        this.dispatchEvent(event);
    }

    render() {
        if (!this.hass || !this.config) {
            return html``;
        }

        return html`
            <div class="form-container">
                <div class="row">
                    <ha-switch
                        .checked=${this.config.header !== false}
                        .configValue=${'header'}
                        @change=${this._valueChanged}
                    ></ha-switch>
                    <span>Show Header</span>
                </div>

                <div class="row">
                    ${this.config.header !== false
                        ? html`
                              <ha-textfield
                                  label="Card Name"
                                  .value=${this.config.name || ''}
                                  .configValue=${'name'}
                                  @input=${this._valueChanged}
                              ></ha-textfield>
                          `
                        : ''}
                </div>
                <div class="row">
                    <ha-selector
                        .hass=${this.hass}
                        .selector=${{
                            entity: {domain: ['input_select', 'select']},
                        }}
                        .value=${this.config.override_entity || ''}
                        .configValue=${'override_entity'}
                        @value-changed=${this._valueChanged}
                        label="Override State Entity (Select)"
                        required
                    ></ha-selector>
                </div>
                <div class="row">
                    <ha-selector
                        .hass=${this.hass}
                        .selector=${{entity: {domain: ['sensor']}}}
                        .value=${this.config.status_entity || ''}
                        .configValue=${'status_entity'}
                        @value-changed=${this._valueChanged}
                        label="Status Entity (Sensor)"
                        required
                    ></ha-selector>
                </div>
                <div class="row">
                    <ha-selector
                        .hass=${this.hass}
                        .selector=${{entity: {domain: ['sensor']}}}
                        .value=${this.config.power_entity || ''}
                        .configValue=${'power_entity'}
                        @value-changed=${this._valueChanged}
                        label="Power Entity (Sensor, optional)"
                    ></ha-selector>
                </div>
                <div class="row">
                    <ha-selector
                        .hass=${this.hass}
                        .selector=${{entity: {domain: ['sensor']}}}
                        .value=${this.config.current_entity || ''}
                        .configValue=${'current_entity'}
                        @value-changed=${this._valueChanged}
                        label="Current Entity (Sensor)"
                    ></ha-selector>
                </div>
                <div class="row">
                    <ha-selector
                        .hass=${this.hass}
                        .selector=${{entity: {domain: ['binary_sensor']}}}
                        .value=${this.config.vehicle_connected_entity || ''}
                        .configValue=${'vehicle_connected_entity'}
                        @value-changed=${this._valueChanged}
                        label="Vehicle Connected Entity (Binary Sensor)"
                    ></ha-selector>
                </div>
                <div class="row">
                    <ha-selector
                        .hass=${this.hass}
                        .selector=${{entity: {domain: ['sensor']}}}
                        .value=${this.config.charging_status_entity || ''}
                        .configValue=${'charging_status_entity'}
                        @value-changed=${this._valueChanged}
                        label="Charging status Entity (Sensor)"
                    ></ha-selector>
                </div>
                <div class="row">
                    <ha-selector
                        .hass=${this.hass}
                        .selector=${{
                            entity: {domain: ['input_number', 'number']},
                        }}
                        .value=${this.config.charge_rate_entity || ''}
                        .configValue=${'charge_rate_entity'}
                        @value-changed=${this._valueChanged}
                        label="Charge Rate Entity (Number)"
                        required
                    ></ha-selector>
                </div>
                <div class="row">
                    <ha-selector
                        .hass=${this.hass}
                        .selector=${{entity: {domain: ['sensor']}}}
                        .value=${this.config.session_energy_entity || ''}
                        .configValue=${'session_energy_entity'}
                        @value-changed=${this._valueChanged}
                        label="Session Energy Entity (sensor)"
                        required
                    ></ha-selector>
                </div>
                <div class="row">
                    <ha-selector
                        .hass=${this.hass}
                        .selector=${{entity: {domain: ['sensor']}}}
                        .value=${this.config.time_elapsed_entity || ''}
                        .configValue=${'time_elapsed_entity'}
                        @value-changed=${this._valueChanged}
                        label="Time Elapsed Seconds Entity (sensor)"
                        required
                    ></ha-selector>
                </div>

                <div class="entities">
                    <h3>Additional entities</h3>
                    ${this.optionalEntities.map(
                        (entity, index) => html`
                            <div class="entity-row">
                                <h4>Entity:</h4>
                                <div class="entity-name">
                                    <ha-textfield
                                        .label="${'name'}"
                                        .helper="${'Entity name'}"
                                        .value="${entity.name
                                            ? entity.name
                                            : ''}"
                                        @change="${(e) =>
                                            this._updateEntity(
                                                index,
                                                'name',
                                                e.target.value
                                            )}"
                                    ></ha-textfield>
                                </div>
                                <div class="ha-form-selector">
                                    <ha-entity-picker
                                        .hass="${this.hass}"
                                        .value=${entity.id}
                                        .includeDomains=${[
                                            'sensor',
                                            'binary_sensor',
                                        ]}
                                        @value-changed="${this
                                            ._handleEntitySelection}"
                                    ></ha-entity-picker>
                                </div>

                                <div class="ha-form-selector">
                                    <ha-icon-picker
                                        .value="${entity.icon}"
                                        @value-changed="${(e) =>
                                            this._updateEntity(
                                                index,
                                                'icon',
                                                e.detail.value
                                            )}"
                                    ></ha-icon-picker>
                                </div>
                                <div class="remove-button">
                                    <button
                                        @click="${() =>
                                            this._removeEntity(index)}"
                                    >
                                        remove ❌
                                    </button>
                                </div>
                            </div>
                        `
                    )}

                    <div class="add-entity">
                        <h4>Add Entity</h4>
                        <ha-entity-picker
                            .hass="${this.hass}"
                            .includeDomains=${['sensor', 'binary_sensor']}
                            @value-changed="${this._handleEntitySelection}"
                        ></ha-entity-picker>
                    </div>
                </div>
            </div>
        `;
    }
}

export {CustomCardEditor};
