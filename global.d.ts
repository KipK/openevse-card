import { HomeAssistant } from 'custom-card-helpers';
import { LitElement } from 'lit';
// custom-card-helpers might be useful for config/editor types, but not directly for element types here.

// Define interfaces for standard HA elements used in this project
// These provide basic structure; more properties might be needed depending on usage.
interface HaCard extends HTMLElement {
    header?: string;
}

interface HaIcon extends LitElement { // Assuming LitElement base for modern HA elements
    icon?: string;
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
    computeHelper?: (schema: any) => string;
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
        'ha-card': HaCard;
        'ha-icon': HaIcon;
        'evse-slider': EvseSlider;
        'status-icons': StatusIcons;
        'status-heading': StatusHeading;
        'info-grid': InfoGrid;
        'vehicle-info': VehicleInfo;
        'override-controls': OverrideControls;
        'limit-component': LimitComponent;
        'optional-entities': OptionalEntities;
        'progress-bar': ProgressBar;
        'ha-form': HaForm;
        'ha-icon-button': HaIconButton;
        'ha-entity-picker': HaEntityPicker;
    }
}

// Ensure this file is treated as a module and allows augmenting the global scope.
export {};