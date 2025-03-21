import { LitElement, html, css } from 'lit';
import { loadHaForm } from './load-ha-form/load-ha-form';
import { mainSchema, optionalEntitySchema } from './ha-form-schema';
import translations from './translations.js'

// Editor for the card configuration
class CustomCardEditor extends LitElement {
    static get properties() {
        return {
            hass: { type: Object },
            config: { type: Object },
            _lang: { type: String },
            _deviceIdChanged: { type: Boolean }
        };
    }

    static get styles() {
        return css`
            .form-container {
                display: flex;
                flex-direction: column;
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
            .entity-actions {
                display: flex;
                justify-content: flex-end;
                margin-top: 8px;
            }
            .add-entity {
                margin-top: 16px;
            }
            .entity-section {
                margin-top: 24px;
                padding-top: 16px;
                border-top: 1px solid var(--divider-color);
            }
            .entity-status {
                margin: 8px 0;
                padding: 8px;
                border-radius: 4px;
                background-color: var(--secondary-background-color);
            }
            .entity-status.success {
                background-color: var(--success-color);
                color: var(--text-primary-color);
            }
            .entity-status.warning {
                background-color: var(--warning-color);
                color: var(--text-primary-color);
            }
        `;
    }

    constructor() {
        super();
        this.config = {};
        this.optionalEntities = [];
        this.openEVSEEntities = {};
        this.deviceEntitiesLoaded = false;
        this._translations = translations;
        this._deviceIdChanged = false;
    }

    async firstUpdated() {
        try {
            await loadHaForm();
        } catch (error) {
            console.error('Error loading ha-form:', error);
        }
        this._lang = this.hass?.language || "en";
    }

    setConfig(config) {
        this.config = config;
        this.optionalEntities = config.optional_entities || [];

        // If device_id is already defined and we haven't loaded the entities yet
        if (config.device_id && this.hass && !this.deviceEntitiesLoaded) {
            this._loadDeviceEntities(config.device_id);
        }
    }

    // Function to check if an entity is already configured
    _isEntityConfigured(configKey) {
        return this.config[configKey] && this.config[configKey].length > 0;
    }

    // Function to load entities associated with an OpenEVSE device
    async _loadDeviceEntities(deviceId) {
        if (!deviceId || !this.hass) return;

        // Get all entities for this device
        const deviceEntities = {};
        const entityRegistry = Object.values(this.hass.entities || {});

        // Filter entities belonging to this device
        const deviceEntitiesList = entityRegistry.filter(
            entity => entity.device_id === deviceId
        );

        // Attempt to match entities with required fields
        // Modified to include entity type in the mapping
        const entityMappings = {
            override_entity: { names: ["override_state"], domains: ["select"], preferredPattern: "select.openevse_override_state" },
            status_entity: { names: ["station_status"], domains: ["sensor"], preferredPattern: "sensor.openevse_station_status" },
            power_entity: { names: ["current_power_usage"], domains: ["sensor"], preferredPattern: "sensor.openevse_current_power_usage" },
            current_entity: { names: ["charging_current"], domains: ["sensor"], preferredPattern: "sensor.openevse_charging_current" },
            vehicle_connected_entity: { names: ["vehicle_connected"], domains: ["binary_sensor"], preferredPattern: "binary_sensor.openevse_vehicle_connected" },
            charging_status_entity: { names: ["charging_status"], domains: ["sensor"], preferredPattern: "sensor.openevse_charging_status" },
            charge_rate_entity: { names: ["charge_rate"], domains: ["number"], preferredPattern: "number.openevse_charge_rate" },
            session_energy_entity: { names: ["usage_this_session"], domains: ["sensor"], preferredPattern: "sensor.openevse_usage_this_session" },
            time_elapsed_entity: { names: ["charge_time_elapsed"], domains: ["sensor"], preferredPattern: "sensor.openevse_charge_time_elapsed" }
        };

        // For each required entity type, find the best match
        // but only if this entity is not already configured
        for (const [configKey, mapping] of Object.entries(entityMappings)) {
            // Do not replace already configured entities, unless the device_id has just changed
            if (this._isEntityConfigured(configKey) && !this._deviceIdChanged) {
                continue;
            }

            const { names, domains, preferredPattern } = mapping;

            // First look for the preferred pattern
            let matchedEntity = deviceEntitiesList.find(entity =>
                entity.entity_id.toLowerCase() === preferredPattern.toLowerCase()
            );

            // If not found, search using names and domains
            if (!matchedEntity) {
                matchedEntity = deviceEntitiesList.find(entity => {
                    const entityId = entity.entity_id.toLowerCase();
                    const domain = entityId.split('.')[0];

                    // Check if the domain matches
                    if (!domains.includes(domain)) {
                        return false;
                    }

                    // Check if the name matches any of the possible names
                    return names.some(name =>
                        entityId.includes(name.toLowerCase()) ||
                        (entity.original_name && entity.original_name.toLowerCase().includes(name.toLowerCase()))
                    );
                });
            }

            if (matchedEntity) {
                deviceEntities[configKey] = matchedEntity.entity_id;
            }
        }

        this.openEVSEEntities = deviceEntities;
        this.deviceEntitiesLoaded = true;

        // Create an updated copy of the configuration
        const updatedConfig = { ...this.config };

        // Merge detected entities into the configuration
        // whether the entity does not exist or the device_id has changed
        for (const [key, value] of Object.entries(deviceEntities)) {
            if (!this._isEntityConfigured(key) || this._deviceIdChanged) {
                updatedConfig[key] = value;
            }
        }

        // Reset the device_id change flag
        this._deviceIdChanged = false;

        // IMPORTANT: Update the local config object
        this.config = updatedConfig;

        // Trigger the config change event
        this._fireConfigChanged(updatedConfig);

        // Force component update
        this.requestUpdate();
    }

    // Main configuration handling
    _handleConfigChange(ev) {
        const updatedConfig = ev.detail.value;

        // If the device_id has changed, set the flag and load the corresponding entities
        if (updatedConfig.device_id !== this.config.device_id) {
            this._deviceIdChanged = true;
            this.deviceEntitiesLoaded = false; // Reset to force reloading

            // Update the entire config with all form values before loading entities
            this.config = { ...this.config, ...updatedConfig };

            this._loadDeviceEntities(updatedConfig.device_id);
        } else {
            // If other fields have changed, update the config normally
            this._dispatchConfigChanged(updatedConfig);
        }
    }


    _dispatchConfigChanged(updatedConfig) {
        const newConfig = {
            ...updatedConfig,
            optional_entities: this.optionalEntities,
        };

        // Update the local config object
        this.config = newConfig;

        this._fireConfigChanged(newConfig);
    }

    // Single function to trigger the config change event
    _fireConfigChanged(newConfig) {
        this.dispatchEvent(
            new CustomEvent("config-changed", {
                detail: { config: newConfig }
            })
        );
    }

    // Handling optional entities
    _addOptionalEntity(ev) {
        const entityId = ev.target.value;

        if (entityId && !this.optionalEntities.some((e) => e.id === entityId)) {
            this.optionalEntities = [
                ...this.optionalEntities,
                { id: entityId, name: null, icon: null },
            ];
            this._fireConfigChanged({
                ...this.config,
                optional_entities: this.optionalEntities
            });

            this._entityPickerKey++;
            this.requestUpdate();
        }
    }

    _removeEntity(index) {
        this.optionalEntities = this.optionalEntities.filter((_, i) => i !== index);

        this._fireConfigChanged({
            ...this.config,
            optional_entities: this.optionalEntities
        });
    }

    _updateOptionalEntity(index, changedValues) {
        // Create a copy of the current entity
        const updatedEntity = { ...this.optionalEntities[index] };

        // Update each field, handling empty values specially
        for (const key in changedValues) {
            // If a field is explicitly set to "" or undefined, set it to null
            if (changedValues[key] === "" || changedValues[key] === undefined) {
                updatedEntity[key] = null;
            } else {
                updatedEntity[key] = changedValues[key];
            }
        }

        // Update the entities array
        this.optionalEntities = this.optionalEntities.map((entity, i) =>
            i === index ? updatedEntity : entity
        );

        // Update the configuration and fire the event
        this._fireConfigChanged({
            ...this.config,
            optional_entities: this.optionalEntities
        });
    }

    // Check if all required entities have been found
    _getMissingEntities() {
        const requiredEntities = [
            "override_entity", "status_entity", "power_entity", "current_entity",
            "vehicle_connected_entity", "charging_status_entity", "charge_rate_entity",
            "session_energy_entity", "time_elapsed_entity"
        ];

        // Check both in the configuration and in the detected entities
        return requiredEntities.filter(entity => {
            const isInConfig = this.config[entity] && this.config[entity].length > 0;
            const isInDetected = this.openEVSEEntities[entity] && this.openEVSEEntities[entity].length > 0;
            return !isInConfig && !isInDetected;
        });
    }

    _t(key) {
        const lang = this._lang || "en";
        return this._translations[lang]?.[key] ||
            this._translations["en"]?.[key] ||
            key;
    }
    render() {
        if (!this.hass) {
            return html``;
        }

        // Get entities for the selected device
        const deviceEntities = {};
        const allDeviceEntities = [];

        if (this.config.device_id && this.hass.entities) {
            const entityRegistry = Object.values(this.hass.entities);

            // Filter entities by device ID
            const deviceEntityList = entityRegistry.filter(entity =>
                entity.device_id === this.config.device_id
            );

            // Group entities by domain
            deviceEntityList.forEach(entity => {
                const domain = entity.entity_id.split('.')[0];

                if (!deviceEntities[domain]) {
                    deviceEntities[domain] = [];
                }

                deviceEntities[domain].push(entity.entity_id);
                allDeviceEntities.push(entity.entity_id);
            });
        }

        // Create schema with entity lists
        const schema = mainSchema(deviceEntities);
        const optSchema = optionalEntitySchema(allDeviceEntities);
        const missingEntities = this._getMissingEntities();

        return html`
        <!-- Auto-detection status -->
        ${this.config.device_id ? html`
            <div class="entity-section">
                <h3>${this._t("required_entities")}</h3>
                ${this.deviceEntitiesLoaded ? html`
                    <div class="entity-status ${missingEntities.length > 0 ? 'warning' : 'success'}">
                        ${missingEntities.length === 0
                        ? this._t("entity_auto_success") + "!"
                        : this._t("entity_auto_fail") + ": " + missingEntities.join(', ')
                    }
                    </div>
                ` : html`
                    <div class="entity-status">
                        ${this._t("entity_auto_loading")}
                    </div>
                `}
            </div>
        ` : ''}
        
        <div class="form-container">
            ${!this.config.device_id ? html`
            <ha-form
                .hass=${this.hass}  
                .data=${this.openEVSEEntities}
                .schema=${[
                    {
                        name: "device_id",
                        selector: { device: { integration: "openevse", manufacturer: "OpenEVSE" } },
                        label: "OpenEVSE Device",
                        helper_text: "Select your OpenEVSE device to automatically populate all entities",
                        required: true
                    }
                ]}
                @value-changed=${this._handleConfigChange}
            ></ha-form>
            `: html`
            <!-- Main configuration -->
            <ha-form
                .hass=${this.hass}
                .data=${this.config}
                .schema=${schema}
                .computeLabel=${(schema) => schema.label || schema.name}
                .computeHelper=${(schema) => schema.helper_text}
                @value-changed=${this._handleConfigChange}
            ></ha-form>
            
            <!-- Additional entities -->
            <div class="entities">
                <h3>${this._t("additional entities")}</h3>
                
                ${this.optionalEntities?.map((entity, index) => html`
                    <div class="entity-row">
                        <ha-form
                            .hass=${this.hass}
                            .data=${entity}
                            .schema=${optSchema}
                            .computeLabel=${(schema) => schema.label || schema.name}
                            @value-changed=${(ev) => this._updateOptionalEntity(index, ev.detail.value)}
                        ></ha-form>
                        
                        <div class="entity-actions">
                            <ha-icon-button
                                .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
                                @click=${() => this._removeEntity(index)}
                            ></ha-icon-button>
                        </div>
                    </div>
                `)}
                
                <div class="add-entity">
                    <ha-entity-picker
                        .hass="${this.hass}"
                        .includeDomains=${['sensor', 'binary_sensor']}
                        .entityFilter=${(stateObj) => {
                    // Si pas d'ID de périphérique sélectionné, autoriser toutes les entités
                    if (!this.config.device_id) return true;

                    // Trouver l'entité dans le registre d'entités
                    const entityId = stateObj.entity_id;
                    const entityRegistry = this.hass.entities || {};

                    // Vérifier si l'entité appartient au périphérique sélectionné
                    for (const regEntityId in entityRegistry) {
                        const entity = entityRegistry[regEntityId];
                        if (entity.entity_id === entityId && entity.device_id === this.config.device_id) {
                            return true;
                        }
                    }

                    return false;
                }}
                        @value-changed="${this._addOptionalEntity}"
                    ></ha-entity-picker>
                </div>
            </div>
            `}
        </div>
    `
    }
}

export { CustomCardEditor };