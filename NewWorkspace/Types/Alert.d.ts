declare namespace IntraWeb.Controls.Alert {
    function RuntimeInit(): void;
    enum AlertType {
        Warning = 0,
        Error = 1,
        Success = 2,
        Info = 3,
        Question = 4
    }
    enum Position {
        TopStart = 0,
        TopEnd = 1,
        Center = 2,
        CenterStart = 3,
        CenterEnd = 4,
        Bottom = 5,
        BottomStart = 6,
        BottomEnd = 7
    }
    class Notification extends IntraWeb.Component {
        readonly DoShow: any;
        readonly Title: any;
        readonly TitleText: any;
        readonly Text: any;
        readonly HTML: any;
        readonly AlertType: any;
        readonly Footer: any;
        readonly Backdrop: any;
        readonly Toast: any;
        readonly Position: any;
        readonly Timer: any;
        readonly Animation: any;
        readonly AllowOutsideClick: any;
        readonly AllowEscapeKey: any;
        readonly AllowEnterKey: any;
        readonly ShowConfirmButton: any;
        readonly ShowCancelButton: any;
        readonly ConfirmButtonText: any;
        readonly CancelButtonText: any;
        readonly ConfirmButtonColor: any;
        readonly CancelButtonColor: any;
        readonly FocusConfirm: any;
        readonly FocusCancel: any;
        readonly ShowCloseButton: any;
        GetParams(): Atozed.Props.Params;
        protected AfterRender(): void;
        Show(aText?: string): void;
    }
}
