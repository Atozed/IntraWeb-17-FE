declare namespace IntraWeb.Controls.BSALTE {
    function RuntimeInit(): void;
    enum Color {
        None = 0,
        Primary = 1,
        Secondary = 2,
        Success = 3,
        Info = 4,
        Warning = 5,
        Danger = 6,
        Black = 7,
        Gray = 8,
        DarkGray = 9,
        Indigo = 10,
        Navy = 11,
        Purple = 12,
        Fuchsia = 13,
        Pink = 14,
        Maroon = 15,
        Orange = 16,
        Lime = 17,
        Teal = 18,
        Olive = 19
    }
    function Colors(aPrefix: string): Array<string>;
    class Theme extends PropObject {
        readonly Background: any;
        readonly Text: any;
    }
    abstract class CardPartBase extends LayoutDivBase<CellNone> {
        CanAddTo(aLayout: Layout): boolean;
    }
    class Badge extends SpanControl {
        readonly Text: any;
        readonly Theme: any;
        GetParams(): Atozed.Props.Params;
        DesignInit(): void;
        protected Render(): void;
    }
    class CardHeader extends CardPartBase {
        readonly Title: any;
        protected _H3: HTMLHeadingElement;
        DesignInit(): void;
        GetParams(): Atozed.Props.Params;
        protected InitCellListDOM(): void;
        protected Render(): void;
    }
    class CardBody extends CardPartBase {
        protected Render(): void;
    }
    class CardFooter extends CardPartBase {
        protected Render(): void;
    }
    class Card extends LayoutDivBase<CellNone> {
        readonly Gradient: any;
        readonly BackgroundTheme: any;
        readonly Outline: any;
        readonly Theme: any;
        protected _DesignInit: boolean;
        DesignInit(): void;
        protected SetParent(aParent: Renderer): void;
        GetParams(): Atozed.Props.Params;
        protected Render(): void;
        Add(aCtrl: Control): CellNone;
        CanAddControl(aControl: Control): boolean;
    }
    class RibbonTitle extends PropObject {
        readonly Size: any;
        readonly Text: any;
        readonly Theme: Theme;
    }
    enum RibbonSizeEnum {
        Small = 0,
        Medium = 1,
        Large = 2
    }
    class Ribbon extends LayoutDivBase<CellNone> {
        readonly Size: any;
        readonly Theme: Theme;
        protected _WrapperDiv: HTMLDivElement;
        protected _RibbonDiv: HTMLDivElement;
        protected InitDOM(): void;
        protected Render(): void;
    }
}
