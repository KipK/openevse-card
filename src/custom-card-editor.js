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
            _lang: { type: String }
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

        // If device_id is already set, load its entities
        if (config.device_id && this.hass) {
            this._loadDeviceEntities(config.device_id);
        }
    }

    // Fonction pour charger les entités associées à un appareil OpenEVSE
    async _loadDeviceEntities(deviceId) {
        if (!deviceId || !this.hass) return;

        // Obtenir toutes les entités pour ce dispositif
        const deviceEntities = {};
        const entityRegistry = Object.values(this.hass.entities || {});

        // Filtrer les entités appartenant à ce dispositif
        const deviceEntitiesList = entityRegistry.filter(
            entity => entity.device_id === deviceId
        );

        // Tentative de correspondance des entités avec les champs requis
        const entityMappings = {
            override_entity: ["override_state", "select.openevse_override_state"],
            status_entity: ["station_status", "sensor.openevse_station_status"],
            power_entity: ["current_power_usage", "current_power_usage", "sensor.openevse_current_power_usage"],
            current_entity: ["charging_current", "current", "sensor.openevse_charging_current"],
            vehicle_connected_entity: ["vehicle_connected", "binary_sensor.openevse_vehicle_connected"],
            charging_status_entity: ["charging_status", "sensor.openevse_charging_status"],
            charge_rate_entity: ["charge_rate", "number.openevse_charge_rate"],
            session_energy_entity: ["usage_this_session", "sensor.openevse_usage_this_session"],
            time_elapsed_entity: ["time_elapsed", "seconds", "sensor.openevse_time_elapsed"]
        };

        // Pour chaque type d'entité nécessaire, trouver la meilleure correspondance
        for (const [configKey, possibleNames] of Object.entries(entityMappings)) {
            // Chercher une entité qui correspond à l'un des noms possibles
            const matchedEntity = deviceEntitiesList.find(entity => {
                const entityId = entity.entity_id.toLowerCase();
                return possibleNames.some(name =>
                    entityId.includes(name.toLowerCase()) ||
                    (entity.original_name && entity.original_name.toLowerCase().includes(name.toLowerCase()))
                );
            });

            if (matchedEntity) {
                deviceEntities[configKey] = matchedEntity.entity_id;
            }
        }

        this.openEVSEEntities = deviceEntities;
        this.deviceEntitiesLoaded = true;

        // Mettre à jour la configuration avec les entités trouvées
        const updatedConfig = { ...this.config, ...deviceEntities };
        this._fireConfigChanged(updatedConfig);

        this.requestUpdate();
    }

    // Gestion de la configuration principale
    _handleConfigChange(ev) {
        const updatedConfig = ev.detail.value;

        // Si le device_id a changé, charger les entités correspondantes
        if (updatedConfig.device_id !== this.config.device_id) {
            this._loadDeviceEntities(updatedConfig.device_id);
        }

        this._dispatchConfigChanged(updatedConfig);
    }

    _dispatchConfigChanged(updatedConfig) {
        const newConfig = {
            ...updatedConfig,
            optional_entities: this.optionalEntities,
        };

        this._fireConfigChanged(newConfig);
    }

    // Fonction unique pour déclencher l'événement de changement de config
    _fireConfigChanged(newConfig) {
        this.dispatchEvent(
            new CustomEvent("config-changed", {
                detail: { config: newConfig }
            })
        );
    }

    // Gestion des entités optionnelles
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
        this.optionalEntities = this.optionalEntities?.map((entity, i) =>
            i === index ? { ...entity, ...changedValues } : entity
        );

        this._fireConfigChanged({
            ...this.config,
            optional_entities: this.optionalEntities
        });
    }

    // Vérifier si toutes les entités requises ont été trouvées
    _getMissingEntities() {
        const requiredEntities = [
            "override_entity", "status_entity", "power_entity", "current_entity",
            "vehicle_connected_entity", "charging_status_entity", "charge_rate_entity",
            "session_energy_entity", "time_elapsed_entity"
        ];

        return requiredEntities.filter(
            entity => !this.config[entity] && !this.openEVSEEntities[entity]
        );
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

        const schema = mainSchema();
        const optSchema = optionalEntitySchema();
        const missingEntities = this._getMissingEntities();

        return html`
        <!-- Statut de la détection automatique -->
                ${this.config.device_id ? html`
                    <div class="entity-section">
                        <h3>${this._t("required_entities")}</h3>
                        ${this.deviceEntitiesLoaded ? html`
                            <div class="entity-status ${missingEntities.length > 0 ? 'warning' : 'success'}">
                                ${missingEntities.length === 0
                        ? this._t("entity_auto_success") + '!'
                        : this._t("entity_auto_fail") + ":" + missingEntities.join(', ')
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
                <!-- Configuration principale -->
                <ha-form
                    .hass=${this.hass}
                    .data=${this.config}
                    .schema=${schema}
                    .computeLabel=${(schema) => schema.label || schema.name}
                    .computeHelper=${(schema) => schema.helper_text}
                    @value-changed=${this._handleConfigChange}
                ></ha-form>
                
                
                <!-- Entités additionnelles -->
                <div class="entities">
                    <h3> ${this._t("additional entities")}</h3>
                    
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
                            @value-changed="${this._addOptionalEntity}"
                        ></ha-entity-picker>
                    </div>
                </div>
            </div>
        `;
    }
}

export { CustomCardEditor };