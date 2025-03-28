import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';
import { HomeAssistant, CardConfig, OptionalEntity, SchemaItem } from './types';
import { loadHaComponents } from './utils/load-ha-components';
import { mainSchema, optionalEntitySchema } from './ha-form-schema';
import { localize } from './utils/translations';

// Editor for the card configuration
class CustomCardEditor extends LitElement {
    @property({ attribute: false }) hass?: HomeAssistant;
    @property({ attribute: false }) config: CardConfig = {};

    @state() private _lang?: string;
    @state() private _deviceIdChanged: boolean = false;
    @state() private optionalEntities: OptionalEntity[] = [];
    @state() private openEVSEEntities: Partial<CardConfig> = {};
    @state() private deviceEntitiesLoaded: boolean = false;
    @state() private _entityPickerKey: number = 0;

    static override get styles() {
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
       }

    override async firstUpdated(): Promise<void> {
        try {
            await loadHaComponents();
        } catch (error) {
            console.error('Error loading ha-components:', error);
        }
        this._lang = this.hass?.language || "en";
    }

    setConfig(config: CardConfig): void {
        this.config = config;
        this.optionalEntities = config.optional_entities || [];

        // If device_id is already defined and we haven't loaded the entities yet
        if (config.device_id && this.hass && !this.deviceEntitiesLoaded) {
            this._loadDeviceEntities(config.device_id);
        }
    }

    // Function to check if an entity is already configured
    _isEntityConfigured(configKey: string): boolean {
        return Boolean(this.config[configKey as keyof CardConfig] &&
            (this.config[configKey as keyof CardConfig] as string).length > 0);
    }

    // Function to load entities associated with an OpenEVSE device
    async _loadDeviceEntities(deviceId: string): Promise<void> {
        if (!deviceId || !this.hass) return;

        // Get all entities for this device
        const deviceEntities: Record<string, string> = {};
        const entityRegistry = Object.values(this.hass.entities || {});

        // Filter entities belonging to this device
        const deviceEntitiesList = entityRegistry.filter(
            entity => entity.device_id === deviceId
        );

        // Attempt to match entities with required fields
        // Modified to include entity type in the mapping
        type EntityMapping = {
            names: string[];
            domains: string[];
            preferredPattern: string;
        };

        const entityMappings: Record<string, EntityMapping> = {
            override_entity: { names: ["override_state"], domains: ["select"], preferredPattern: "select.openevse_override_state" },
            status_entity: { names: ["station_status"], domains: ["sensor"], preferredPattern: "sensor.openevse_station_status" },
            power_entity: { names: ["current_power_usage"], domains: ["sensor"], preferredPattern: "sensor.openevse_current_power_usage" },
            current_entity: { names: ["charging_current"], domains: ["sensor"], preferredPattern: "sensor.openevse_charging_current" },
            vehicle_connected_entity: { names: ["vehicle_connected"], domains: ["binary_sensor"], preferredPattern: "binary_sensor.openevse_vehicle_connected" },
            charging_status_entity: { names: ["charging_status"], domains: ["sensor"], preferredPattern: "sensor.openevse_charging_status" },
            charge_rate_entity: { names: ["charge_rate"], domains: ["number"], preferredPattern: "number.openevse_charge_rate" },
            session_energy_entity: { names: ["usage_this_session"], domains: ["sensor"], preferredPattern: "sensor.openevse_usage_this_session" },
            time_elapsed_entity: { names: ["charge_time_elapsed"], domains: ["sensor"], preferredPattern: "sensor.openevse_charge_time_elapsed" },
            wifi_signal_strength_entity: { names: ["wifi_signal_strength"], domains: ["sensor"], preferredPattern: "sensor.openevse_wifi_signal_strength" },
            limit_active_entity: { names: ["limit_active"], domains: ["binary_sensor"], preferredPattern: "sensor.openevse_limit_active" },
            vehicle_battery_level_entity: { names: ["vehicle_battery_level"], domains: ["sensor"], preferredPattern: "sensor.openevse_vehicle_battery_level" },
            vehicle_range_entity: { names: ["vehicle_range"], domains: ["sensor"], preferredPattern: "sensor.openevse_vehicle_range" },
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
                (updatedConfig as Record<keyof CardConfig, unknown>)[key as keyof CardConfig] = value;
            }
        }

        // Reset the device_id change flag
        this._deviceIdChanged = false;

        // Update the local config object
        this.config = updatedConfig;

        // Trigger the config change event
        this._fireConfigChanged(updatedConfig);

        // Force component update (already handled by @state)
        // this.requestUpdate();
    }

    // Main configuration handling
    _handleConfigChange(ev: CustomEvent): void {
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

    _dispatchConfigChanged(updatedConfig: CardConfig): void {
        const newConfig = {
            ...updatedConfig,
            optional_entities: this.optionalEntities,
        };

        // Update the local config object
        this.config = newConfig;

        this._fireConfigChanged(newConfig);
    }

    // Single function to trigger the config change event
    _fireConfigChanged(newConfig: CardConfig): void {
        this.dispatchEvent(
            new CustomEvent("config-changed", {
                detail: { config: newConfig }
            })
        );
    }

    // Handling optional entities
    _addOptionalEntity(ev: CustomEvent): void {
        const entityId = (ev.target as HTMLInputElement)?.value;

        if (entityId && !this.optionalEntities.some((e) => e.id === entityId)) {
            // Get the default icon for the entity
            const defaultIcon = typeof this.hass?.states[entityId]?.attributes?.icon === 'string' ? this.hass.states[entityId].attributes.icon : null;

            this.optionalEntities = [
                ...this.optionalEntities,
                { id: entityId, name: null, icon: defaultIcon, value: null },
            ];
            this._fireConfigChanged({
                ...this.config,
                optional_entities: this.optionalEntities
            });

            this._entityPickerKey++;
            // this.requestUpdate(); // Handled by @state
        }
    }

    _removeEntity(index: number): void {
        this.optionalEntities = this.optionalEntities.filter((_, i) => i !== index);

        this._fireConfigChanged({
            ...this.config,
            optional_entities: this.optionalEntities
        });
    }
    _updateOptionalEntity(index: number, changedValues: Partial<OptionalEntity>): void {
        // Create a copy of the current entity
        const updatedEntity = { ...this.optionalEntities[index] };

        // Iterate over the changed values and update the entity safely
        for (const key in changedValues) {
            if (Object.prototype.hasOwnProperty.call(changedValues, key)) {
                const typedKey = key as keyof OptionalEntity;
                const rawValue = changedValues[typedKey];

                // Process the value based on the key
                switch (typedKey) {
                    case 'id':
                        // ID is string | undefined. Convert empty string to undefined.
                        updatedEntity.id = (rawValue === "" || rawValue === undefined) ? undefined : String(rawValue);
                        break;
                    case 'name':
                    case 'icon':
                        // Name and Icon are string | null. Convert empty string/undefined to null.
                        updatedEntity[typedKey] = (rawValue === "" || rawValue === undefined) ? null : String(rawValue);
                        break;
                    // 'value' is not set via this form, so we don't handle it here.
                }
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
       _getMissingEntities(): string[] {
        const requiredEntities = [
            "override_entity", "status_entity", "power_entity", "current_entity",
            "vehicle_connected_entity", "charging_status_entity", "charge_rate_entity",
            "session_energy_entity", "time_elapsed_entity", "wifi_signal_strength_entity",
            "limit_active_entity", "vehicle_range_entity", "vehicle_battery_level_entity"
        ];

        // Check both in the configuration and in the detected entities
        return requiredEntities.filter(entity => {
            const isInConfig = this.config[entity as keyof CardConfig] &&
                (this.config[entity as keyof CardConfig] as string).length > 0;
            const isInDetected = this.openEVSEEntities[entity as keyof CardConfig] &&
                (this.openEVSEEntities[entity as keyof CardConfig] as string).length > 0;
            return !isInConfig && !isInDetected;
        });
       }

       // Removed the _t method

       override render() {
        if (!this.hass) {
            return html``;
        }

        // Get entities for the selected device
        const deviceEntities: Record<string, string[]> = {};

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
            });
        }

        // Create schema with entity lists and language
        const schema = mainSchema(deviceEntities, this._lang);
        const optSchema = optionalEntitySchema(deviceEntities, this._lang);
        const missingEntities = this._getMissingEntities();

        return html`
            <!-- Auto-detection status -->
            ${this.config.device_id ? html`
                <div class="entity-section">
                    ${this.deviceEntitiesLoaded ? html`
                        <div class="entity-status ${missingEntities.length > 0 ? 'warning' : 'success'}">
                            ${missingEntities.length === 0
                              ? localize("entity_auto_success", this._lang) + "!"
                              : localize("entity_auto_fail", this._lang) + ": " + missingEntities.join(', ')
                          }
                        </div>
                    ` : html`
                        <div class="entity-status">
                            ${localize("entity_auto_loading", this._lang)}
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
                              label: localize("openevse device", this._lang),
                              helper_text: localize("select your openevse device", this._lang),
                              required: true
                          }
                      ] as SchemaItem[]}
                    @value-changed=${this._handleConfigChange}
                ></ha-form>
                `: html`
                <!-- Main configuration -->
                <ha-form
                    .hass=${this.hass}
                    .data=${this.config}
                    .schema=${schema}
                    .computeLabel=${(schema: SchemaItem) => schema.label || schema.name}
                    .computeHelper=${(schema: SchemaItem) => schema.helper_text}
                    @value-changed=${this._handleConfigChange}
                ></ha-form>

                <!-- Additional entities -->
                <div class="entities">
                    <h3>${localize("additional entities", this._lang)}</h3>

                    ${this.optionalEntities?.map((entity, index) => html`
                        <div class="entity-row">
                            <ha-form
                                .hass=${this.hass}
                                .data=${entity}
                                .schema=${optSchema}
                                .computeLabel=${(schema: SchemaItem) => schema.label || schema.name}
                                @value-changed=${(ev: CustomEvent) => this._updateOptionalEntity(index, ev.detail.value)}
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
                             .includeEntities=${[
                                  ...(deviceEntities.sensor || []),
                                  ...(deviceEntities.binary_sensor || [])
                              ]}
                            @value-changed="${this._addOptionalEntity}"
                        ></ha-entity-picker>
                    </div>
                </div>
                `}
            </div>
          `;
       }
      }

      export { CustomCardEditor };
