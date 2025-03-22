import { LitElement, PropertyValues } from 'lit';
import { HomeAssistant, CardConfig, TranslationDict } from './types';
declare class CustomCard extends LitElement {
    static get properties(): {
        hass: {
            type: ObjectConstructor;
        };
        config: {
            type: ObjectConstructor;
        };
        _sliderValue: {
            type: NumberConstructor;
        };
        _dragging: {
            type: BooleanConstructor;
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
            type: ObjectConstructor;
        };
        _isCharging: {
            type: BooleanConstructor;
        };
    };
    hass?: HomeAssistant;
    config?: CardConfig;
    _sliderValue?: number;
    _dragging: boolean;
    _lang?: string;
    _localTimeElapsed: number;
    _lastEntityTime: number;
    _timeUpdateInterval: any;
    _isCharging: boolean;
    _translations: TranslationDict;
    constructor();
    disconnectedCallback(): void;
    _setupTimeInterval(): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues): void;
    static getConfigElement(): HTMLElement;
    static getStubConfig(): CardConfig;
    static get styles(): import("lit").CSSResult;
    setConfig(config: CardConfig): void;
    getCardSize(): number;
    _callService(entity_id: string, option: string | number): void;
    _showMoreInfo(entity_id: string): void;
    _handleSliderStart(ev: MouseEvent | TouchEvent): void;
    _handleSliderMove: (ev: MouseEvent | TouchEvent) => void;
    _handleSliderEnd: (ev: MouseEvent | TouchEvent) => void;
    _updateSliderValue(ev: MouseEvent | TouchEvent): void;
    _convertSeconds(sec: number): string;
    _convertTime(t: number): string;
    _t(key: string): string;
    render(): import("lit-html").TemplateResult<1>;
}
export { CustomCard };
//# sourceMappingURL=custom-card.d.ts.map