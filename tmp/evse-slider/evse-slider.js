var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property, state, eventOptions } from 'lit/decorators.js';
let EVSESlider = class EVSESlider extends LitElement {
    constructor() {
        super();
        this.min = 0;
        this.max = 32;
        this.step = 1;
        this.value = 0;
        this.unit = 'A';
        this.disabled = false;
        this.label = 'Charge Rate';
        this._sliderValue = 0;
        this._dragging = false;
        this._boundHandleSliderMove = this._handleSliderMove.bind(this);
        this._boundHandleSliderEnd = this._handleSliderEnd.bind(this);
    }
    updated(changedProps) {
        if (changedProps.has('value') && !this._dragging) {
            this._sliderValue = this.value;
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this._sliderValue = this.value;
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this._removeEventListeners();
    }
    get _percentage() {
        return ((this._sliderValue - this.min) / (this.max - this.min)) * 100;
    }
    _formatValue(val) {
        return this.step < 1 ? val.toFixed(1) : val.toFixed(0);
    }
    _handleSliderStart(e) {
        if (this.disabled)
            return;
        this._dragging = true;
        this._updateSliderValue(e);
        window.addEventListener('mousemove', this._boundHandleSliderMove);
        window.addEventListener('touchmove', this._boundHandleSliderMove);
        window.addEventListener('mouseup', this._boundHandleSliderEnd);
        window.addEventListener('touchend', this._boundHandleSliderEnd);
    }
    _handleSliderMove(e) {
        if (this._dragging) {
            this._updateSliderValue(e);
        }
    }
    _handleSliderEnd() {
        if (this._dragging) {
            this._removeEventListeners();
            // Notify about the value change
            this.dispatchEvent(new CustomEvent('value-changed', {
                detail: { value: this._sliderValue },
                bubbles: true,
                composed: true
            }));
            // Small delay for visual feedback
            setTimeout(() => {
                this._dragging = false;
            }, 100);
        }
    }
    _removeEventListeners() {
        window.removeEventListener('mousemove', this._boundHandleSliderMove);
        window.removeEventListener('touchmove', this._boundHandleSliderMove);
        window.removeEventListener('mouseup', this._boundHandleSliderEnd);
        window.removeEventListener('touchend', this._boundHandleSliderEnd);
    }
    _updateSliderValue(e) {
        const track = this.shadowRoot?.querySelector('.slider-wrapper');
        if (!track)
            return;
        const trackRect = track.getBoundingClientRect();
        // Get cursor/touch position
        let x;
        if ('touches' in e) {
            x = e.touches[0].clientX;
        }
        else {
            x = e.clientX;
        }
        // Calculate percentage along track
        let percentage = (x - trackRect.left) / trackRect.width;
        percentage = Math.min(Math.max(percentage, 0), 1);
        // Calculate value with min/max/step constraints
        let value = this.min + percentage * (this.max - this.min);
        value = Math.round(value / this.step) * this.step;
        value = Math.min(Math.max(value, this.min), this.max);
        // Update state
        this._sliderValue = Number(value.toFixed(2));
        this.requestUpdate();
    }
    render() {
        return html `
      <div class="slider-container">
        <div class="slider-label">${this.label}</div>
        <div class="slider-badge">
          ${this._formatValue(this._sliderValue)} ${this.unit}
        </div>
        <div class="slider-row">
          <div 
            class="slider-wrapper"
            @mousedown=${this._handleSliderStart}
            @touchstart=${this._handleSliderStart}
          >
            <div
              class="slider-track clickable"
              style="width: ${this._percentage}%"
            ></div>
            <div
              class="slider-knob"
              style="left: calc(${this._percentage}% - 16px)"
            ></div>
          </div>
        </div>
      </div>
    `;
    }
};
EVSESlider.styles = css `
    :host {
      display: block;
      --evse-slider-color: var(--primary-color, #03a9f4);
      margin-bottom: 20px;
    }
    
    .slider-container {
      border-radius: 10px;
      padding: 8px;
      padding-bottom: 15px;
      padding-top: 15px;
      background: var(--card-background-color, #fff);
      border: 1px solid var(--divider-color, #e0e0e0);
    }
    
    .slider-row {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 8px;
    }
    
    .slider-label {
      display: flex;
      justify-content: center;
      color: var(--primary-text-color, #212121);
      font-weight: bold;
      text-transform: capitalize;
    }
    
    .slider-wrapper {
      position: relative;
      height: 22px;
      width: 70%;
      border-radius: 6px;
      display: flex;
      align-items: center;
      background: var(--divider-color, #e0e0e0);
      box-shadow: var(--control-button-background, none);
      touch-action: none; /* Prevent scrolling on touch */
    }
    
    .slider-knob {
      position: absolute;
      height: 32px;
      width: 32px;
      border-radius: 50%;
      background: transparent;
      z-index: 1;
      cursor: pointer;
    }
    
    .slider-track {
      position: absolute;
      height: 100%;
      border-radius: 6px;
      background: var(--evse-slider-color);
      opacity: 1;
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
    
    .clickable {
      cursor: pointer;
      text-decoration: none;
    }
    
    :host([disabled]) .slider-wrapper {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    :host([disabled]) .slider-track, 
    :host([disabled]) .slider-knob {
      cursor: not-allowed;
    }
  `;
__decorate([
    property({ type: Number })
], EVSESlider.prototype, "min", void 0);
__decorate([
    property({ type: Number })
], EVSESlider.prototype, "max", void 0);
__decorate([
    property({ type: Number })
], EVSESlider.prototype, "step", void 0);
__decorate([
    property({ type: Number })
], EVSESlider.prototype, "value", void 0);
__decorate([
    property({ type: String })
], EVSESlider.prototype, "unit", void 0);
__decorate([
    property({ type: Boolean })
], EVSESlider.prototype, "disabled", void 0);
__decorate([
    property({ type: String })
], EVSESlider.prototype, "label", void 0);
__decorate([
    state()
], EVSESlider.prototype, "_sliderValue", void 0);
__decorate([
    state()
], EVSESlider.prototype, "_dragging", void 0);
__decorate([
    eventOptions({ passive: true })
], EVSESlider.prototype, "_handleSliderStart", null);
EVSESlider = __decorate([
    customElement('evse-slider')
], EVSESlider);
export { EVSESlider };
//# sourceMappingURL=evse-slider.js.map