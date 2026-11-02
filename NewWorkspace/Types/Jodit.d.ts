declare namespace IntraWeb.Controls.Jodit {
    interface JoditEvents {
        on(aEventName: string, aHandler: () => void): void;
    }
    interface JoditEditor {
        readonly e: JoditEvents;
        value: string;
        destruct(): void;
        setReadOnly(aReadOnly: boolean): void;
    }
    export function EnsureEditorLibrary(): void;
    export function RuntimeInit(): void;
    export class Editor extends IntraWeb.Control {
        readonly HTML: any;
        readonly ReadOnly: any;
        _PropertyEditor: boolean;
        protected _Editor: JoditEditor;
        protected _Placeholder: HTMLDivElement;
        protected _TextArea: HTMLTextAreaElement;
        GetParams(): Atozed.Props.Params;
        GetDefaultWidth(): string;
        GetDefaultHeight(): string;
        protected CreateRoot(): HTMLElement;
        protected GetEnabledState(aBoundProp?: Atozed.Props.Property<any>): boolean;
        protected Render(): void;
        UpdateFromDOM(): void;
        DoAfterDomComplete(): void;
        Removing(): void;
        protected CreateEditor(): void;
    }
    export {};
}
