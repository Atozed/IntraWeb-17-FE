declare namespace IntraWeb.Controls.JQUI {
    function RuntimeInit(): void;
    class ProgressBar extends IntraWeb.Control {
        protected _Div: HTMLDivElement;
        protected _JQ: any;
        readonly Color: any;
        readonly Enabled: any;
        readonly Max: any;
        readonly Value: any;
        protected CreateRoot(): HTMLElement;
        protected Render(): void;
    }
    class Dialog extends IntraWeb.Control {
        protected _Div: HTMLDivElement;
        readonly AppendTo: any;
        readonly AutoOpen: any;
        readonly CloseOnEscape: any;
        readonly CloseText: any;
        readonly Draggable: any;
        readonly EnableHide: any;
        readonly DialogHeight: any;
        readonly MaxHeight: any;
        readonly MinHeight: any;
        readonly DialogWidth: any;
        readonly MaxWidth: any;
        readonly MinWidth: any;
        readonly Text: any;
        readonly DialogModal: any;
        readonly Title: any;
        readonly Position: any;
        readonly Resizable: any;
        protected CreateRoot(): HTMLElement;
        Show(): void;
    }
    class AutoComplete extends IntraWeb.Control {
        protected _Input: HTMLInputElement | null;
        protected CreateRoot(): HTMLElement;
        UpdateFromDOM(): void;
        protected Render(): void;
        protected AfterDomComplete(): void;
    }
    class Button extends Control {
        protected _Button: HTMLButtonElement | null;
        readonly Text: any;
        DesignInit(): void;
        protected CreateRoot(): HTMLElement;
        protected Render(): void;
        protected AfterDomComplete(): void;
    }
    class DatePicker extends Control {
        protected _JQ: any;
        readonly AutoSize: any;
        readonly Caption: any;
        readonly DropdownMonth: any;
        readonly DropdownYear: any;
        readonly FirstDay: any;
        readonly IsInline: any;
        readonly Value: any;
        protected CreateRoot(): HTMLElement;
        GetParams(): Atozed.Props.Params;
        protected Render(): void;
        UpdateFromDOM(): void;
        protected AfterDomComplete(): void;
    }
    class DropDown extends Control {
        protected _Select: HTMLSelectElement;
        protected CreateRoot(): HTMLElement;
        protected Render(): void;
    }
    class Slider extends Control {
        protected _Div: HTMLDivElement | null;
        protected _JQH: any;
        readonly Min: any;
        readonly Max: any;
        readonly Orientation: any;
        readonly Step: any;
        readonly Value: any;
        protected CreateRoot(): HTMLElement;
        protected AfterDomComplete(): void;
        UpdateFromDOM(): void;
        protected Render(): void;
    }
    class Spinner extends Control {
        protected _InputText: HTMLInputElement;
        readonly Min: any;
        readonly Max: any;
        readonly Step: any;
        readonly Value: any;
        protected CreateRoot(): HTMLElement;
        UpdateFromDOM(): void;
        protected Render(): void;
    }
}
