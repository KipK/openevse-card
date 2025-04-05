export interface HomeAssistant {
    states: Record<string, EntityState>;
    callService: (
        domain: string,
        service: string,
        data: Record<string, unknown>,
        target?: ServiceCallRequest['target'],
        notifyOnError?: boolean,
        returnResponse?: boolean
    ) => Promise<ServiceCallResponse | void>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callWS: <T>(msg: {type: string; [key: string]: any}) => Promise<T>;
    formatEntityState: (entity: EntityState) => string;
    language: string;
    entities?: Record<string, RegistryEntity>;
}

export interface EntityState {
    state: string;
    attributes: Record<string, unknown>;
}

export interface RegistryEntity {
    entity_id: string;
    device_id: string;
    original_name?: string;
}

// Define a base interface for entity configurations in Lovelace rows
// Based on LovelaceRowConfig from HA frontend types
export interface EntityConfig {
    type?: string; // For special row types, not used in this selector yet
    entity?: string; // Standard entity ID
    name?: string;
    icon?: string;
    // Add other common Lovelace row config properties if needed
    [key: string]: unknown; // Allow other properties
}

export interface CardConfig {
    header?: boolean;
    name?: string;
    feat_soc?: boolean;
    feat_range?: boolean;
    feat_max_range?: number;
    feat_max_energy?: number;
    device_id?: string;
    optional_entities?: (string | EntityConfig)[]; // Allow strings or full config objects
    override_entity?: string;
    status_entity?: string;
    power_entity?: string;
    current_entity?: string;
    vehicle_connected_entity?: string;
    charging_status_entity?: string;
    charge_rate_entity?: string;
    session_energy_entity?: string;
    time_elapsed_entity?: string;
    wifi_signal_strength_entity?: string;
    limit_active_entity?: string;
    divert_active_entity?: string;
    divert_mode_entity?: string;
    pv_charge_rate_entity?: string;
    vehicle_battery_level_entity?: string;
    vehicle_range_entity?: string;
}

// Define a type for keys in CardConfig that hold entity IDs
export type EntityIdKey =
    | 'override_entity'
    | 'status_entity'
    | 'power_entity'
    | 'current_entity'
    | 'vehicle_connected_entity'
    | 'charging_status_entity'
    | 'charge_rate_entity'
    | 'session_energy_entity'
    | 'time_elapsed_entity'
    | 'wifi_signal_strength_entity'
    | 'limit_active_entity'
    | 'divert_active_entity'
    | 'divert_mode_entity'
    | 'pv_charge_rate_entity'
    | 'vehicle_battery_level_entity'
    | 'vehicle_range_entity';

// Keep RenderedOptionalEntity definition if still used by optional-entities.ts component
// (We'll check this component later)
export interface TranslationDict {
    [key: string]: {
        [key: string]: string;
    };
}

export interface SchemaItem {
    name: string;
    type?: string;
    selector?: Record<string, unknown>;
    label?: string;
    helper_text?: string;
    required?: boolean;
    schema?: SchemaItem[];
}

export interface CustomDetailEvent extends Event {
    detail: {
        entityId: string;
    };
}

export interface Limit {
    type: string;
    value: number;
    auto_release: boolean;
}

export interface Context {
    id: string;
    parent_id?: string;
    user_id?: string | null;
}

export interface ServiceCallResponse {
    context: Context;
    response?: string;
}

export interface ServiceCallRequest {
    domain: string;
    service: string;
    serviceData?: Record<string, unknown>;
    target?: HassServiceTarget;
}

export type HassServiceTarget = {
    entity_id?: string | string[];
    device_id?: string | string[];
    area_id?: string | string[];
    floor_id?: string | string[];
    label_id?: string | string[];
};
