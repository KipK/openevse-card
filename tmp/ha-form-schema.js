import memoizeOne from "memoize-one";
export const mainSchema = memoizeOne((deviceEntities = {}) => {
    // Base schema
    const schema = [
        {
            type: "grid",
            name: "",
            schema: [
                { name: "name", selector: { text: {} }, required: false, label: "Header Title" },
                { name: "header", selector: { boolean: {} }, label: "Display header" }
            ]
        },
        {
            name: "device_id",
            selector: { device: { integration: "openevse", manufacturer: "OpenEVSE" } },
            label: "OpenEVSE Device",
            helper_text: "Select your OpenEVSE device to automatically populate all entities",
            required: true
        }
    ];
    // Add entity selectors with filtering
    // We use the device entity lists that were passed in
    const entitySelectors = [
        {
            name: "override_entity",
            selector: {
                entity: {
                    domain: ["input_select", "select"],
                    include_entities: deviceEntities.select || []
                }
            },
            label: "Override State",
            helper_text: "Select openevse.override_state entity",
            required: true
        },
        {
            name: "status_entity",
            selector: {
                entity: {
                    domain: ["sensor"],
                    include_entities: deviceEntities.sensor || []
                }
            },
            label: "Station Status",
            helper_text: "Select openevse.station_status entity",
            required: true
        },
        {
            name: "power_entity",
            selector: {
                entity: {
                    domain: ["sensor"],
                    include_entities: deviceEntities.sensor || []
                }
            },
            label: "Current power usage",
            helper_text: "Select openevse.current_power_usage entity",
            required: true
        },
        {
            name: "current_entity",
            selector: {
                entity: {
                    domain: ["sensor"],
                    include_entities: deviceEntities.sensor || []
                }
            },
            label: "Charging current",
            helper_text: "Select openevse.charging_current entity",
            required: true
        },
        {
            name: "vehicle_connected_entity",
            selector: {
                entity: {
                    domain: ["binary_sensor"],
                    include_entities: deviceEntities.binary_sensor || []
                }
            },
            label: "Vehicle Connected",
            helper_text: "Select openevse.vehicle_connected entity",
            required: true
        },
        {
            name: "charging_status_entity",
            selector: {
                entity: {
                    domain: ["sensor"],
                    include_entities: deviceEntities.sensor || []
                }
            },
            label: "Charging status",
            helper_text: "Select openevse.charging_status entity",
            required: true
        },
        {
            name: "charge_rate_entity",
            selector: {
                entity: {
                    domain: ["number"],
                    include_entities: deviceEntities.number || []
                }
            },
            label: "Charge Rate",
            helper_text: "Select openevse.charge_rate entity",
            required: true
        },
        {
            name: "session_energy_entity",
            selector: {
                entity: {
                    domain: ["sensor"],
                    include_entities: deviceEntities.sensor || []
                }
            },
            label: "Session Energy",
            helper_text: "Select openevse.usage_this_session entity",
            required: true
        },
        {
            name: "time_elapsed_entity",
            selector: {
                entity: {
                    domain: ["sensor"],
                    include_entities: deviceEntities.sensor || []
                }
            },
            label: "Charge Time Elapsed",
            helper_text: "Select openevse.charge_time_elapsed entity",
            required: true
        }
    ];
    return [...schema, ...entitySelectors];
});
export const optionalEntitySchema = memoizeOne((allEntities = []) => [
    {
        name: "id",
        selector: {
            entity: {
                domain: ["sensor", "binary_sensor"],
                include_entities: allEntities
            }
        },
        label: "Entity"
    },
    { name: "name", selector: { text: {} }, label: "Name" },
    { name: "icon", selector: { icon: {} }, label: "Icon" }
]);
//# sourceMappingURL=ha-form-schema.js.map