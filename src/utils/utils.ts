import { HomeAssistant } from '../types';

export const MIN_OPENEVSE_INTEGRATION_VERSION = '2.1.47';

/**
 * Gets the installed version of an integration.
 * 
 * @param hass HomeAssistant instance.
 * @returns The integration version string if found, otherwise '0'.
 */
export const getIntegrationVersion = async (hass: HomeAssistant): Promise<string> => {
  try {
    const manifest = await hass.callWS<{ version: string }>({
      type: 'manifest/get',
      integration: 'openevse',
    });
    return manifest.version;
  } catch (err) {
    // Log the error for debugging, but return '0' as requested
    console.error('Error fetching OpenEVSE integration manifest:', err);
    // Common error code when integration is not found, though others are possible
    // if (err.code === 'not_found') {
    //   console.log('OpenEVSE integration not found.');
    // }
    return '0'; // Return '0' if integration not found or any other error occurs
  }
};

// Function to compare semantic versions (optional, but useful)
// Returns:
//   0 if v1 == v2
//   1 if v1 > v2
//  -1 if v1 < v2
export const compareVersion = (v1: string, v2: string): number => {
    const parts1 = v1.split('.').map(Number);
    const parts2 = v2.split('.').map(Number);

    for (let i = 0; i < Math.max(parts1.length, parts2.length); i++) {
        const p1 = parts1[i] || 0;
        const p2 = parts2[i] || 0;
        if (p1 > p2) return 1;
        if (p1 < p2) return -1;
    }
    return 0;
};