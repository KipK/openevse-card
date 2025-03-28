import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property, state, eventOptions } from 'lit/decorators.js';

@customElement('evse-slider')
export class EVSESlider extends LitElement {
    @property({ type: Number }) min = 0;
    @property({ type: Number }) max = 32;
    @property({ type: Number }) step = 1;
    @property({ type: Number }) value = 0;
    @property({ type: String }) unit = 'A';
    @property({ type: Boolean }) disabled = false;
    @property({ type: String }) label = 'Charge Rate';

    @state() private _sliderValue = 0;
    @state() private _dragging = false;

    // Event listeners
    private _boundHandleSliderMove: (e: MouseEvent | TouchEvent) => void;
    private _boundHandleSliderEnd: (e: MouseEvent | TouchEvent) => void;

    constructor() {
        super();
        this._boundHandleSliderMove = this._handleSliderMove.bind(this);
        this._boundHandleSliderEnd = this._handleSliderEnd.bind(this);
    }

    override updated(changedProps: PropertyValues) {
        if (changedProps.has('value') && !this._dragging) {
            this._sliderValue = this.value;
        }
    }

    override connectedCallback() {
        super.connectedCallback();
        this._sliderValue = this.value;
    }

    override disconnectedCallback() {
        super.disconnectedCallback();
        this._removeEventListeners();
    }

    private get _percentage() {
        const range = this.max - this.min;
        if (range === 0) {
            return 0; // Avoid division by zero, return 0% or 100% based on value vs min/max
        }
        return ((this._sliderValue - this.min) / range) * 100;
    }

    private _formatValue(val: number): string {
        return this.step < 1 ? val.toFixed(1) : val.toFixed(0);
    }

    @eventOptions({ passive: true })
    private _handleSliderStart(e: MouseEvent | TouchEvent) {
        if (this.disabled) return;

        this._dragging = true;
        this._updateSliderValue(e);

        window.addEventListener('mousemove', this._boundHandleSliderMove);
        window.addEventListener('touchmove', this._boundHandleSliderMove);
        window.addEventListener('mouseup', this._boundHandleSliderEnd);
        window.addEventListener('touchend', this._boundHandleSliderEnd);
    }

    private _handleSliderMove(e: MouseEvent | TouchEvent) {
        if (this._dragging) {
            this._updateSliderValue(e);
        }
    }

    private _handleSliderEnd() {
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

    private _removeEventListeners() {
        window.removeEventListener('mousemove', this._boundHandleSliderMove);
        window.removeEventListener('touchmove', this._boundHandleSliderMove);
        window.removeEventListener('mouseup', this._boundHandleSliderEnd);
        window.removeEventListener('touchend', this._boundHandleSliderEnd);
    }

    private _updateSliderValue(e: MouseEvent | TouchEvent) {
        const track = this.shadowRoot?.querySelector('.slider-wrapper');
        if (!track) return;

        const trackRect = track.getBoundingClientRect();

        // Get cursor/touch position
        let x: number;
        if ('touches' in e) {
            x = e.touches[0].clientX;
        } else {
            x = (e as MouseEvent).clientX;
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
      background: color-mix(in srgb, var(--primary-color) 20%, transparent);
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

    override render() {
        return html`
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
}
