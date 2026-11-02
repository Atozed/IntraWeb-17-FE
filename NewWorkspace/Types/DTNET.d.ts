declare namespace IntraWeb.Controls.DTNET.ArrayItems.Table {
    class Column extends NamedArrayItem {
        readonly ColumnType: any;
        readonly UseHeaderStyle: any;
        readonly Orderable: any;
        readonly Searchable: any;
        readonly Style: any;
        readonly Title: any;
        readonly Visible: any;
        readonly Width: any;
        GetParams(): Atozed.Props.Params;
    }
    class Columns extends NamedObjectArray<Column> {
    }
}
declare namespace IntraWeb.Controls.DTNET {
    enum RefreshDataMethod {
        Reset = 0,
        Recalc = 1,
        Data = 2
    }
    function RuntimeInit(): void;
    enum SelectMode {
        None = 0,
        Single = 1,
        Multiple = 2,
        Cursor = 3
    }
    enum SelectWhat {
        Row = 0,
        Column = 1,
        Cell = 2
    }
    enum ColumnType {
        Auto = 0,
        String = 1,
        Number = 2,
        Date = 3,
        FormattedNumber = 4,
        HTML = 5,
        HtmlNumber = 6,
        HtmlFormattedNumber = 7
    }
    enum PageControls {
        Simple = 0,
        SimpleWithNumbers = 1,
        Numbers = 2,
        Full = 3,
        FullWithNumbers = 4,
        FirstLastWithNumbers = 5
    }
    class Table extends IntraWeb.Control {
        protected _DomTable: HTMLTableElement;
        readonly Sorting: any;
        readonly AutoWidth: any;
        readonly Columns: ArrayItems.Table.Columns;
        readonly CompactScroll: any;
        readonly PageControls: any;
        readonly RefreshDataOnSelect: any;
        readonly RowsPerPage: any;
        readonly ScrollHorizontal: any;
        readonly SearchDelay: any;
        readonly SelectMode: any;
        readonly SelectWhat: any;
        readonly ShowKey: any;
        readonly ShowInformation: any;
        readonly ShowSearch: any;
        readonly SearchIgnoreCase: any;
        readonly SmartSearch: any;
        readonly StartRow: any;
        readonly UserCanSetPageSize: any;
        readonly ScrollHeight: any;
        readonly SelectedIndex: any;
        protected GetDtRow(aIdx: number): any;
        protected WhenDataSelectionChanged(): void;
        private _DataLoaded;
        protected WhenDataLoaded(): void;
        protected WhenDataRowAdded(aDataset: Atozed.Data.Dataset, aRow: any): void;
        readonly SelectedKey: any;
        readonly Selected: any;
        protected WhenSelected(aJqEventArgs: any, aDataTable: any, aType: string, aIndexes: Array<number>): void;
        protected _JQH: any;
        readonly Dataset: any;
        private GetDataTable;
        RefreshData(aMethod?: RefreshDataMethod): void;
        protected CreateRoot(): HTMLElement;
        protected AfterDomComplete(): void;
        /**
         * Rebuilds the DataTables instance using the current table properties.
         *
         * DataTables does not support changing its column definitions through the
         * normal option API. Call this after changing Columns or any option that
         * is part of the initial DataTables configuration.
         */
        Reload(): void;
        private InitializeDataTable;
        protected _JqReadyDone: boolean;
        protected _DtClassname: string;
        protected WhenJqReady(): void;
        protected SelectCurrentIndex(): void;
        protected Render(): void;
    }
}
