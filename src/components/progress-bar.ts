import { LitElement, html, css } from 'lit-element';

class ProgressBar extends LitElement {
  static override get properties() {
    return {
      label: { type: String },
      value: { type: Number },
      unit: { type: String },
      max_value: { type: Number },
      icon: { type: String }
    };
  }

  value: number = 0;
  label: string = "";
  unit: string = "";
  max_value: number = 100;
  icon: string = "";
 
  constructor() {
  	super();
  	// Initializations removed as they are handled by property declarations
  }
 
  static override get styles() {
    return css`
      :host {
        display: block;
        width: 100%;
        margin-top: 12px;
        margin-bottom: 14px;
        display: flex;
        justify-content: center;
      }
      .container {
        width: 100%;
        max-width: 150px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
      }
      .label {
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 6px;

      }
      .icon {
        color: var(--state-icon-color);
      }
      .progress {
        position: relative;
        width: 100%;
        height: 20px;
        background-color: var(--evse-secondary-bg-color);
        border-radius: 6px;
        border: 1px solid var(--divider-color);
        overflow: hidden;
      }
      .progress-fill {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background-color: var(--primary-color, #03a9f4);
        transition: width 0.5s ease-in-out;
      }
      .value {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        z-index: 10;
      }
    `;
  }

  override render() {
    const percentage = (this.max_value > 0) ? (100 * this.value / this.max_value) : 0;
  
    return html`
    <div class="container">
    	<div class="label">
    		${this.icon?
    		html`<ha-icon class="icon" icon=${this.icon}> </ha-icon>`
    	: ''}
    		${this.label ? this.label:"" }
    	</div>
    	<div class="progress">
    		<div
    			class="progress-fill"
    			style="width: ${percentage}%"
    		></div>
    		<div class="value">
    			${this.value}${this.unit}
        </div>
      </div>
    </div>

    `;
  }
}

customElements.define('progress-bar', ProgressBar);
export { ProgressBar };
