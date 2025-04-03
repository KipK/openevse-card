import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property, state, eventOptions } from 'lit/decorators.js';

@customElement('custom-slider')
export class CustomSlider extends LitElement {
    @property({ type: Number }) min = 0;
    @property({ type: Number }) max = 32;
    @property({ type: Number }) step = 1;
    @property({ type: Number }) value = 0;
    @property({ type: Boolean }) disabled = false;
    @property({ type: Number }) height = 22;
    @property({ type: String }) color = 'var(--primary-color, #03a9f4)';
    @property({ type: Boolean, attribute: 'display-thumb' }) displayThumb = true;
    @property({ type: String }) unit = '';

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
            // If range is zero, the value is fixed. Place it visually at 5% (start of effective range)
            return 5;
        }
        // Calculate the normalized value (0 to 1) within the min/max range
        const normalizedValue = (this._sliderValue - this.min) / range;
        // Scale this normalized value to the visual range (5% to 100%)
        // The visual range spans 95% (100 - 5)
        return 5 + (normalizedValue * 95);
    }

    @eventOptions({ passive: true })
    private _handleSliderStart(e: MouseEvent | TouchEvent) {
        if (this.disabled) return;

        this._dragging = true;
        this.shadowRoot?.querySelector('.slider-wrapper')?.classList.add('dragging');
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
            this.shadowRoot?.querySelector('.slider-wrapper')?.classList.remove('dragging');
            this._removeEventListeners();

            this.dispatchEvent(new CustomEvent('value-changed', {
                detail: { value: this._sliderValue },
                bubbles: true,
                composed: true
            }));

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

        // Calculate percentage along track, considering the 5% offset for the thumb
        const effectiveTrackWidth = trackRect.width * 0.95; // Usable width is 95%
        const effectiveTrackStart = trackRect.left + trackRect.width * 0.05; // Starts after 5%
        let percentage = (x - effectiveTrackStart) / effectiveTrackWidth;
        percentage = Math.min(Math.max(percentage, 0), 1); // Clamp between 0 and 1 for the effective range

        // Calculate value with min/max/step constraints based on the effective percentage
        let value = this.min + percentage * (this.max - this.min);
        value = Math.round(value / this.step) * this.step;
        value = Math.min(Math.max(value, this.min), this.max);

        // Update state and emit preview event
        this._sliderValue = Number(value.toFixed(2));
        this.dispatchEvent(new CustomEvent('value-preview', {
            detail: { value: this._sliderValue },
            bubbles: true,
            composed: true
        }));
        this.requestUpdate();
    }

    static override styles = css`
    :host {
      display: block;
      width: 100%;
    }
    
    .slider-wrapper {
      position: relative;
      height: var(--slider-height, 22px);
      width: 100%;
      border-radius: 6px;
      display: flex;
      align-items: center;
      background: color-mix(in srgb, var(--slider-color) 20%, transparent);
      box-shadow: var(--control-button-background, none);
      touch-action: none;
      overflow: hidden;
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
      border-radius: 6px 0 0 6px;
      background: var(--slider-color);
      opacity: 1;
    }

    .slider-wrapper:hover .slider-track {
      background: color-mix(in srgb, var(--slider-color) 60%, transparent);
    }
    .dragging .slider-track {
      background: color-mix(in srgb, var(--slider-color) 60%, transparent);
    }
    

    .slider-badge {

      padding: 4px 8px;
      border-radius: 4px;

      margin-left: 8px;
      white-space: nowrap;
      align-self: center;
    }

    .slider-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;
    }
    
    .slider-thumb {
      position: absolute;
      height: 100%;
      width: 5%;
      background: var(--slider-color);
      left: calc(var(--slider-percentage) - 1px);
      opacity: 0;
    }

    .slider-wrapper:hover .slider-thumb,
    .slider-wrapper.dragging .slider-thumb {
      opacity: 1;
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

    private _formatValue(val: number): string {
        return this.step < 1 ? val.toFixed(1) : val.toFixed(0);
    }

    override render() {
        return html`
      <div class="slider-container">
        ${this.unit ? html`
          <div class="slider-badge" style="color: ${this.color}">
            ${this._formatValue(this._sliderValue)} ${this.unit}
          </div>
        ` : ''}
        <div class="slider-wrapper"
        @mousedown=${this._handleSliderStart}
        @touchstart=${this._handleSliderStart}
        style="
          --slider-height: ${this.height}px;
          --slider-color: ${this.color};
          --slider-percentage: ${this._percentage}%;
        "
        >
          <div
            class="slider-track clickable"
            style="width: ${Math.max(5, this._percentage)}%; border-radius: ${this._percentage === 100 ? '6px' : (this._percentage === 0 ? '0' : '6px 0 0 6px')}"
          ></div>
        ${this.displayThumb ? html`
          <div
            class="slider-thumb"
            style="left: calc(max(0%, ${this._percentage}% - 5%))"
          ></div>
        ` : ''}
          <div
            class="slider-knob"
            style="left: calc(clamp(0%, ${this._percentage}%, 100%) - 16px)"
          ></div>
        </div>
      </div>
    `;
    }
}

declare global {
  interface HTMLElementTagNameMap {
    "custom-slider": CustomSlider;
  }
}