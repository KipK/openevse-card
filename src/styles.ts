import {css} from 'lit';

const cardStyles = css`
    :host {
        --evse-active-color: var(--success-color);
        --evse-disabled-color: #116a88;
        --evse-auto-color: #32b3d4;
        --evse-slider-color: var(--accent-color, #2196f3);
        --evse-shadow: var(
            --ha-card-box-shadow,
            0 2px 2px 0 rgba(0, 0, 0, 0.14),
            0 1px 5px 0 rgba(0, 0, 0, 0.12),
            0 3px 1px - 2px rgba(0, 0, 0, 0.2)
        );
        --evse-border-radius: var(--ha-card-border-radius, 10px);
        --evse-selector-bg-color: var(--primary-background-color);
        --evse-secondary-bg-color: color-mix(
            in srgb,
            var(--divider-color) 60%,
            transparent
        );
    }
    .card-header {
        padding: 8px 16px 0;
        font-size: var(--ha-card-header-font-size, 24px);
        font-weight: var(--ha-card-header-font-weight, 400);
        line-height: 1.2;
    }
    .card-content {
        padding: 16px;
        transition: all 0.3s ease-out;
    }
    .evse-states {
        display: flex;
        justify-content: space-between;
        width: 100%;
        background: transparent;
        padding-bottom: 20px;
        border-radius: 16px;
    }
    .status-icons {
        border-radius: 8px;
        display: flex;
        flex-direction: row;
    }
    .status-icon {
        background: transparent;
        padding: 8px 4px;
        border-radius: 16px;
    }
    .wifi-icon {
        color: var(--info-color);
    }
    .status-heading {
        padding: 8px 8px 0;
        font-size: var(--ha-card-header-font-size, 18px);
        font-weight: var(--ha-card-header-font-weight, 400);
        line-height: 1;
    }
    .status-container {
        display: flex;
        align-items: center;
    }
    .status-badge {
        font-size: 14px;
        border-radius: 4px;
        background-color: white;
        padding: 6px;
        padding-bottom: 4px;
        text-transform: uppercase;
    }
    .badge-charging {
        background-color: orange;
        color: black;
    }
    .badge-connected {
        background-color: var(--info-color);
        color: white;
    }
    .badge-disabled {
        background-color: var(--evse-disabled-color);
        color: white;
    }
    .badge-active {
        background-color: var(--evse-active-color);
        color: white;
    }
    .error {
        background-color: var(--error-color);
        color: white;
    }
    .active {
        color: var(--evse-active-color);
    }
    .charging {
        color: orange;
    }
    .disabled {
        color: var(--evse-disabled-color);
    }
    .override-controls {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .override-row {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        width: 100%;
    }
    .override-container { /* Added container styles */
        position: relative; /* Needed for absolute positioning of children */
        display: flex;
        justify-content: center; /* Center the main override controls */
        align-items: center;
        margin-bottom: 16px;
        margin-top: 10px;
        width: 100%; /* Ensure container takes full width */
    }
    .override-button {
        flex: 1;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        padding: 8px;
        cursor: pointer;
        transition: all 0.2s;
        color: var(--primary-text-color);
        font-size: 2em;
        width: 50px;
        height: 25px;
        border: 1px solid var(--divider-color);
    }
    .override-button[data-option='active'] {
        border-radius: 10px 0 0 10px;
        color: var(--evse-active-color);
    }
    .override-button[data-option='auto'] {
        border-radius: 0;
        border-left: 0;
        border-right: 0;
        color: var(--evse-auto-color);
    }
    .override-button[data-option='disabled'] {
        border-radius: 0 10px 10px 0;
        color: var(--evse-disabled-color);
    }
    .override-button:hover[data-option='active'] {
        background: var(--evse-active-color);
        color: var(--text-primary-color);
    }
    .override-button:hover[data-option='auto'] {
        background: var(--evse-auto-color);
        color: var(--text-primary-color);
    }
    .override-button:hover[data-option='disabled'] {
        background: var(--evse-disabled-color);
        color: var(--text-primary-color);
    }
    .override-button.active[data-option='active'] {
        background: var(--evse-active-color);
        color: var(--text-primary-color);
    }
    .override-button.active[data-option='auto'] {
        background: var(--evse-auto-color);
        color: var(--text-primary-color);
    }
    .override-button.active[data-option='disabled'] {
        background: var(--evse-disabled-color);
        color: var(--text-primary-color);
    }
    .override-button.active.charging {
        color: yellow;
    }
    .divert-button {
        position: absolute; /* Position relative to the container */
        right: 10px; /* Align to the right edge of the container */
        top: 50%; /* Center vertically */
        transform: translateY(-50%); /* Adjust vertical centering */
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        padding: 8px;
        cursor: pointer;
        transition: all 0.2s;
        color: var(--primary-text-color);
        font-size: 0.8em;
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        width: 25px; 
        height: 25px; 
    }
    .divert-button[data-option="fast"] {
        background-color: transparent;
    }
    .divert-button[data-option="eco"] {
        background: var(--evse-active-color);
    }
    .divert-button:hover[data-option="fast"] {
        background: var(--evse-active-color);
    }
    .divert-button:hover[data-option="eco"] {
        background: transparent;
    }
    .divert-button ha-icon {
        --mdc-icon-size: 20px;
        color: var(--evse-active-color);
    }
    .divert-button[data-option="eco"] ha-icon {
        --mdc-icon-size: 22px;
        color: var(--primary-text-color);
    }
    .divert-button:hover[data-option="eco"] ha-icon {
        --mdc-icon-size: 22px;
        color: var(--evse-active-color);
    }
    .divert-button[data-option="fast"] ha-icon {
        --mdc-icon-size: 22px;
        color: var(--evse-active-color);
    }
    .divert-button:hover[data-option="fast"] ha-icon {
        --mdc-icon-size: 22px;
        color: var(--primary-text-color);
    }
        
        
    .entity-row {
        display: flex;
        justify-content: space-between;
        margin: 8px;
        color: var(--primary-text-color);
        background-color: var(--evse-secondary-bg-color);
        align-items: center;
        border-radius: 10px;
        align-items: center;
        padding: 8px 16px;
    }
    .entity-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .entity-label {
        display: flex;
        justify-content: right;
    }
    .entity-value {
        text-align: right;
        color: var(--primary-color);
        font-size: 1.1rem;
        font-weight: 500;
    }
    .entity-icon {
        padding: 6px;
        margin-right: 20px;
        color: var(--state-icon-color);
        background-color: color-mix(
            in srgb,
            var(--state-icon-color) 20%,
            transparent
        );
        border-radius: 50%;
        display: flex;
        justify-content: left;
    }
    .clickable {
        cursor: pointer;
        text-decoration: none;
    }
    .grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .grid-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
        background-color: var(--evse-secondary-bg-color);
        border-radius: 10px;
        padding: 4px;
        margin: 8px;
    }
    .grid-item-label {
        font-size: 1rem;
        color: var(--primary-text-color);
        margin-bottom: 3px;
        font-weight: bold;
        text-transform: capitalize;
    }
    .grid-item-value {
        font-size: 1.5rem;
        font-weight: 500;
        color: var(--primary-color);
    }
    .other-entities-container {
        width: 100%;
    }
    .container {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .vehicle {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: 12px;
        color: var(--primary-text-color);
    }
`;
export {cardStyles};
