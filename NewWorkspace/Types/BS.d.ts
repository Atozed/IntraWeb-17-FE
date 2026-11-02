declare namespace IntraWeb.Controls.BS {
    function RuntimeInit(): void;
    class Container extends LayoutDivBase<CellNone> {
        readonly Fluid: any;
        protected Render(): void;
    }
    class Row extends LayoutDivBase<CellNone> {
        protected InitDOM(): void;
    }
    class Size extends PropObject {
        XSmall: any;
        Small: any;
        Medium: any;
        Large: any;
        XLarge: any;
    }
    class Col extends LayoutDivBase<CellNone> {
        Size: Size;
        protected Render(): void;
    }
    enum ButtonTheme {
        Basic = 0,
        Primary = 1,
        Secondary = 2,
        Success = 3,
        Info = 4,
        Warning = 5,
        Danger = 6,
        Dark = 7,
        Light = 8,
        Link = 9
    }
    enum ButtonSizeEnum {
        Default = 0,
        Small = 1,
        Large = 2
    }
    class Button extends IntraWeb.Controls.Button {
        readonly BlockLevel: any;
        readonly ButtonSize: any;
        readonly Theme: any;
        readonly Outline: any;
        protected Render(): void;
    }
    enum BadgeTheme {
        Primary = 0,
        Secondary = 1,
        Success = 2,
        Danger = 3,
        Warning = 4,
        Info = 5,
        Light = 6,
        Dark = 7
    }
    enum BadgeShape {
        Square = 0,
        Pill = 1
    }
    class Badge extends SpanControl {
        readonly Shape: any;
        readonly Text: any;
        readonly Theme: any;
        GetParams(): Atozed.Props.Params;
        protected Render(): void;
    }
    class BadgeLink extends Link {
        readonly Shape: any;
        readonly Theme: any;
        protected Render(): void;
    }
    class NavBar {
    }
}
