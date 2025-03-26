import { LitElement, html, css } from 'lit-element';
import { Limit } from './types';

class LimitComponent extends LitElement {
  static override get properties() {
    return {
      limit: { type: Object, attribute: false },
      setLimit: { type: Object, attribute: false },
      delLimit: { type: Object, attribute: false },
      _showLimitForm: { type: Boolean },
      _selectedLimitType: { type: String },
      _hours: { type: Number },
      _minutes: { type: Number },
      _energyValue: { type: Number }
    };
  }

  limit?: Limit | null;
  setLimit?: (type: string, value: number) => void;
  delLimit?: () => void;
  _showLimitForm: boolean = false;
  _selectedLimitType: string = 'time';
  _hours: number = 0;
  _minutes: number = 0;
  _energyValue: number = 0;

  constructor() {
    super();
    this.limit = null;
    this._showLimitForm = false;
    this._selectedLimitType = 'time';
    this._hours = 0;
    this._minutes = 0;
    this._energyValue = 0;
  }

  static override get styles() {
    return css`
      :host {
        display: block;
        width: 100%;
      }
      .limit-container {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 10px 0;
      }
      .new-limit-btn {
        background-color: var(--primary-color);
        color: var(--text-primary-color);
        border: none;
        border-radius: 4px;
        padding: 8px 16px;
        font-size: 14px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s;
      }
      .new-limit-btn:hover {
        background-color: var(--dark-primary-color);
      }
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .limit-form {
        background-color: var(--card-background-color);
        border-radius: var(--evse-border-radius);
        box-shadow: var(--evse-shadow);
        padding: 16px;
        width: 90%;
        max-width: 350px;
        margin: 0 auto;
        z-index: 1000;
      }
      .form-header {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 16px;
        text-align: center;
      }
      .form-row {
        display: flex;
        flex-direction: column;
        margin-bottom: 16px;
      }
      .form-row label {
        margin-bottom: 8px;
        font-size: 14px;
      }
      .time-inputs {
        display: flex;
        gap: 8px;
      }
      .time-input {
        flex: 1;
      }
      .time-input input {
        width: 100%;
        padding: 8px;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        background-color: var(--primary-background-color);
        color: var(--primary-text-color);
      }
      .time-input label {
        display: block;
        font-size: 12px;
        margin-top: 4px;
        text-align: center;
      }
      select {
        padding: 8px;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        background-color: var(--primary-background-color);
        color: var(--primary-text-color);
      }
      .slider-container {
        padding: 8px 0;
      }
      .slider-value {
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 8px;
      }
      .energy-slider {
        width: 100%;
        -webkit-appearance: none;
        height: 8px;
        border-radius: 4px;
        background: var(--secondary-background-color);
        outline: none;
      }
      .energy-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--primary-color);
        cursor: pointer;
      }
      .energy-slider::-moz-range-thumb {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--primary-color);
        cursor: pointer;
      }
      .form-actions {
        display: flex;
        justify-content: space-between;
        margin-top: 16px;
      }
      .btn {
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
      }
      .btn-primary {
        background-color: var(--primary-color);
        color: var(--text-primary-color);
      }
      .btn-secondary {
        background-color: var(--secondary-background-color);
        color: var(--primary-text-color);
      }
      .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      .limit-badge {
        display: flex;
        align-items: center;
        background-color: var(--primary-color);
        color: var(--text-primary-color);
        border-radius: 16px;
        padding: 4px 12px;
        font-size: 14px;
        max-width: fit-content;
        margin: 0 auto;
      }
      .limit-badge ha-icon {
        margin-right: 8px;
      }
      .limit-badge .close-icon {
        margin-left: 8px;
        cursor: pointer;
      }
      .limit-value {
        font-weight: 500;
        margin-left: 8px;
      }
    `;
  }

  _toggleLimitForm(): void {
    this._showLimitForm = !this._showLimitForm;
    this._selectedLimitType = 'time';
    this._hours = 0;
    this._minutes = 0;
    this._energyValue = 0;
    this.requestUpdate();
  }

  _handleTypeChange(e: Event): void {
    const target = e.target as HTMLSelectElement;
    this._selectedLimitType = target.value;
    this.requestUpdate();
  }

  _handleHoursChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this._hours = parseInt(target.value) || 0;
    this.requestUpdate();
  }

  _handleMinutesChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this._minutes = parseInt(target.value) || 0;
    this.requestUpdate();
  }

  _handleEnergyChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this._energyValue = parseInt(target.value) || 0;
    this.requestUpdate();
  }

  // Enhanced slider functionality
  _sliderMouseDown(e: MouseEvent): void {
    // Get slider element
    const slider = e.currentTarget as HTMLInputElement;
    const sliderRect = slider.getBoundingClientRect();
    
    // Calculate value based on mouse position
    this._updateSliderValue(e.clientX, sliderRect);
    
    // Setup mouse move and mouse up handlers
    const handleMouseMove = (moveEvent: MouseEvent) => {
      this._updateSliderValue(moveEvent.clientX, sliderRect);
      moveEvent.preventDefault(); // Prevent text selection during drag
    };
    
    const handleMouseUp = () => {
      // Remove event listeners when mouse is released
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
    
    // Add event listeners for tracking mouse movement
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  }
  
  _updateSliderValue(clientX: number, sliderRect: DOMRect): void {
    // Calculate position relative to slider
    const sliderWidth = sliderRect.width;
    const offsetX = clientX - sliderRect.left;
    
    // Calculate percentage and value
    let percentage = Math.min(Math.max(offsetX / sliderWidth, 0), 1);
    this._energyValue = Math.round(percentage * 100);
    this.requestUpdate();
  }

  _addLimit(): void {
    if (this._selectedLimitType === 'time') {
      const totalMinutes = (this._hours * 60) + this._minutes;
      if (totalMinutes > 0 && this.setLimit) {
        this.setLimit('time', totalMinutes);
      }
    } else if (this._selectedLimitType === 'energy') {
      if (this._energyValue > 0 && this.setLimit) {
        this.setLimit('energy', this._energyValue);
      }
    }
    this._showLimitForm = false;
  }

  _removeLimit(): void {
    if (this.delLimit) {
      this.delLimit();
    }
  }

  _isAddButtonDisabled(): boolean {
    if (this._selectedLimitType === 'time') {
      return this._hours === 0 && this._minutes === 0;
    } else if (this._selectedLimitType === 'energy') {
      return this._energyValue === 0;
    }
    return true;
  }

  _formatTimeValue(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const secs = 0;
    
    return [hours, mins, secs]
      .map(unit => String(unit).padStart(2, '0'))
      .join(':');
  }

  override render() {
    if (this.limit && this.limit.type) {
      // Display existing limit as a badge
      return html`
        <div class="limit-container">
          <div class="limit-badge">
            <ha-icon icon="${this.limit.type === 'time' ? 'mdi:clock' : 'mdi:lightning-bolt'}"></ha-icon>
            <span>${this.limit.type === 'time' ? 'Time' : 'Energy'}</span>
            <span class="limit-value">
              ${this.limit.type === 'time' 
                ? this._formatTimeValue(this.limit.value)
                : `${this.limit.value} kWh`}
            </span>
            <ha-icon 
              class="close-icon" 
              icon="mdi:close" 
              @click=${this._removeLimit}
            ></ha-icon>
          </div>
        </div>
      `;
    }

    if (this._showLimitForm) {
      // Display limit form in modal overlay
      return html`
        <div class="modal-overlay" @click=${(e: Event) => {
          if ((e.target as HTMLElement).classList.contains('modal-overlay')) {
            this._toggleLimitForm();
          }
        }}>
          <div class="limit-form">
          <div class="form-header">Add Charging Limit</div>
          
          <div class="form-row">
            <label for="limit-type">Limit Type</label>
            <select id="limit-type" @change=${this._handleTypeChange}>
              <option value="time" ?selected=${this._selectedLimitType === 'time'}>Time</option>
              <option value="energy" ?selected=${this._selectedLimitType === 'energy'}>Energy</option>
            </select>
          </div>
          
          ${this._selectedLimitType === 'time' ? html`
            <div class="form-row">
              <div class="time-inputs">
                <div class="time-input">
                  <input 
                    type="number" 
                    min="0" 
                    max="23" 
                    .value=${String(this._hours)}
                    @input=${this._handleHoursChange}
                  >
                  <label>Hours</label>
                </div>
                <div class="time-input">
                  <input 
                    type="number" 
                    min="0" 
                    max="59" 
                    .value=${String(this._minutes)}
                    @input=${this._handleMinutesChange}
                  >
                  <label>Minutes</label>
                </div>
              </div>
            </div>
          ` : html`
            <div class="form-row">
              <div class="slider-value">${this._energyValue} kWh</div>
              <div class="slider-container">
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  step="1" 
                  class="energy-slider"
                  .value=${String(this._energyValue)}
                  @input=${this._handleEnergyChange}
                  @mousedown=${this._sliderMouseDown}
                >
              </div>
            </div>
          `}
          
          <div class="form-actions">
            <button class="btn btn-secondary" @click=${this._toggleLimitForm}>Cancel</button>
            <button 
              class="btn btn-primary" 
              ?disabled=${this._isAddButtonDisabled()}
              @click=${this._addLimit}
            >
              Add Limit
            </button>
          </div>
        </div>
        </div>
      `;
    }

    // Display "New Limit" button
    return html`
      <div class="limit-container">
        <button class="new-limit-btn" @click=${this._toggleLimitForm}>
          <ha-icon icon="mdi:plus"></ha-icon>
          New Limit
        </button>
      </div>
    `;
  }
}

customElements.define('limit-component', LimitComponent);
export { LimitComponent };
