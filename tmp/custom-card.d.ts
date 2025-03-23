import { LitElement, PropertyValues } from 'lit-element';
import { HomeAssistant, CardConfig, TranslationDict } from './types';
import './evse-slider/evse-slider';
declare class CustomCard extends LitElement {
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
        _localTimeElapsed: {
            type: NumberConstructor;
        };
        _lastEntityTime: {
            type: NumberConstructor;
        };
        _timeUpdateInterval: {
            type: NumberConstructor;
        };
        _isCharging: {
            type: BooleanConstructor;
        };
    };
    hass?: HomeAssistant;
    config?: CardConfig;
    _lang?: string;
    _localTimeElapsed: number;
    _lastEntityTime: number;
    _timeUpdateInterval: number | null;
    _isCharging: boolean;
    _translations: TranslationDict;
    constructor();
    disconnectedCallback(): void;
    getGridOptions(): {
        columns: number;
        max_columns: number;
        min_columns: number;
    };
    _setupTimeInterval(): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues): void;
    static getConfigElement(): HTMLElement;
    static getStubConfig(): CardConfig;
    static get styles(): import("lit-element").CSSResult;
    setConfig(config: CardConfig): void;
    getCardSize(): number;
    _callService(entity_id: string, option: string | number): void;
    _showMoreInfo(entity_id: string): void;
    _convertSeconds(sec: number): string;
    _convertTime(t: number): string;
    _t(key: string): string;
    _updateSlider(e: CustomEvent): void;
    render(): import("lit-html").TemplateResult<1>;
}
export { CustomCard };
//# sourceMappingURL=custom-card.d.ts.map