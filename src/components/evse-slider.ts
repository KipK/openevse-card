import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './custom-slider';

@customElement('evse-slider')
export class EVSESlider extends LitElement {
    @property({ type: Number }) min = 0;
    @property({ type: Number }) max = 32;
    @property({ type: Number }) step = 1;
    @property({ type: Number }) value = 0;
    @property({ type: String }) unit = 'A';
    @property({ type: Boolean }) disabled = false;
    @property({ type: String }) label = 'Charge Rate';

    private _formatValue(val: number): string {
        return this.step < 1 ? val.toFixed(1) : val.toFixed(0);
    }

    static override styles = css`
    :host {
      display: block;
      --evse-slider-color: var(--primary-color, #03a9f4);
      margin-bottom: 8px;
      width: 100%;
      margin-left: 8px;
      margin-right: 8px;
    }
    
    .slider-container {
      border-radius: 10px;
      padding: 8px;
      padding-bottom: 15px;
      padding-top: 15px;
      background-color: transparent;
      border: 1px solid var(--divider-color, #e0e0e0);
      max-width: 300px;
      margin: 0 auto;
    }
    
    .slider-label {
      display: flex;
      justify-content: center;
      color: var(--primary-text-color, #212121);
      font-weight: bold;
      text-transform: capitalize;
    }
    
    .slider-badge {
      display: flex;
      justify-content: center;
      margin-left: 8px;
      color: var(--evse-slider-color);
      font-size: 1.2rem;
      padding: 4px 8px;
      border-radius: 4px;
      font-weight: bold;
    }
  `;

    override render() {
        return html`
      <div class="slider-container">
        ${this.label ? html`<div class="slider-label">${this.label}</div>` : ''}
        <div class="slider-badge">
          ${this._formatValue(this.value)} ${this.unit}
        </div>
        <custom-slider
          .min=${this.min}
          .max=${this.max}
          .step=${this.step}
          .value=${this.value}
          .disabled=${this.disabled}
          height="15"
          color="var(--evse-slider-color)"
          @value-preview=${(e: CustomEvent) => this.value = e.detail.value}
          @value-changed=${(e: CustomEvent) => {
            this.value = e.detail.value;
            this.dispatchEvent(new CustomEvent('value-changed', {
                detail: { value: this.value },
                bubbles: true,
                composed: true
            }));
          }}
        ></custom-slider>
      </div>
    `;
    }
}
