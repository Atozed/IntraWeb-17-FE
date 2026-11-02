declare namespace IntraWeb.Controls.CRPP {
    function RuntimeInit(): void;
    class CropperJS extends IntraWeb.Control {
        protected _Image: HTMLImageElement;
        readonly URL: any;
        GetDefaultWidth(): string;
        GetDefaultHeight(): string;
        protected CreateRoot(): HTMLElement;
        protected Render(): void;
        protected AfterDomComplete(): void;
    }
}
