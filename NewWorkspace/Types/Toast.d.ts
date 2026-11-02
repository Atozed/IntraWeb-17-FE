declare namespace IntraWeb.Controls.Toast {
    function RuntimeInit(): void;
    enum Position {
        BottomRight = 0,
        BottomLeft = 1,
        TopRight = 2,
        TopLeft = 3,
        TopCenter = 4,
        BottomCenter = 5,
        Center = 6
    }
    enum TransitionIn {
        BounceInLeft = 0,
        BounceInRight = 1,
        BounceInUp = 2,
        BounceInDown = 3,
        FadeIn = 4,
        FadeInDown = 5,
        FadeInUp = 6,
        FadeInLeft = 7,
        FadeInRight = 8,
        FlipInX = 9
    }
    enum TransitionOut {
        FadeOut = 0,
        FadeOutUp = 1,
        FadeOutDown = 2,
        FadeOutLeft = 3,
        FadeOutRight = 4,
        FlipOutX = 5
    }
    class Notification extends IntraWeb.Component {
        readonly Title: any;
        readonly TitleColor: any;
        readonly TitleSize: any;
        readonly TitleLineHeight: any;
        readonly Message: any;
        readonly MessageColor: any;
        readonly MessageSize: any;
        readonly MessageLineHeight: any;
        readonly BackGroundColor: any;
        readonly Theme: any;
        readonly Icon: any;
        readonly IconText: any;
        readonly IconColor: any;
        readonly Image: any;
        readonly ImageWidth: any;
        readonly MaxWidth: any;
        readonly Layout: any;
        readonly Balloon: any;
        readonly Close: any;
        readonly CloseOnEscape: any;
        readonly CloseOnClick: any;
        readonly Position: any;
        readonly Target: any;
        readonly TargetFirst: any;
        readonly ToastOnce: any;
        readonly Timeout: any;
        readonly AnimateInside: any;
        readonly Drag: any;
        readonly PauseOnHover: any;
        readonly ResetOnHover: any;
        readonly ProgressBar: any;
        readonly ProgressBarColor: any;
        readonly ProgressBarEasing: any;
        readonly Overlay: any;
        readonly OverlayClose: any;
        readonly OverlayColor: any;
        readonly TransitionIn: any;
        readonly TransitionOut: any;
        readonly TransitionInMobile: any;
        readonly TransitionOutMobile: any;
        Show(aMsg?: string | null, aTitle?: string): void;
    }
}
