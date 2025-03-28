import { LitElement, html, css } from 'lit-element';
import { Limit } from '../types';
import { localize } from '../utils/translations';
import './evse-slider';

class LimitComponent extends LitElement {
  static override get properties() {
    return {
      limit: { type: Object, attribute: false },
      setLimit: { type: Object, attribute: false },
      delLimit: { type: Object, attribute: false },
      feat_battery: { type: Boolean},
      feat_soc: { type: Boolean },
      energy_max_value: { type: Number },
      range_max_value: { type: Number},
      range_unit: { type: String },
      _lang: { type: String }
    };
  }

  limit?: Limit | null;
  setLimit?: (type: string, value: number) => void;
  delLimit?: () => void;
  feat_soc: boolean = false;
  feat_range: boolean = false;
  energy_max_value: number = 100;
  range_max_value: number = 600;
  range_unit: string = "km";
  _lang?: string = "en";
  // _translations: TranslationDict = translations; // Removed _translations property
  _showLimitForm: boolean = false;
  _selectedLimitType: string = 'time';
  _hours: number = 0;
  _minutes: number = 0;
  _value: number = 0;
 
  constructor() {
    super();
    // Initializations removed as they are handled by property declarations
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
        height: 36px;
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
        margin-bottom: 26px;
        text-align: center;
      }
      .form-row {
        display: flex;
        flex-direction: column;
        margin-bottom: 25px;  

      }
      .form-row label {
        flex: 1;
        text-align: center;
        margin-bottom: 8px;
        font-size: 14px;
      }
      .form-row .select {
        display: flex;
        justify-content: center;
        text-align: center;
      }
      .form-row select {
        width: 50%;
        display: inline-block;
        text-align: center; 
        font-size: 16px;
        font-weight: 500;
        padding: 8px;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        background-color: var(--primary-background-color);
      }
      option {
        font-size: 16px;
        font-weight: 500;
      }
      .time-inputs {
        display: flex;
        flex-direction: row;
        align-self: center;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 8px;
        width: 60%;
      }
      .time-input {
        flex: 1;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      .time-input input {
        width: 70%;
        padding: 8px;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        background-color: var(--primary-background-color);
        color: var(--primary-text-color);
        text-align: center; 
      }
      .time-input label {
        display: block;
        margin-top: 4px;
        text-align: center;
        font-size: 16px;
        font-weight: 500
      }
      .slider-container {
        padding: 8px 0;
      }
      .slider-value {
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 0px;
       }
       /* Removed .limit-slider and related thumb styles */
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
      .btn-primary:hover {
         background-color: var(--dark-primary-color);
      }
      .btn-secondary {
        background-color: var(--secondary-background-color);
        color: var(--primary-text-color);
      }
      .btn-secondary:hover {
        background-color: var(--dark-secondary-background-color);
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
        border-radius: 8px;
        padding-left: 8px;
        padding-right: 4px;
        font-size: 14px;
        max-width: fit-content;
        margin: 0 auto;
        height: 36px;
      }
      .limit-badge ha-icon {
        flex: 1;
        align-items: center;
        justify-content: center;
        margin-right: 8px;
        --mdc-icon-size: 20px;
      }
      .limit-badge .close-icon {
        flex: 1;
        align-items: center;
        margin-left: 8px;
        margin-right: 4px;
        cursor: pointer;
        --mdc-icon-size: 20px;
      }
      .close-icon:hover {
        background-color: var(--dark-primary-color);
      }
      
      .limit-value {
        font-weight: 500;
        margin-left: 8px;
        white-space: nowrap;
        font-size: 1.1rem;
      }
    `;
  }

  _toggleLimitForm(): void {
    this._showLimitForm = !this._showLimitForm;
    this._selectedLimitType = 'time';
    this._hours = 0;
    this._minutes = 0;
    this._value = 0;
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

  _handleValueChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = parseInt(target.value) || 0;
    
    // For energy, convert kWh to Wh
    if (this._selectedLimitType === 'energy') {
      this._value = value * 1000;
    } else {
      this._value = value;
    }
    
    this.requestUpdate();
   }
  
   // Handler for evse-slider's value-changed event
   _handleSliderChange(e: CustomEvent): void {
    const value = e.detail.value;
    if (this._selectedLimitType === 'energy') {
      // Convert kWh from slider back to Wh for internal state
      this._value = Math.round(value * 1000);
    } else {
      this._value = value;
    }
    this.requestUpdate();
   }
  
   // Removed custom slider handlers (_sliderMouseDown, _updateSliderValue)
  
   // Format value based on limit type
  _formatValue(value: number, type: string): string {
    if (type === 'energy') {
      // Convert Wh to kWh for display (always whole numbers)
      const kwh = Math.round(value / 1000);
      return `${kwh} kWh`;
    } else if (type === 'soc') {
      return `${value}%`;
    } else if (type === 'range') {
      return `${value} ${this.range_unit}`;
    }
    return String(value);
  }

  _addLimit(): void {
    if (this._selectedLimitType === 'time') {
      const totalMinutes = (this._hours * 60) + this._minutes;
      if (totalMinutes > 0 && this.setLimit) {
        this.setLimit('time', totalMinutes);
      }
    } else if (['energy', 'soc', 'range'].includes(this._selectedLimitType)) {
      if (this._value > 0 && this.setLimit) {
        this.setLimit(this._selectedLimitType, this._value);
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
    } else if (['energy', 'soc', 'range'].includes(this._selectedLimitType)) {
      return this._value === 0;
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
  
   // Removed the _t method
  
   override render() {
    if (this.limit && this.limit.type) {
      // Display existing limit as a badge
      return html`
        <div class="limit-container">
          <div class="limit-badge">
            <ha-icon icon="${this.limit.type === 'time' ? 'mdi:clock' : this.limit.type === 'range' ? 'mdi:map-marker-distance' : this.limit.type === 'soc' ? 'mdi:battery' : 'mdi:lightning-bolt'}"></ha-icon>
            <span class="limit-type">
              ${this.limit.type === 'time' ? localize('time', this._lang) + ': ' : 
                this.limit.type === 'energy' ? localize('energy', this._lang) + ': ' : 
                this.limit.type === 'range' ? localize('range', this._lang) + ': ' : 
                this.limit.type === 'soc' ? localize('battery', this._lang) + ': ' : ''} 
            </span>
            <span class="limit-value">
              ${this.limit.type === 'time'
                ? this._formatTimeValue(this.limit.value)
                : this._formatValue(this.limit.value, this.limit.type)}
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
      <div class="limit-container">
        <button class="new-limit-btn" @click=${this._toggleLimitForm}>
          <ha-icon icon="mdi:plus"></ha-icon>
          ${localize('new limit', this._lang)} 
        </button>
      </div>
        <div class="modal-overlay">
          <div class="limit-form">
          <div class="form-header">${localize('add charging limit', this._lang)}</div> 
  
          <div class="form-row">
            <div class="select">
              <select id="limit-type" @change=${this._handleTypeChange}>
                  <option value="time" ?selected=${this._selectedLimitType === 'time'}>${localize('time', this._lang)}</option> 
                  <option value="energy" ?selected=${this._selectedLimitType === 'energy'}>${localize('energy', this._lang)}</option> 
                  ${this.feat_soc ? html`
                    <option value="soc" ?selected=${this._selectedLimitType === 'soc'}>${localize('battery', this._lang)}</option> 
                    `: ''}
                  ${this.feat_range ? html`
                    <option value="range" ?selected=${this._selectedLimitType === 'range'}>${localize('range', this._lang)}</option> 
                    `: ''}
              </select>
            </div>
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
                <label>${localize('hours', this._lang)}</label> 
              </div>
              <div class="time-input">
                <input
                  type="number"
                  min="0"
                  max="59"
                  .value=${String(this._minutes)}
                  @input=${this._handleMinutesChange}
                >
                <label>${localize('minutes', this._lang)}</label> 
              </div>
            </div>
          </div>
          ` : ''}
          ${this._selectedLimitType !== 'time' ? html`
          <div class="form-row">
            <evse-slider
              .min=${0}
              .max=${this._selectedLimitType === 'range' ? this.range_max_value : this._selectedLimitType === 'energy' ? this.energy_max_value : 100}
              .step=${1}
              .value=${this._selectedLimitType === 'energy' ? Math.round(this._value / 1000) : this._value}
              .unit=${this._selectedLimitType === 'range' ? this.range_unit : this._selectedLimitType === 'energy' ? 'kWh' : '%'}
              .label=${''}
              @value-changed=${this._handleSliderChange}
            ></evse-slider>
          </div>
          `:''}
  
            <div class="form-actions">
              <button class="btn btn-secondary" @click=${this._toggleLimitForm}>${localize('cancel', this._lang)}</button> 
              <button
                class="btn btn-primary"
                ?disabled=${this._isAddButtonDisabled()}
                @click=${this._addLimit}
              >
                ${localize('add limit', this._lang)} 
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
          ${localize('new limit', this._lang)} 
        </button>
      </div>
    `;
   }
  }
  
  customElements.define('limit-component', LimitComponent);
