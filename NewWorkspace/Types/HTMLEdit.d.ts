declare namespace IntraWeb.Controls.HTMLEdit {
    function RuntimeInit(): void;
    class Edit extends IntraWeb.Control {
        readonly HTML: any;
        protected _Preview: HTMLDivElement;
        GetParams(): Atozed.Props.Params;
        GetDefaultWidth(): string;
        protected CreateRoot(): HTMLElement;
        protected Render(): void;
        protected AfterDomComplete(): void;
    }
}
