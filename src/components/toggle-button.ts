import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { HomeAssistant } from '../types'; // Assuming types are needed, adjust if not

export class ToggleButton extends LitElement {
    @property({ attribute: false }) hass?: HomeAssistant;
    @property({ type: String }) state1Value: string | number | boolean = 'off';
    @property({ type: String }) state2Value: string | number | boolean = 'on';
    @property({ type: String }) currentState: string | number | boolean = this.state1Value;
    @property({ attribute: false }) clickHandler?: (nextState: string | number | boolean) => void; // Corrected decorator
    @property({ type: String }) iconState1: string = 'mdi:toggle-switch-off-outline';
    @property({ type: String }) colorState1: string = 'var(--primary-text-color)';
    @property({ type: String }) iconState2: string = 'mdi:toggle-switch';
    @property({ type: String }) colorState2: string = 'var(--primary-color)';
    @property({ type: String }) titleState1: string = 'State 1';
	@property({ type: String }) titleState2: string = 'State 2';
	@property({ type: Number }) width: number = 20;

    private _handleClick() {
        const nextState = this.currentState === this.state1Value ? this.state2Value : this.state1Value;
        if (this.clickHandler) {
            this.clickHandler(nextState);
        }
    }

 
    static override styles = css`
        :host {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            border: 1px solid var(--divider-color);
            border-radius: 8px;
            padding: 8px;
            box-sizing: border-box;
        }
        ha-icon {
            --mdc-icon-size: 25px;
        }

        .hover-icon {
            display: none;
        }
        .current-icon {
            display: inline;
        }

        @media (hover: hover) {
            :host(:hover) {
                background-color: transparent !important;
            }
            :host(:hover) .hover-icon {
                display: inline;
                color: var(--hover-color) !important;
            }
            :host(:hover) .current-icon {
                display: none;
            }
        }
    `;

    override render() {
        const isEco = this.currentState === 'eco';
        const icon = isEco ? this.iconState1 : this.iconState2;
        const color = isEco ? this.colorState1 : this.colorState2;
        const hoverIcon = isEco ? this.iconState2 : this.iconState1;
        const hoverColor = isEco ? this.colorState2 : this.colorState1;
        const title = isEco ? this.titleState1 : this.titleState2;
        const iconSize = this.width * 0.7;

        const hostStyles = `
            :host {
                --toggle-icon: "${icon}";
                --toggle-color: ${color};
                --hover-icon: "${hoverIcon}";
                --hover-color: ${hoverColor};
                background-color: ${color};
                border-color: var(--divider-color);
            }
            :host ha-icon {
                color: var(--primary-text-color);
            }
            ha-icon {
                --mdc-icon-size: ${iconSize};
            }
            @media (hover: hover) {
                :host(:hover) {
                    background-color: transparent !important;
                }
                :host(:hover) ha-icon {
                    color: var(--hover-color) !important;
                }
            }
        `;

        return html`
            <style>
                ${hostStyles}
            </style>
            <div
                class="toggle-button"
                style="width:${this.width}px; height:${this.width}px;"
                @click=${this._handleClick}
            >
                <ha-icon
                    class="current-icon"
                    .icon=${icon}
                    .title=${title}
                ></ha-icon>
                <ha-icon
                    class="hover-icon"
                    .icon=${hoverIcon}
                    .title=${title}
                ></ha-icon>
            </div>
        `;
    }
}

// Define the custom element
customElements.define('toggle-button', ToggleButton);
