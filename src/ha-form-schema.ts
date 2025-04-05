import memoizeOne from 'memoize-one';
import {SchemaItem} from './types';
import {localize} from './utils/translations';

// Helper function to create entity selector schema items
function createEntitySelectorSchema(
    name: string,
    domains: string | string[],
    labelKey: string,
    helperKey: string,
    required: boolean,
    deviceEntities: Record<string, string[]> = {},
    lang: string = 'en'
): SchemaItem {
    const domainArray = Array.isArray(domains) ? domains : [domains];
    // Flatten the list of entities for the given domains
    const includeEntities = domainArray.flatMap(
        (domain) => deviceEntities[domain] || []
    );

    return {
        name: name,
        selector: {
            entity: {
                domain: domains, // Can be string or array
                include_entities: includeEntities,
            },
        },
        label: localize(labelKey, lang),
        helper_text: localize(helperKey, lang),
        required: required,
    };
}

export const mainSchema = memoizeOne(
    (
        deviceEntities: Record<string, string[]> = {},
        lang: string = 'en'
    ): SchemaItem[] => {
        // Base schema
        const schema: SchemaItem[] = [
            {
                type: 'grid',
                name: '',
                schema: [
                    {
                        name: 'name',
                        selector: {text: {}},
                        required: false,
                        label: localize('header title', lang),
                    },
                    {
                        name: 'header',
                        selector: {boolean: {}},
                        label: localize('display header', lang),
                    },
                ],
            },
            {
                type: 'grid',
                name: '',
                label: localize('features', lang),
                schema: [
                    {
                        name: 'feat_soc',
                        selector: {boolean: {}},
                        label: localize('enable vehicle battery', lang),
                    },
                    {
                        name: 'feat_range',
                        selector: {boolean: {}},
                        label: localize('enable vehicle range', lang),
                    },
                ],
            },
            {
                type: 'grid',
                name: '',
                label: localize('limits settings', lang),
                schema: [
                    {
                        name: 'feat_max_energy',
                        selector: {number: {}},
                        required: false,
                        label: localize('maximum charge energy', lang),
                    },
                    {
                        name: 'feat_max_range',
                        selector: {number: {}},
                        required: false,
                        label: localize('maximum vehicle range', lang),
                    },
                ],
            },
            {
                name: 'device_id',
                selector: {
                    device: {integration: 'openevse', manufacturer: 'OpenEVSE'},
                },
                label: localize('openevse device', lang),
                helper_text: localize('select your openevse device', lang),
                required: true,
            },
        ];

        // Add entity selectors using the helper function
        const entitySelectors: SchemaItem[] = [
            createEntitySelectorSchema(
                'override_entity',
                ['input_select', 'select'],
                'override state',
                'select openevse.override_state entity',
                true,
                deviceEntities,
                lang
            ),
            createEntitySelectorSchema(
                'status_entity',
                'sensor',
                'station status',
                'select openevse.station_status entity',
                true,
                deviceEntities,
                lang
            ),
            createEntitySelectorSchema(
                'power_entity',
                'sensor',
                'current power usage',
                'select openevse.current_power_usage entity',
                true,
                deviceEntities,
                lang
            ),
            createEntitySelectorSchema(
                'current_entity',
                'sensor',
                'charging current',
                'select openevse.charging_current entity',
                true,
                deviceEntities,
                lang
            ),
            createEntitySelectorSchema(
                'vehicle_connected_entity',
                'binary_sensor',
                'vehicle connected',
                'select openevse.vehicle_connected entity',
                true,
                deviceEntities,
                lang
            ),
            createEntitySelectorSchema(
                'charging_status_entity',
                'sensor',
                'charging status',
                'select openevse.charging_status entity',
                true,
                deviceEntities,
                lang
            ),
            createEntitySelectorSchema(
                'charge_rate_entity',
                'number',
                'charge rate',
                'select openevse.charge_rate entity',
                true,
                deviceEntities,
                lang
            ),
            createEntitySelectorSchema(
                'session_energy_entity',
                'sensor',
                'session energy',
                'select openevse.usage_this_session entity',
                true,
                deviceEntities,
                lang
            ),
            createEntitySelectorSchema(
                'time_elapsed_entity',
                'sensor',
                'charge time elapsed',
                'select openevse.charge_time_elapsed entity',
                true,
                deviceEntities,
                lang
            ),
            createEntitySelectorSchema(
                'wifi_signal_strength_entity',
                'sensor',
                'wifi signal',
                'select openevse_wifi_signal_strength entity',
                false,
                deviceEntities,
                lang
            ),
            createEntitySelectorSchema(
                'limit_active_entity',
                'binary_sensor',
                'limit active',
                'select openevse_limit_active entity',
                false,
                deviceEntities,
                lang
            ),
            createEntitySelectorSchema(
                'divert_active_entity',
                'binary_sensor',
                'divert active',
                'select openevse_divert_active entity',
                false,
                deviceEntities,
                lang
            ),
            createEntitySelectorSchema(
                'divert_mode_entity',
                'select',
                'divert mode',
                'select openevse_divert_mode',
                false,
                deviceEntities,
                lang
            ),
            createEntitySelectorSchema(
                'pv_charge_rate_entity',
                'sensor',
                'Divert pv charge rate',
                'select openevse_pv_charge_rate entity',
                false,
                deviceEntities,
                lang
            ),
            createEntitySelectorSchema(
                'vehicle_range_entity',
                'sensor',
                'vehicle range',
                'select openevse_vehicle_range entity',
                false,
                deviceEntities,
                lang
            ),
            createEntitySelectorSchema(
                'vehicle_battery_level_entity',
                'sensor',
                'battery level',
                'select openevse_vehicle_battery_level entity',
                false,
                deviceEntities,
                lang
            ),
        ];

        return [...schema, ...entitySelectors];
    }
);

export const optionalEntitySchema = memoizeOne(
    (
        deviceEntities: Record<string, string[]> = {},
        lang: string = 'en'
    ): SchemaItem[] => {
        const schema: SchemaItem[] = [
            {
                name: 'id',
                selector: {
                    entity: {
                        domain: ['sensor', 'binary_sensor'],
                        include_entities: [
                            ...(deviceEntities.sensor || []),
                            ...(deviceEntities.binary_sensor || []),
                        ], // Now correctly passing an array
                    },
                },
                label: localize('entity', lang),
            },
            {name: 'name', selector: {text: {}}, label: localize('name', lang)},
            {name: 'icon', selector: {icon: {}}, label: localize('icon', lang)},
        ];
        return schema;
    }
);
