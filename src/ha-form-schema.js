import memoizeOne from "memoize-one";

export const mainSchema = memoizeOne(
	() => [
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
		},
		{
			name: "override_entity",
			selector: { entity: { domain: ["input_select", "select"] } },
			label: "Override State",
			helper_text: "Select openevse.override_state entity",
			required: true
		},
		{
			name: "status_entity",
			selector: { entity: { domain: ["sensor"] } },
			label: "Station Status",
			helper_text: "Select openevse.station_status entity",
			required: true
		},
		{
			name: "power_entity",
			selector: { entity: { domain: ["sensor"] } },
			label: "Current power usage",
			helper_text: "Select openevse.current_power_usage entity",
			required: true
		},
		{
			name: "current_entity",
			selector: { entity: { domain: ["sensor"] } },
			label: "Charging current",
			helper_text: "Select openevse.charging_current entity",
			required: true
		},
		{
			name: "vehicle_connected_entity",
			selector: { entity: { domain: ["binary_sensor"] } },
			label: "Vehicle Connected",
			helper_text: "Select openevse.vehicle_connected entity",
			required: true
		},
		{
			name: "charging_status_entity",
			selector: { entity: { domain: ["sensor"] } },
			label: "Charging status",
			helper_text: "Select openevse.charging_status entity",
			required: true
		},
		{
			name: "charge_rate_entity",
			selector: { entity: { domain: ["number"] } },
			label: "Charge Rate",
			helper_text: "Select openevse.charge_rate entity",
			required: true
		},
		{
			name: "session_energy_entity",
			selector: { entity: { domain: ["sensor"] } },
			label: "Session Energy",
			helper_text: "Select openevse.usage_this_session entity",
			required: true
		},
		{
			name: "time_elapsed_entity",
			selector: { entity: { domain: ["sensor"] } },
			label: "Charge Time Elapsed",
			helper_text: "Select openevse.charge_time_elapsed entity",
			required: true
		},
	]
);

export const optionalEntitySchema = memoizeOne(
	() => [
		{ name: "id", selector: { entity: { domain: ["sensor", "binary_sensor"] } }, label: "Entity" },
		{ name: "name", selector: { text: {} }, label: "Name" },
		{ name: "icon", selector: { icon: {} }, label: "Icon" }
	]
);
