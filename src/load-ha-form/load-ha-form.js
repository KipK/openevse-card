export const loadHaForm = async () => {
    if (
        customElements.get('ha-selector') &&
        customElements.get('ha-textfield') &&
        customElements.get('ha-icon-picker') &&
        customElements.get('ha-entity-picker')
    )
        return;

    await customElements.whenDefined('partial-panel-resolver');
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
    await ppr.routerOptions.routes.tmp.load();

    await customElements.whenDefined('ha-panel-config');
    const cpr = document.createElement('ha-panel-config');
    await cpr.routerOptions.routes.automation.load();
};
