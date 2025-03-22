/**
 * Utility function to asynchronously load Home Assistant form components
 * if they are not already registered in the custom elements registry.
 *
 * @returns Promise that resolves when all required components are loaded
 */
export const loadHaForm = async () => {
    // Check if all required custom elements are already defined
    if (customElements.get('ha-form') &&
        customElements.get('ha-selector') &&
        customElements.get('ha-textfield') &&
        customElements.get('ha-icon-picker') &&
        customElements.get('ha-icon-button') &&
        customElements.get('ha-entity-picker'))
        return;
    // Wait for the partial-panel-resolver to be defined
    await customElements.whenDefined('partial-panel-resolver');
    // Create and configure the panel resolver with proper typing
    const ppr = document.createElement('partial-panel-resolver');
    ppr.hass = {
        panels: [
            {
                url_path: 'tmp',
                component_name: 'config',
            },
        ],
    };
    ppr._updateRoutes();
    // Load the temporary route
    await ppr.routerOptions.routes.tmp.load();
    // Wait for the config panel to be defined
    await customElements.whenDefined('ha-panel-config');
    // Create the config panel and load automation components with proper typing
    const cpr = document.createElement('ha-panel-config');
    await cpr.routerOptions.routes.automation.load();
};
//# sourceMappingURL=load-ha-form.js.map