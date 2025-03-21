import { LitElement, html, css } from 'lit';
import { loadHaForm } from './load-ha-form/load-ha-form';
import { mainSchema, optionalEntitySchema } from './ha-form-schema';

// Editor for the card configuration
class CustomCardEditor extends LitElement {
    static get properties() {
        return {
            hass: { type: Object },
            config: { type: Object },
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
        `;
    }

    constructor() {
        super();
        this.config = {};
        this.optionalEntities = [];
    }

    async firstUpdated() {
        try {
            await loadHaForm();
        } catch (error) {
            console.error('Error loading ha-form:', error);
        }
    }

    setConfig(config) {
        this.config = config;
        this.optionalEntities = config.optional_entities || [];
    }

    // Gestion de la configuration principale
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
    _addOptionalEntity() {
        this.optionalEntities = [
            ...this.optionalEntities,
            { id: "", name: "", icon: "" }
        ];

        this._fireConfigChanged({
            ...this.config,
            optional_entities: this.optionalEntities
        });
    }

    _removeEntity(index) {
        this.optionalEntities = this.optionalEntities.filter((_, i) => i !== index);

        this._fireConfigChanged({
            ...this.config,
            optional_entities: this.optionalEntities
        });
    }

    _updateOptionalEntity(index, changedValues) {
        this.optionalEntities = this.optionalEntities.map((entity, i) =>
            i === index ? { ...entity, ...changedValues } : entity
        );

        this._fireConfigChanged({
            ...this.config,
            optional_entities: this.optionalEntities
        });
    }

    render() {
        if (!this.hass) {
            return html``;
        }

        const schema = mainSchema();
        const optSchema = optionalEntitySchema();

        return html`
            <div class="form-container">
                <!-- Configuration principale -->
                <ha-form
                    .hass=${this.hass}
                    .data=${this.config}
                    .schema=${schema}
                    .computeLabel=${(schema) => schema.label || schema.name}
                    @value-changed=${(ev) => this._dispatchConfigChanged(ev.detail.value)}
                ></ha-form>
                
                <!-- Entités additionnelles -->
                <div class="entities">
                    <h3>Additional entities</h3>
                    
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
                        <ha-button @click=${this._addOptionalEntity}>
                            Add Entity
                        </ha-button>
                    </div>
                </div>
            </div>
        `;
    }
}

export { CustomCardEditor };