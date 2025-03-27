import memoizeOne from "memoize-one";
import { SchemaItem } from "./types";
import translations from "./translations";

// Translation function
const t = (key: string, lang: string = "en"): string => {
	const lowerKey = key.toLowerCase();
	// Use a safer approach with explicit checks
	if (lang in translations && lowerKey in (translations as Record<string, Record<string, string>>)[lang]) {
		return (translations as Record<string, Record<string, string>>)[lang][lowerKey];
	} else if ("en" in translations && lowerKey in (translations as Record<string, Record<string, string>>)["en"]) {
		return (translations as Record<string, Record<string, string>>)["en"][lowerKey];
	}
	return key;
};

export const mainSchema = memoizeOne(
	(deviceEntities: Record<string, string[]> = {}, lang: string = "en"): SchemaItem[] => {
		// Base schema
		const schema: SchemaItem[] = [
			{
				type: "grid",
				name: "",
				schema: [
					{ name: "name", selector: { text: {} }, required: false, label: t("header title", lang) },
					{ name: "header", selector: { boolean: {} }, label: t("display header", lang) }
				]
			},
			{
				type: "grid",
				name: "",
				label: t("features", lang),
				schema: [
					{ name: "feat_soc", selector: { boolean: {} }, label: t("enable vehicle battery", lang) },
					{ name: "feat_range", selector: { boolean: {} }, label: t("enable vehicle range", lang) },
				]
			},
			{
				type: "grid",
				name: "",
				label: t("limits settings", lang),
				schema: [
					{ name: "feat_max_energy", selector: { number: {} }, required: false, label: t("maximum charge energy", lang) },
					{ name: "feat_max_range", selector: { number: {} }, required: false, label: t("maximum vehicle range", lang) },
				]
			},
			{
				name: "device_id",
				selector: { device: { integration: "openevse", manufacturer: "OpenEVSE" } },
				label: t("openevse device", lang),
				helper_text: t("select your openevse device", lang),
				required: true
			}
		];

		// Add entity selectors with filtering
		// We use the device entity lists that were passed in
		const entitySelectors: SchemaItem[] = [
			{
				name: "override_entity",
				selector: {
					entity: {
						domain: ["input_select", "select"],
						include_entities: deviceEntities.select || []
					}
				},
				label: t("override state", lang),
				helper_text: t("select openevse.override_state entity", lang),
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
				label: t("station status", lang),
				helper_text: t("select openevse.station_status entity", lang),
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
				label: t("current power usage", lang),
				helper_text: t("select openevse.current_power_usage entity", lang),
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
				label: t("charging current", lang),
				helper_text: t("select openevse.charging_current entity", lang),
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
				label: t("vehicle connected", lang),
				helper_text: t("select openevse.vehicle_connected entity", lang),
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
				label: t("charging status", lang),
				helper_text: t("select openevse.charging_status entity", lang),
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
				label: t("charge rate", lang),
				helper_text: t("select openevse.charge_rate entity", lang),
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
				label: t("session energy", lang),
				helper_text: t("select openevse.usage_this_session entity", lang),
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
				label: t("charge time elapsed", lang),
				helper_text: t("select openevse.charge_time_elapsed entity", lang),
				required: true
			},
			{
				name: "wifi_signal_strength_entity",
				selector: {
					entity: {
						domain: ["sensor"],
						include_entities: deviceEntities.sensor || []
					}
				},
				label: t("wifi signal", lang),
				helper_text: t("select openevse_wifi_signal_strength entity", lang),
				required: false
			},
			{
				name: "limit_active_entity",
				selector: {
					entity: {
						domain: ["binary_sensor"],
						include_entities: deviceEntities.binary_sensor || []
					}
				},
				label: t("limit active", lang),
				helper_text: t("select openevse_limit_active entity", lang),
				required: false
			},
			{
				name: "vehicle_range_entity",
				selector: {
					entity: {
						domain: ["sensor"],
						include_entities: deviceEntities.sensor || []
					}
				},
				label: t("vehicle range", lang),
				helper_text: t("select openevse_vehicle_range entity", lang),
				required: false
			},
			{
				name: "vehicle_battery_level_entity",
				selector: {
					entity: {
						domain: ["sensor"],
						include_entities: deviceEntities.sensor || []
					}
				},
				label: t("battery level", lang),
				helper_text: t("select openevse_vehicle_battery_level entity", lang),
				required: false
			}


		];

		return [...schema, ...entitySelectors];
	}
);

export const optionalEntitySchema = memoizeOne(
	(deviceEntities: Record<string, string[]> = {}, lang: string = "en"): SchemaItem[] => {
		const schema: SchemaItem[] = [
			{
				name: "id",
				selector: {
					entity: {
						domain: ["sensor", "binary_sensor"],
						include_entities: [...deviceEntities.sensor || [], ...deviceEntities.binary_sensor || []]  // Now correctly passing an array
					}
				},
				label: t("entity", lang)
			},
			{ name: "name", selector: { text: {} }, label: t("name", lang) },
			{ name: "icon", selector: { icon: {} }, label: t("icon", lang) }
		];
		return schema;  
	}
);
