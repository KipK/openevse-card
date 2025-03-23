import { LitElement, PropertyValues } from 'lit';
export declare class EVSESlider extends LitElement {
    min: number;
    max: number;
    step: number;
    value: number;
    unit: string;
    disabled: boolean;
    label: string;
    private _sliderValue;
    private _dragging;
    private _boundHandleSliderMove;
    private _boundHandleSliderEnd;
    constructor();
    updated(changedProps: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private get _percentage();
    private _formatValue;
    private _handleSliderStart;
    private _handleSliderMove;
    private _handleSliderEnd;
    private _removeEventListeners;
    private _updateSliderValue;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=evse-slider.d.ts.map