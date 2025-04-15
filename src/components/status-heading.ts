import {LitElement, html} from 'lit';
import {property, customElement, state} from 'lit/decorators.js';
import {EntityState} from '../types';
import {localize} from '../utils/translations';
import {cardStyles} from '../styles';

@customElement('status-heading')
export class StatusHeading extends LitElement {
    @property({attribute: false}) statusEntity?: EntityState | null;
    @property({attribute: false}) chargingStatusEntity?: EntityState | null;
    @property({ attribute: false }) language?: string; // Renamed from lang
    @state() private _isError: boolean = false;

    static override get styles() {
        return cardStyles;
    }

    override render() {
        const chargingState = this.chargingStatusEntity?.state;
        const statusState = this.statusEntity?.state;

        this._isError = chargingState === 'vent_required'
            || chargingState === 'diode check failed'
            || chargingState === 'gfci fault'
            || chargingState === 'no ground'
            || chargingState === 'stuck relay'
            || chargingState === 'gfci self-test failure'
            || chargingState === 'over temperature'
            ? true : false;

        const badgeClass =
            this._isError
            ? 'badge-error'
            : statusState === 'disabled'
            ? 'badge-disabled'
            : chargingState === 'charging'
            ? 'badge-charging'
            : 'badge-active';

        return html`
            <div class="status-badge ${badgeClass}">
                ${localize(chargingState || '', this.language)}
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'status-heading': StatusHeading;
    }
}
