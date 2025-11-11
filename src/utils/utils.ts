import {HomeAssistant} from '../types';

export const MIN_OPENEVSE_INTEGRATION_VERSION = '2.1.47';

/**
 * Gets the installed version of an integration.
 *
 * @param hass HomeAssistant instance.
 * @returns The integration version string if found, otherwise '0'.
 */
export const getIntegrationVersion = async (
    hass: HomeAssistant
): Promise<string> => {
    try {
        const manifest = await hass.callWS<{version: string}>({
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
    const parse = (v: string): { core: number[]; beta: number | null } => {
        // Handle dev/unknown versions as very high to always pass
        if (v === '0.0.0-dev') {
            return { core: [Number.MAX_SAFE_INTEGER], beta: null };
        }

        const betaMatch = v.match(/^(\d+(?:\.\d+)*?)-b(\d+)$/i);
        if (betaMatch) {
            const core = betaMatch[1].split('.').map(Number);
            const beta = Number(betaMatch[2]);
            return { core, beta };
        }

        // Fallback: pure numeric semantic version
        const core = v.split('.').map(Number);
        return { core, beta: null };
    };

    const a = parse(v1);
    const b = parse(v2);

    const maxLen = Math.max(a.core.length, b.core.length);
    for (let i = 0; i < maxLen; i++) {
        const p1 = a.core[i] ?? 0;
        const p2 = b.core[i] ?? 0;
        if (p1 > p2) return 1;
        if (p1 < p2) return -1;
    }

    // Core versions equal, handle beta tags:
    // - Non-beta (stable) is considered newer than any beta of same core.
    // - Otherwise compare beta numbers.
    if (a.beta === null && b.beta === null) return 0;
    if (a.beta === null) return 1;
    if (b.beta === null) return -1;

    if (a.beta > b.beta) return 1;
    if (a.beta < b.beta) return -1;
    return 0;
};
