import { LitElement } from 'lit';
import { HomeAssistant, CardConfig, OptionalEntity, TranslationDict } from './types';
declare class CustomCardEditor extends LitElement {
    static get properties(): {
        hass: {
            type: ObjectConstructor;
        };
        config: {
            type: ObjectConstructor;
        };
        _lang: {
            type: StringConstructor;
        };
        _deviceIdChanged: {
            type: BooleanConstructor;
        };
    };
    hass?: HomeAssistant;
    config: CardConfig;
    _lang?: string;
    _deviceIdChanged: boolean;
    _translations: TranslationDict;
    optionalEntities: OptionalEntity[];
    openEVSEEntities: Partial<CardConfig>;
    deviceEntitiesLoaded: boolean;
    _entityPickerKey: number;
    static get styles(): import("lit").CSSResult;
    constructor();
    firstUpdated(): Promise<void>;
    setConfig(config: CardConfig): void;
    _isEntityConfigured(configKey: string): boolean;
    _loadDeviceEntities(deviceId: string): Promise<void>;
    _handleConfigChange(ev: CustomEvent): void;
    _dispatchConfigChanged(updatedConfig: CardConfig): void;
    _fireConfigChanged(newConfig: CardConfig): void;
    _addOptionalEntity(ev: CustomEvent): void;
    _removeEntity(index: number): void;
    _updateOptionalEntity(index: number, changedValues: Partial<OptionalEntity>): void;
    _getMissingEntities(): string[];
    _t(key: string): string;
    render(): import("lit-html").TemplateResult<1>;
}
export { CustomCardEditor };
//# sourceMappingURL=custom-card-editor.d.ts.map