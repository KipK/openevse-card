import {LitElement, html} from 'lit';
import {property, customElement} from 'lit/decorators.js';
import {CardConfig, EntityState} from '../types';
import {cardStyles} from '../styles';

@customElement('override-controls')
export class OverrideControls extends LitElement {
    @property({attribute: false}) config?: CardConfig;
    @property({attribute: false}) overrideEntity?: EntityState | null;
    @property({attribute: false}) chargingStatusEntity?: EntityState | null;
    @property({attribute: false}) selectOverrideStateHandler?: (
        entityId: string,
        option: string | number
    ) => void;

    constructor() {
        super();
        this._handleActiveClick = this._handleActiveClick.bind(this);
        this._handleAutoClick = this._handleAutoClick.bind(this);
        this._handleDisabledClick = this._handleDisabledClick.bind(this);
    }

    static override get styles() {
        return cardStyles;
    }

    // Specific handler for 'active' button
    private _handleActiveClick() {
        const entityId = this.config?.override_entity;
        if (
            this.selectOverrideStateHandler &&
            typeof entityId === 'string' &&
            entityId
        ) {
            this.selectOverrideStateHandler(entityId, 'active');
        }
    }

    // Specific handler for 'auto' button
    private _handleAutoClick() {
        const entityId = this.config?.override_entity;
        if (
            this.selectOverrideStateHandler &&
            typeof entityId === 'string' &&
            entityId
        ) {
            this.selectOverrideStateHandler(entityId, 'auto');
        }
    }

    // Specific handler for 'disabled' button
    private _handleDisabledClick() {
        const entityId = this.config?.override_entity;
        if (
            this.selectOverrideStateHandler &&
            typeof entityId === 'string' &&
            entityId
        ) {
            this.selectOverrideStateHandler(entityId, 'disabled');
        }
    }

    override render() {
        if (!this.config || !this.overrideEntity) {
            return html``;
        }

        const overrideState = this.overrideEntity?.state;
        const chargingState = this.chargingStatusEntity?.state;

        return html`
            <div class="override-controls">
                <div class="override-row">
                    <div
                        class="override-button ${overrideState === 'active'
                            ? 'active'
                            : ''}"
                        data-option="active"
                        @click=${this._handleActiveClick}
                    >
                        <ha-icon
                            icon="mdi:lightning-bolt"
                            class="${overrideState === 'active' &&
                            chargingState === 'charging'
                                ? 'charging'
                                : ''}"
                        ></ha-icon>
                    </div>
                    <div
                        class="override-button ${overrideState === 'auto'
                            ? 'active'
                            : ''}"
                        data-option="auto"
                        @click=${this._handleAutoClick}
                    >
                        <ha-icon
                            icon="mdi:robot"
                            class="${overrideState === 'auto' &&
                            chargingState === 'charging'
                                ? 'charging'
                                : ''}"
                        ></ha-icon>
                    </div>
                    <div
                        class="override-button ${overrideState === 'disabled'
                            ? 'active'
                            : ''}"
                        data-option="disabled"
                        @click=${this._handleDisabledClick}
                    >
                        <ha-icon icon="mdi:cancel"></ha-icon>
                    </div>
                </div>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'override-controls': OverrideControls;
    }
}
