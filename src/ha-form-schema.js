import memoizeOne from "memoize-one";

export const mainSchema = memoizeOne(
	() => [
		{
			type: "grid",
			name: "",
			schema: [
				{ name: "header", selector: { boolean: {} }, label: "Display header" },
				{ name: "name", selector: { text: {} }, required: false, label: "Name" },
			]
		},
		{
			name: "override_entity",
			selector: { entity: { domain: ["input_select", "select"] } },
			label: "Override State",
			helper_text: "Sélectionnez une entité de type override state",
			required: true
		},
		{ name: "status_entity", selector: { entity: { domain: ["sensor"] } }, label: "Station Status", required: true },
		{ name: "power_entity", selector: { entity: { domain: ["sensor"] } }, label: "Current power usage", required: true },
		{ name: "current_entity", selector: { entity: { domain: ["sensor"] } }, label: "Charging current", required: true },
		{ name: "vehicle_connected_entity", selector: { entity: { domain: ["binary_sensor"] } }, label: "Vehicle Connected", required: true },
		{ name: "charging_status_entity", selector: { entity: { domain: ["sensor"] } }, label: "Charging status", required: true },
		{ name: "charge_rate_entity", selector: { entity: { domain: ["number"] } }, label: "Charge Rate", required: true },
		{ name: "session_energy_entity", selector: { entity: { domain: ["sensor"] } }, label: "Session Energy", required: true },
		{ name: "time_elapsed_entity", selector: { entity: { domain: ["sensor"] } }, label: "Time Elapsed Seconds", required: true },
	]
);

export const optionalEntitySchema = memoizeOne(
	() => [
		{ name: "id", selector: { entity: { domain: ["sensor, binary_sensor"] } }, label: "Entity" },
		{ name: "name", selector: { text: {} }, label: "Name" },
		{ name: "icon", selector: { icon: {} }, label: "Icon" }
	]
);
