import { LitElement, html } from 'lit-element'; // Removed css import
import { property } from 'lit/decorators.js';
import { EntityState } from '../types';
import { localize } from '../utils/translations';
import { cardStyles } from '../styles'; // Import cardStyles

class StatusHeading extends LitElement {
    @property({ attribute: false }) statusEntity?: EntityState | null;
    @property({ attribute: false }) chargingStatusEntity?: EntityState | null;
    @property({ attribute: false }) language?: string; // Renamed from lang

    static override get styles() {
        return cardStyles; // Use imported styles
    }

    override render() {
        const chargingState = this.chargingStatusEntity?.state;
        const statusState = this.statusEntity?.state;

        const badgeClass = chargingState === 'error'
            ? 'badge-error'
            : statusState === 'disabled'
                ? 'badge-disabled'
                : chargingState === 'charging'
                    ? 'badge-charging'
                    : 'badge-active';

        return html`
            <div class="status-heading">
                <div class="status-badge ${badgeClass}">
                    ${localize(chargingState || '', this.language)}
                </div>
            </div>
        `;
    }
}

customElements.define('status-heading', StatusHeading);

export { StatusHeading };