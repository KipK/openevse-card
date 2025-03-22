export interface HomeAssistant {
	states: Record<string, EntityState>;
	callService: (domain: string, service: string, data: any) => void;
	formatEntityState: (entity: EntityState) => string;
	language: string;
	entities?: Record<string, RegistryEntity>;
}

export interface EntityState {
	state: string;
	attributes: Record<string, any>;
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
	override_entity?: string;
	status_entity?: string;
	power_entity?: string;
	current_entity?: string;
	charge_rate_entity?: string;
	vehicle_connected_entity?: string;
	charging_status_entity?: string;
	session_energy_entity?: string;
	time_elapsed_entity?: string;
	optional_entities?: OptionalEntity[];
}

export interface OptionalEntity {
	id?: string;
	name?: string | null;
	icon?: string | null;
	value?: string | null;
}

export interface TranslationDict {
	[key: string]: {
		[key: string]: string;
	};
}

export interface SchemaItem {
	name: string;
	type?: string;
	selector?: any;
	label?: string;
	helper_text?: string;
	required?: boolean;
	schema?: SchemaItem[];
}
