export interface HomeAssistant {
	states: Record<string, EntityState>;
	// Replace any with Record<string, unknown> for service data
	callService: (domain: string, service: string, data: Record<string, unknown>) => void;
	formatEntityState: (entity: EntityState) => string;
	language: string;
	entities?: Record<string, RegistryEntity>;
}

export interface EntityState {
	state: string;
	// Replace any with unknown for attributes - more type-safe
	attributes: Record<string, unknown>;
}

export interface RegistryEntity {
	entity_id: string;
	device_id: string;
	original_name?: string;
}

export interface CardConfig {
	header?: boolean;
	name?: string;
	device_id?: string;
	optional_entities?: OptionalEntity[];
	override_entity?: string;
	status_entity?: string;
	power_entity?: string;
	current_entity?: string;
	vehicle_connected_entity?: string;
	charging_status_entity?: string;
	charge_rate_entity?: string;
	session_energy_entity?: string;
	time_elapsed_entity?: string;
}

export interface OptionalEntity {
	id?: string;                   // Uses undefined for optional
	name: string | null;           // Uses null for optional
	icon: string | null;           // Uses null for optional
	value: string | null;          // Uses null for optional
}

export interface TranslationDict {
	[key: string]: {
		[key: string]: string;
	};
}

export interface SchemaItem {
	name: string;
	type?: string;
	// Replace any with a more specific selector type
	selector?: Record<string, unknown>;
	label?: string;
	helper_text?: string;
	required?: boolean;
	schema?: SchemaItem[];
}

export interface EntityState {
	state: string;
	attributes: Record<string, unknown>;
}