declare namespace IntraWeb.Controls.CHJS {
    function RuntimeInit(): void;
    enum ChartType {
        Line = 0,
        Bar = 1,
        Radar = 2,
        PolarArea = 3,
        Pie = 4,
        Doughnut = 5,
        Bubble = 6
    }
    class Chart extends IntraWeb.Control {
        protected _Canvas: HTMLCanvasElement;
        readonly ChartType: any;
        readonly ChartLabels: any;
        readonly AspectRatio: any;
        readonly MaintainAspectRatio: any;
        readonly Responsive: any;
        readonly PaddingLeft: any;
        readonly PaddingRight: any;
        readonly PaddingTop: any;
        readonly PaddingBottom: any;
        readonly DisplayLegend: any;
        readonly PositionLegend: any;
        readonly DisplayTitle: any;
        readonly TextTitle: any;
        readonly FontSizeTitle: any;
        readonly FontColorTitle: any;
        readonly FontStyleTitle: any;
        readonly PositionTitle: any;
        protected CreateRoot(): HTMLElement;
        GetDefaultWidth(): string;
        GetDefaultHeight(): string;
        protected Render(): void;
    }
}
