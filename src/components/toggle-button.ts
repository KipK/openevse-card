import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { HomeAssistant } from '../types'; // Assuming types are needed, adjust if not

export class ToggleButton extends LitElement {
    @property({ attribute: false }) hass?: HomeAssistant;
    @property({ type: String }) label: string  = 'Label';
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
    @property({ type: Number }) heigth: number = 20;
    
    override connectedCallback() {
        super.connectedCallback();
        this.addEventListener('click', this._handleClick);
    }

    override disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('click', this._handleClick);
    }

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
            border-radius: 4px;
            box-sizing: border-box;
            padding: 6px;
            padding-bottom: 4px;
            font-weight: var(--ha-card-header-font-weight, 400);
            line-height: 1;
        }
        .label {
            margin-left: 5px;
            color: var(--primary-text-color);
        }

        .hover-icon, .hover-label {
            display: none;
        }
        .current-icon, .current-label {
            display: inline;
        }

        @media (hover: hover) {
            :host(:hover) {
                background-color: transparent !important;
            }
            :host(:hover) .hover-icon, :host(:hover) .hover-label {
                display: inline;
                color: var(--hover-color) !important;
            }
            :host(:hover) .current-icon, :host(:hover) .current-label {
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
        const iconSize = this.heigth * 0.7;

        const hostStyles = `
            :host {
                --toggle-icon: "${icon}";
                --toggle-color: ${color};
                --hover-icon: "${hoverIcon}";
                --hover-color: ${hoverColor};
                background-color: ${color};
                border-color: var(--divider-color);
                height:${this.heigth}px;
                font-size: var(${this.heigth*0,7}px, 20px);
            }
            :host ha-icon {
                color: var(--primary-text-color);
                --mdc-icon-size: ${iconSize}px;
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
            <span class='label current-label'>${this.currentState}</span>
            <span class='label hover-label'>${this.currentState ==  this.state1Value ? this.state2Value:this.state1Value}</span>
        `;
    }
}

// Define the custom element
customElements.define('toggle-button', ToggleButton);
