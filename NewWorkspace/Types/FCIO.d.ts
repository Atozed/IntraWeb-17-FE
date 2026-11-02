declare namespace IntraWeb.Controls.FCIO.ArrayItems.Calendar {
    class Event extends NamedArrayItem {
        ID: any;
        Title: any;
        AllDay: any;
        Start: any;
        Finish: any;
        Color: any;
        TextColor: any;
        GetParams(): Atozed.Props.Params;
    }
    class Events extends NamedObjectArray<Event> {
    }
}
declare namespace IntraWeb.Controls.FCIO {
    function RuntimeInit(): void;
    class Calendar extends IntraWeb.Control {
        protected _Div: HTMLDivElement;
        readonly AllDaySlot: any;
        readonly DefaultView: any;
        readonly Droppable: any;
        readonly Editable: any;
        readonly EventLimit: any;
        readonly Events: ArrayItems.Calendar.Events;
        readonly FirstDay: any;
        readonly HeaderLeft: any;
        readonly HeaderCenter: any;
        readonly HeaderRight: any;
        readonly CalendarHeight: any;
        readonly Locale: any;
        readonly MinTime: any;
        readonly MaxTime: any;
        readonly NavLinks: any;
        readonly NowIndicator: any;
        readonly Selectable: any;
        readonly SlotDuration: any;
        readonly ScrollTime: any;
        readonly SlotLabelFormat: any;
        readonly ValidRange: any;
        readonly WeekNumbers: any;
        protected CreateRoot(): HTMLElement;
        protected Render(): void;
    }
}
