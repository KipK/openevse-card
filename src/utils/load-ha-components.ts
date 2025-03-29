/**
 * Type definitions for Home Assistant custom elements
 */
interface PartialPanelResolver extends HTMLElement {
    hass: {
        panels: Array<{
            url_path: string;
            component_name: string;
        }>;
    };
    _updateRoutes(): void;
    routerOptions: {
        routes: Record<string, {
            load(): Promise<unknown>;
        }>;
    };
}

interface HaPanelConfig extends HTMLElement {
    routerOptions: {
        routes: {
            automation: {
                load(): Promise<unknown>;
            };
            [key: string]: {
                load(): Promise<unknown>;
            };
        };
    };
}

/**
 * Utility function to asynchronously load Home Assistant form components
 * if they are not already registered in the custom elements registry.
 * 
 * @returns Promise that resolves when all required components are loaded
 */

// Define the list of required components
const REQUIRED_HA_COMPONENTS = [
    'ha-form',
    'ha-icon',
    'ha-icon-button',
    'ha-selector',
    'ha-textfield',
    'ha-icon-picker',
    'ha-icon-button',
    'ha-entity-picker'
];


export const loadHaComponents = async (): Promise<void> => {
 try {
     // Check if all required custom elements are already defined using the array
     if (REQUIRED_HA_COMPONENTS.every(component => customElements.get(component))) {
         return;
     }

     // Wait for the partial-panel-resolver to be defined with timeout
        await Promise.race([
            customElements.whenDefined('partial-panel-resolver'),
            new Promise((_, reject) =>
                setTimeout(() => reject(new Error('Timeout waiting for partial-panel-resolver')), 10000)
            )
        ]);

        // Create and configure the panel resolver with proper typing
        const ppr = document.createElement('partial-panel-resolver') as PartialPanelResolver;

        // Check if the element was created successfully
        if (!ppr) {
            throw new Error('Failed to create partial-panel-resolver element');
        }

        ppr.hass = {
            panels: [
                {
                    url_path: 'tmp',
                    component_name: 'config',
                },
            ],
        };

        // Check if _updateRoutes method exists
        if (typeof ppr._updateRoutes !== 'function') {
            throw new Error('partial-panel-resolver does not have _updateRoutes method');
        }

        ppr._updateRoutes();

        // Check if routes were created
        if (!ppr.routerOptions?.routes?.tmp?.load) {
            throw new Error('Failed to create tmp route in partial-panel-resolver');
        }

        // Load the temporary route with timeout
        await Promise.race([
            ppr.routerOptions.routes.tmp.load(),
            new Promise((_, reject) =>
                setTimeout(() => reject(new Error('Timeout loading tmp route')), 10000)
            )
        ]);

        // Wait for the config panel to be defined with timeout
        await Promise.race([
            customElements.whenDefined('ha-panel-config'),
            new Promise((_, reject) =>
                setTimeout(() => reject(new Error('Timeout waiting for ha-panel-config')), 10000)
            )
        ]);

        // Create the config panel and load automation components with proper typing
        const cpr = document.createElement('ha-panel-config') as HaPanelConfig;

        // Check if the element was created successfully
        if (!cpr) {
            throw new Error('Failed to create ha-panel-config element');
        }

        // Check if automation route exists
        if (!cpr.routerOptions?.routes?.automation?.load) {
            throw new Error('ha-panel-config does not have automation route');
        }

        // Load automation components with timeout
        await Promise.race([
            cpr.routerOptions.routes.automation.load(),
            new Promise((_, reject) =>
                setTimeout(() => reject(new Error('Timeout loading automation components')), 10000)
            )
        ]);
      
        // Final verification that components were loaded using the array
        const missingComponents = REQUIRED_HA_COMPONENTS.filter(
            component => !customElements.get(component)
        );

        if (missingComponents.length > 0) {
            throw new Error(`Failed to load components: ${missingComponents.join(', ')}`);
        }

    } catch (error) {
        // Log the error but don't throw to prevent breaking the card
        console.error('Error loading Home Assistant form components:', error);

        // Attempt to use a fallback approach if available
        try {
            // Try to load components directly from Home Assistant frontend if available
            if (window.customElements && window.customElements.get('home-assistant')) {
                console.log('Attempting fallback loading method for HA components');
                // This is a fallback approach that might work in some environments
                const event = new CustomEvent('ha-request-load-components', {
                    detail: {
                        components: REQUIRED_HA_COMPONENTS // Use the constant array
                    },
                    bubbles: true,
                    composed: true
                });
                document.dispatchEvent(event);
            }
        } catch (fallbackError) {
            console.error('Fallback loading method failed:', fallbackError);
        }
    }
};