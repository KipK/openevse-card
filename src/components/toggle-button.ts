import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';
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

    @state() private _isHovering: boolean = false;

    private _handleClick() {
        const nextState = this.currentState === this.state1Value ? this.state2Value : this.state1Value;
        if (this.clickHandler) {
            this.clickHandler(nextState);
        }
    }

    private _handleMouseOver() {
        this._isHovering = true;
    }

    private _handleMouseOut() {
        this._isHovering = false;
    }

    static override styles = css`
        :host {
            display: inline-flex; 
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            border: 1px solid var(--divider-color);
            border-radius: 10px;
            padding: 8px; 
            box-sizing: border-box;
            background-color: transparent; 
        }
        ha-icon {
            transition: color 0.2s ease-in-out;
            --mdc-icon-size: 25px; 
        }
    `;

    override render() {
        const isState1 = this.currentState === this.state1Value;
        const showState1Icon = this._isHovering ? !isState1 : isState1;

        const icon = 	 ? this.iconState1 : this.iconState2;
        const color = showState1Icon ? this.colorState1 : this.colorState2;
        const title = isState1 ? this.titleState1 : this.titleState2; // Title always reflects current state

        // Apply hover effect styles directly
		const bgColor = isState1 ? this.colorState1 : this.colorState2; // Color of the *next* state on hover
		const hoverColor = isState1 ? this.colorState2 : this.colorState1; // Color of the *next* state on hover
		const hostStyles = `
			:host {
				background-color: ${bgColor}; 
				border-color: var(--divider-color);
			}
            :host(:hover) {
                background-color: var(--primary-text-color);
            }
            :host(:hover) ha-icon {
				color: ${hoverColor};
            }
			:host ha-icon {
				color: ${color};
            }
        `;

        return html`
            <style>
                ${hostStyles}
            </style>
			<div 
				class="toggle-button"
				style="width:${this.width}px; 
				height: ${this.width}px;"
				@mouseover=${this._handleMouseOver}
				@mouseout=${this._handleMouseOut}
				@click=${this._handleClick}
			>
				<ha-icon
					.icon=${icon}
					.title=${title}
				></ha-icon>
			</div>
        `;
    }
}

// Define the custom element
customElements.define('toggle-button', ToggleButton);