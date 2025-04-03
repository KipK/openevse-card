import { LitElement, nothing } from 'lit';

// Define a basic HomeAssistant interface
// This can be expanded with more properties as needed (e.g., callService, localize, connection, etc.)
interface HomeAssistant {
  states: { [entity_id: string]: HassEntity };
  // Add other common properties/methods if known to be used
  // callService: (domain: string, service: string, serviceData?: object) => Promise<void>;
  // localize: (key: string, ...args: any[]) => string;
  // etc.
}

// Define a basic HassEntity interface (replace with a more specific one if available)
interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, any>;
  last_changed: string;
  last_updated: string;
  context: {
    id: string;
    parent_id?: string;
    user_id?: string;
  };
}


// custom-card-helpers might be useful for config/editor types, but not directly for element types here.

// Define interfaces for standard HA elements used in this project
// These provide basic structure; more properties might be needed depending on usage.
interface HaCard extends HTMLElement {
    header?: string;
}

interface HaIcon extends LitElement { // Assuming LitElement base for modern HA elements
    icon?: string;
    class?: string;
}

interface HaIconButton extends LitElement { // Assuming LitElement base
    icon?: string;
    path?: string; // For MDI icons
}

interface HaForm extends LitElement { // Assuming LitElement base
    hass?: HomeAssistant;
    data?: Record<string, any>;
    schema?: readonly any[]; // Use specific schema type if available/needed (e.g., HaFormSchema[])
    computeLabel?: (schema: any) => string;
    computeHelper?: (schema: any) => string | typeof nothing;
    error?: Record<string, string>;
    disabled?: boolean;
}

interface HaEntityPicker extends LitElement { // Assuming LitElement base
    hass?: HomeAssistant;
    value?: string;
    label?: string;
    disabled?: boolean;
    required?: boolean;
    // Add allowCustomEntity, domainFilter, etc. if used
}

interface HaDialog extends LitElement {
    open?: boolean;
    heading?: string;
    hideActions?: boolean;
}

interface HaSortable extends LitElement {
    handleSelector?: string;
}

interface HaSvgIcon extends LitElement {
    path?: string;
}

interface HaSelector extends LitElement {
    hass?: HomeAssistant;
    selector?: Record<string, any>;
    value?: any;
    label?: string;
    helper?: string;
    disabled?: boolean;
    required?: boolean;
}

interface HaIconPicker extends LitElement {
    value?: string;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
}

interface HaSelect extends LitElement {
    value?: string;
    fixedMenuPosition?: boolean;
    naturalMenuWidth?: boolean;
}

interface HaListItem extends LitElement {
    value?: string;
}

// Using type intersection for HaTextfield to avoid conflicts with LitElement properties
type HaTextfield = LitElement & {
    type?: string;
    inputmode?: string;
    value?: string;
    label?: string;
    name?: string;
    min?: string;
    maxlength?: string;
    suffix?: string;
    noSpinner?: boolean;
};

// Using type intersection to avoid conflicts with HTMLElement properties
type HaAlert = HTMLElement & {
    type?: 'info' | 'warning' | 'error' | 'success';
    title?: string;
    dismissable?: boolean;
};

type MwcButton = HTMLElement & {
    raised?: boolean;
    unelevated?: boolean;
    outlined?: boolean;
    dense?: boolean;
    disabled?: boolean;
    icon?: string;
    label?: string;
    trailingIcon?: boolean;
};

// Define types for the custom elements of *this* card project
// Using LitElement as a base. Ideally, each component would export its own class type.
interface EvseSlider extends LitElement { /* Add specific properties/methods if known */ }
interface StatusIcons extends LitElement { /* Add specific properties/methods if known */ }
interface StatusHeading extends LitElement { /* Add specific properties/methods if known */ }
interface InfoGrid extends LitElement { /* Add specific properties/methods if known */ }
interface VehicleInfo extends LitElement { /* Add specific properties/methods if known */ }
interface OverrideControls extends LitElement { /* Add specific properties/methods if known */ }
interface LimitComponent extends LitElement { /* Add specific properties/methods if known */ }
interface OptionalEntities extends LitElement { /* Add specific properties/methods if known */ }
interface ProgressBar extends LitElement { /* Add specific properties/methods if known */ }


declare global {
    interface HTMLElementTagNameMap {
        // ha components loaded
        'ha-card': HaCard;
        'ha-icon': HaIcon;
        'ha-form': HaForm;
        'ha-icon-button': HaIconButton;
        'ha-entity-picker': HaEntityPicker;
        'ha-dialog': HaDialog;
        'ha-sortable': HaSortable;
        'ha-svg-icon': HaSvgIcon;
        'ha-alert': HaAlert;
        'ha-selector': HaSelector;
        'ha-icon-picker': HaIconPicker;
        'ha-select': HaSelect;
        'ha-list-item': HaListItem;
        'ha-textfield': HaTextfield;
        'mwc-button': MwcButton;
        // custom components from this project
        'evse-slider': EvseSlider;
        'status-icons': StatusIcons;
        'status-heading': StatusHeading;
        'info-grid': InfoGrid;
        'vehicle-info': VehicleInfo;
        'override-controls': OverrideControls;
        'limit-component': LimitComponent;
        'optional-entities': OptionalEntities;
        'progress-bar': ProgressBar;
    }
}

// Ensure this file is treated as a module and allows augmenting the global scope.
export {};
