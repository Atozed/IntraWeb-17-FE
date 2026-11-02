declare namespace Atozed {
    class Type {
        readonly IsBoolean: boolean;
        readonly IsObject: boolean;
        readonly IsNumber: boolean;
        readonly IsString: boolean;
        readonly IsSymbol: boolean;
        readonly IsBigInt: boolean;
        readonly IsFunction: boolean;
        constructor(aValue: any);
    }
    function TypeOf(aValue: any): Type;
    class HTML {
        static Encode(aText: string): string;
    }
}
declare namespace Atozed {
    class AcornArrayObject {
        Type: string;
        Name: string;
        Param: string;
        Object: object;
    }
    class AcornDynamicObject {
    }
    class LineParser {
        protected _IndentSize: number;
        get IndentSize(): number;
        protected _Index: number;
        get Index(): number;
        get LineNo(): number;
        protected _Lines: string[];
        protected _LineNos: number[];
        protected _Line: string | null;
        get Line(): string | null;
        protected _LineLevel: number;
        get LineLevel(): number;
        protected _NextLine: string | null;
        get NextLine(): string | null;
        protected _NextLineLevel: number;
        get NextLineLevel(): number;
        readonly Length: number;
        constructor(aData: string);
        protected Throw(aTest: Boolean, aMsg: string): void;
        protected GetLine(aIndex: number): [string, number];
        ExtractBlock(): Array<string>;
        protected ResetLineInfo(): void;
        protected UpdateLineInfo(): void;
        Previous(): void;
        Next(aBaseLevel?: number): boolean;
        Get(aIndex: number): string;
    }
    class ACORN {
        ExtendedErrorText: boolean;
        Lines: LineParser;
        protected CheckVersion(aHave: Number, aNeed: Number, aText: string): void;
        CheckSubType(aValue: string, aVer: number, aParams: string[]): void;
        Parse(aData: string, aObj?: object | null): object;
        protected CreateListItemObj(aClassName: string, aName?: string): object;
        protected CreateRootObj(aClassName: string, aName?: string, aParam?: string | null): object;
        protected GetPropObj(aParent: any, aPropName: string): object;
        protected _RootObj: object | null;
        protected SetRootObj(aObj: object): void;
        protected EnsurePropExists(aObj: any, aName: string): any;
        protected ParsingSetPropInner(aObj: object, aName: string, aValue: string): boolean;
        protected ParsingSetProp(aObj: any, aName: string, aValue: string): void;
        protected ParsingListGet(aParent: any, aPropName?: string): object;
        protected ParsingListAdd(aParent: object, aList: object, aItemType: string, aItemName: string, aItemParam: string): object;
        protected ParsingObjArray(aParent: object, aItemName?: string, aObjType?: string): void;
        protected ParseObjLine(aParent: object, aList?: object, aObjType?: string): void;
        protected ObjectComplete(aObj: object): void;
        protected GetLine(aLineNo: number): [string, number];
        protected ParsingObject(aObj: object): void;
        protected Throw(aTest: Boolean, aMsg: string, aClass?: string): void;
    }
}
declare namespace Atozed.Binding {
    class Field {
        readonly Name: string;
        readonly ParamText: string | null;
        ParseNamedParams(): any;
        protected SplitArgs(aText: string): string[];
        ParseArguments(aObj: Atozed.AZObject): Array<string | number>;
        constructor(aText: string);
    }
    class Creator {
        readonly Type: string;
        readonly CreateFunc: (aExpr: Expression) => Binding;
        constructor(aType: string, aCreateFunc: (aExpr: Expression) => Binding);
    }
    class Expression {
        static DefaultType: string;
        readonly Object: Atozed.AZObject;
        readonly Expression: string;
        readonly Type: Field;
        readonly Fields: Field[];
        Modifier: string;
        protected static Creators: Creator[];
        static AddCreator(aType: string, aCreateFunc: (aExpr: Expression) => Binding): void;
        static CreateBinding(aObj: Atozed.AZObject, aExpression: string): Binding;
        constructor(aObj: Atozed.AZObject, aExpr: string);
        Create(): Binding;
    }
    abstract class Binding {
        get Value(): any;
        set Value(aValue: any);
        protected abstract GetValue(): any;
        protected SetValue(aValue: any): void;
        IsUsable(): boolean;
        ModifierString: string | null;
        GetValueAsString(): string;
    }
    abstract class ObjBase extends Binding {
        readonly FieldName: string;
        protected readonly _FieldNameParts: string[];
        protected abstract GetTargetObj(): object;
        constructor(aFieldName: string);
        IsUsable(): boolean;
        protected FindTarget(aFieldReducer?: number): any;
        protected GetRawValue(): any;
        protected GetValue(): any;
        protected SetValue(aValue: any): void;
    }
    class Obj extends ObjBase {
        readonly _Object: any;
        protected GetTargetObj(): object;
        constructor(aFieldName: string, aObj: object);
    }
    class RowKey extends ObjBase {
        readonly Dataset: Atozed.Data.Dataset;
        protected readonly _Key: string | number;
        constructor(aDataset: Atozed.Data.Dataset, aKey: string | number, aFieldName: string);
        protected GetTargetObj(): object;
    }
    class RowIndex extends ObjBase {
        readonly Dataset: Atozed.Data.Dataset;
        protected readonly _Index: number;
        constructor(aDataset: Atozed.Data.Dataset, aIndex: number, aFieldName: string);
        protected GetTargetObj(): object;
    }
    class Cursor extends ObjBase {
        readonly Cursor: Atozed.Data.Cursor;
        protected GetTargetObj(): object;
        constructor(aCursor: Atozed.Data.Cursor, aFieldName: string);
    }
    class Function extends Obj {
        readonly _Args: Array<string | number>;
        constructor(aFieldName: string, aArgs: Array<any>, aCode: object);
        protected GetRawValue(): any;
    }
    class Rows extends Binding {
        protected _Dataset: Atozed.Data.Dataset;
        protected _DefaultField: string;
        Join: string;
        Sort: string;
        Order: Data.SortOrder;
        constructor(aDataset: Atozed.Data.Dataset, aDefaultField: string);
        protected GetValue(): any;
    }
    class Static extends Binding {
        protected _Value: any;
        constructor(aValue: any);
        protected GetValue(): any;
        protected SetValue(aValue: any): void;
    }
}
declare namespace Atozed.Binding.Modifiers {
    class Modifiers {
        protected static _Items: Modifier[];
        static Add(aModifier: Modifier): void;
        static Get(aModifierString: string, aValue: any): Modifier;
        static Remove(aModifier: Modifier): void;
        static Init(): void;
    }
    abstract class Modifier {
        abstract Match(aModifier: string, aType: string): boolean;
        abstract Get(aModifier: string, aValue: any): any;
        Set(aModifier: string, aValue: any): any;
    }
    class Not extends Modifier {
        Match(aModifier: string, aType: string): boolean;
        Get(aModifier: string, aValue: any): any;
        Set(aModifier: string, aValue: any): any;
    }
    class Switch extends Modifier {
        Match(aModifier: string, aType: string): boolean;
        Get(aModifier: string, aValue: boolean | number): any;
    }
    class Equal extends Modifier {
        Match(aModifier: string, aType: string): boolean;
        Get(aModifier: string, aValue: number): any;
    }
    class NotEqual extends Modifier {
        Match(aModifier: string, aType: string): boolean;
        Get(aModifier: string, aValue: number): any;
    }
}
declare namespace Atozed.Data {
    enum SortOrder {
        None = 0,
        Asc = 1,
        Desc = 2
    }
    class Cursor {
        Data: any;
        constructor(aData?: any);
    }
    class RowTracker {
        protected _Orig: any;
        get Orig(): any;
        Row: any;
        constructor(aData: any);
        Commit(): void;
        Rollback(): void;
        HasChanges(): boolean;
        GetChanges(): any;
    }
    class Dataset {
        protected _JsonArray: any[];
        get JsonArray(): any[];
        protected _Version: number;
        get Version(): number;
        protected _URL: string | null;
        protected _Trackers: RowTracker[];
        get Trackers(): RowTracker[];
        protected _DeletedRows: RowTracker[];
        get DeletedRows(): RowTracker[];
        readonly Cursor: Cursor;
        RowDefaults: any;
        KeyName: string;
        get Count(): number;
        protected _Subscribers: object[];
        Subscribe(aSubscriber: object): void;
        protected NotifySubscribers(aEventName: string, ...aArgs: any[]): void;
        HasChanges(): boolean;
        GetChanges(): any[] | null;
        get Row(): any;
        set Row(aData: any);
        get Key(): string | number;
        set Key(aValue: string | number);
        get Index(): number;
        set Index(aIdx: number);
        Commit(): void;
        Rollback(): void;
        Clear(): void;
        LoadJSON(aText: string): void;
        Load(aData: any[], aAppend?: boolean): void;
        MoveFirst(): void;
        MovePrior(): boolean;
        MoveNext(): boolean;
        MoveLast(): void;
        get BOF(): boolean;
        get EOF(): boolean;
        GetKeyValue(aData: any): string | number;
        protected CheckURL(): void;
        protected GetURL(aID: string | number): string;
        protected CreateHTTP(): Atozed.HTTP;
        RowByKey(aValue: string | number): any;
        [Symbol.iterator](): IterableIterator<any>;
        RowByIndex(aIdx: number): any;
        KeyByIndex(aIdx: number): any;
        IndexOfRow(aData?: any): number;
        Sort(aField: string, aOrder?: SortOrder): void;
        AddRow(aData?: any, aSelectIt?: boolean): void;
        protected AddRowInternal(aData: any): void;
        protected GetNewClientKey(): number | string;
        DeleteRow(aData?: any): void;
        static CloneRow(aData: any): any;
        GetTrackerByIndex(aIdx: number): RowTracker;
        GetTrackerByRow(aData?: any): RowTracker;
    }
}
declare namespace Atozed {
    class Debug {
        static Sleep(aMilliseconds: number): void;
    }
}
declare namespace Atozed {
    class HTTP {
        ContentType: string | null;
        CacheBuster: boolean;
        ThrowOnError: boolean;
        WithCredentials: boolean;
        RequestNonCache: boolean;
        Request: XMLHttpRequest;
        protected Execute(aVerb: string, aURL: string, aData?: string | null): string;
        Patch(aURL: string, aData: string): string;
        Post(aURL: string, aData: string): string;
        Put(aURL: string, aData: string): string;
        Get(aURL: string): string;
        static Get(aURL: string, aThrowOnError?: boolean, aWithCredentials?: boolean): string;
        Delete(aURL: string): string;
        static Delete(aURL: string, aThrowOnError?: boolean): string;
    }
}
declare namespace Atozed {
    export function ObservableArray<T>(aOnChangeFunc: () => void, aData?: T[]): T[];
    type ObservableArrayOnChangedFunc<T> = (aSender: ObservableArrayOld<T>) => void;
    export class ObservableArrayOld<T> {
        protected readonly _InternalArray: Array<T>;
        protected _IsLocked: boolean;
        Lock(): void;
        protected CheckLock(): void;
        Contains(aValue: T): boolean;
        IndexOf(aSearch: T, aFromIndex?: number): number;
        Includes(aSearch: T, aFromIndex?: number): boolean;
        protected DoChanged(): void;
        OnChanged: ObservableArrayOnChangedFunc<T>;
        [Symbol.iterator](): IterableIterator<T>;
        Get(aIndex: number): T;
        Set(aIndex: number, aValue: T): void;
        SetArray(aArray: Array<T>): void;
        GetArray(): Array<T>;
        Clear(): void;
        Join(separator?: string): string;
        Slice(start?: number, end?: number): T[];
        Map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
        get Length(): number;
        set Length(aValue: number);
        Push(...items: T[]): number;
        Pop(): T | undefined;
        Shift(): T | undefined;
        Unshift(...items: T[]): number;
    }
    export {};
}
declare namespace Atozed {
    class AZObject {
        PropertyChanged(aProp: Atozed.Props.Property<any>, aServer?: boolean): void;
        get ClassName(): string;
        InitPropNames(): void;
        protected CopyTo(aDest: AZObject): void;
        DoUpdateFromData(): void;
        Load(aSrc: any): void;
    }
}
declare namespace Atozed {
    class ObjUtil {
        static Root(): any;
        static GetEnumStrings(aEnum: any): Array<string>;
        static Compare(a: any, b: any): number;
        static GetJsClass(aInst: object): any;
        static EnumFromString(aEnum: any, aVal: string, aCaseMatters?: boolean): number;
        static SetProperty(aObj: any, aName: string, aValue: string): void;
        static InheritsFrom(aClass: any, aSuper: any): boolean;
        static GetPropNames(aClass: any, aIncludeParentProps: boolean): string[];
        static InheritsFromOrIs(aClassDef: any, aSuperDef: any): boolean;
        static CopyObj(aSrc: any, aDest: any): void;
        static FindClass(aClassName: string, aNS?: any, aMustExist?: boolean): any;
        static FindProp(aObj: any, aPropName: string): any;
        static GetFunctionNames(aObj: any, aPrefix?: string | null): Array<string>;
    }
}
declare namespace Atozed.Props {
    class Event {
        protected readonly _Obj: Object;
        constructor(aObj: Object);
        protected readonly _AttachedFuncs: Map<string, Function>;
        Attach(aFunc: Function, aID?: string): string;
        RemoveAttachment(aID: string): void;
        ClearAttachments(): void;
        Call(...aArgs: any[]): any;
    }
    class Params extends Array<Atozed.Props.Property<any>> {
    }
    abstract class Property<T> {
        private _Name;
        get Name(): string;
        readonly Object: AZObject | null;
        protected _BindingExpression: string;
        get BindingExpression(): string;
        set BindingExpression(aValue: string);
        SetStreamValue(aValue: string): void;
        protected _Binding: Binding.Binding;
        get Binding(): Binding.Binding;
        set Binding(aValue: Binding.Binding);
        protected _Locked: boolean;
        get Locked(): boolean;
        Lock(): void;
        Unlock(): void;
        readonly WhenChanged: Event;
        protected ValueChanged(aServer?: boolean): void;
        DoUpdateFromData(): void;
        protected abstract UpdateFromData(): void;
        DoUpdateToData(): void;
        protected abstract UpdateToData(): void;
        protected IsDifferent(aValue: T): boolean;
        get AsString(): string;
        set AsString(aValue: string);
        protected abstract SetValueFromString(aValue: string): void;
        protected _Value: T;
        readonly WhenGetValue: Event;
        protected GetValue(): T;
        get Value(): T;
        readonly WhenSetValue: Event;
        protected SetInternalValue(aValue: T): void;
        set Value(aValue: T);
        protected SetValue(aValue: T, aUpdateBinding?: boolean): void;
        HasDefaultValue(): boolean;
        ResetToDefaultValue(): void;
        protected ValidateValue(aValue: T): T;
        toString(): string;
        SetName(aName: string): void;
        protected _DefaultValue: T;
        get DefaultValue(): T;
        get IsDefaultValue(): boolean;
        constructor(aObj: AZObject, aDefaultValue: T);
    }
    class String extends Property<string> {
        constructor(aObj: AZObject, aDefault?: string);
        get HasText(): boolean;
        protected SetValueFromString(aValue: string): void;
        protected UpdateFromData(): void;
        protected UpdateToData(): void;
    }
    abstract class PropArray<T> extends Property<Array<T>> {
        HasDefaultValue(): boolean;
        get HasText(): boolean;
        constructor(aObj: AZObject, aDefault?: Array<T>);
        toString(): string;
        protected abstract SetValueFromString(aValue: string): void;
        Clear(): void;
        protected SetInternalValue(aValue: Array<T>): void;
        protected IsDifferent(aValue: Array<T>): boolean;
        protected GetFingerprint(aValue: Array<T>): number;
        protected UpdateFromData(): void;
        protected UpdateToData(): void;
    }
    class StringArray extends PropArray<string> {
        protected SetValueFromString(aValue: string): void;
        protected ToStringArray(aValue: Array<any>): Array<string>;
        protected IsDifferent(aValue: Array<string>): boolean;
        protected SetInternalValue(aValue: Array<string>): void;
    }
    class NumberArray extends PropArray<number> {
        protected SetValueFromString(aValue: string): void;
    }
    class Boolean extends Property<boolean> {
        constructor(aObj: AZObject, aDefault?: boolean);
        protected UpdateFromData(): void;
        protected UpdateToData(): void;
        get IsTrue(): boolean;
        get IsFalse(): boolean;
        protected SetValueFromString(aValue: string): void;
    }
    class Float extends Property<number> {
        constructor(aObj: AZObject, aDefault?: number);
        protected UpdateFromData(): void;
        protected UpdateToData(): void;
        protected SetValueFromString(aValue: string): void;
    }
    class Int extends Property<number> {
        readonly Min: number | null;
        readonly Max: number | null;
        constructor(aObj: AZObject, aDefault?: number, aMin?: number | null, aMax?: number | null);
        protected UpdateFromData(): void;
        protected UpdateToData(): void;
        protected ValidateValue(aValue: number): any;
        protected SetValueFromString(aValue: string): void;
    }
    class Enum extends Property<number> {
        protected _Tags: Array<string> | null;
        Enum: object | null;
        constructor(aObj: AZObject, aEnum: object, aDefault?: number, aTags?: Array<string> | null);
        get Values(): Array<string>;
        protected UpdateFromData(): void;
        protected UpdateToData(): void;
        protected SetValueFromString(aValue: string): void;
        toString(): string;
        get Tag(): string;
        protected ValidateValue(aValue: number): any;
    }
    class DateTime extends Property<Date> {
        constructor(aObj: AZObject, aDefault?: Date | null);
        protected GetValue(): Date;
        protected SetInternalValue(aValue: Date): void;
        protected IsDifferent(aValue: Date): boolean;
        protected ValidateValue(aValue: Date): Date;
        protected UpdateFromData(): void;
        protected UpdateToData(): void;
        toString(): string;
        protected SetValueFromString(aValue: string): void;
    }
}
declare namespace Atozed {
    class Stringer {
        static ScanTill(aSearch: string, aStopChars: string, aStart: number): number;
        static Same(aVal1: string, aVal2: string): boolean;
        static FirstLine(aText: string): string;
        static RemoveBrackets(aValue: string, aBrackets: string): string;
        static Split(aValue: string, aSplit: string, aBrackets: string): Array<string>;
        static TwoSplit(aValue: string, aDelim: string): string[];
        static TwoSplitFromEnd(aValue: string, aDelim: string): string[];
        static HalveIdx(aValue: string, aIdx: number, aDelimSize?: number): string[];
        static SplitLines(aValue: string): Array<string>;
        static HasText(aValue: string): boolean;
        static EOLsToSpaces(aValue: string): string;
        static TrueOrFalse(aValue: string): boolean;
    }
}
declare namespace IntraWeb.Controls {
}
declare namespace IntraWeb {
    type EventCodeHideFunc = (aSender: Code) => any;
    class ObjectWithDynamicProps {
    }
    abstract class ObjectWithProps extends Atozed.AZObject {
        GetParams(): Atozed.Props.Params;
        SetParam(aValue: string): void;
        SetStreamValue(aProp: Atozed.Props.Property<any>, aValue: string): void;
        DoUpdateFromData(): void;
        CopyTo(aDest: ObjectWithProps): void;
        protected _PUID: number;
        get PUID(): number;
        set PUID(aValue: number);
        protected _PropChangesDomInitted: boolean;
        protected _Page: Page | null;
        protected GetPage(): Page | null;
        get Page(): Page | null;
        set Page(aValue: Page);
        protected SetPage(aPage: Page): void;
        protected readonly _PropChangesDom: Atozed.Props.Property<any>[];
        protected readonly _PropChangesServer: Atozed.Props.Property<any>[];
        PropertyChanged(aProp: Atozed.Props.Property<any>, aServer?: boolean): void;
        DomChanged(...aProps: Array<Atozed.Props.Property<any>>): boolean;
        ClearServerChanges(): void;
        GetServerUpdateObj(): any;
        AfterParse(): void;
        static ClassNamesForNS(aNS: any, aBaseClass?: any, aIncludeBaseClass?: boolean, aTopClass?: any): Array<string>;
        static InstancesForNS(aNS: any, aBaseClass?: any, aIncludeBaseClass?: boolean, aTopClass?: any): Array<IntraWeb.ObjectWithProps>;
    }
    class NamedObject extends ObjectWithProps {
        readonly Name: Props.ObjectName;
    }
    class NamedArrayItem extends NamedObject {
        readonly _Array: NamedObjectArray<NamedArrayItem> | null;
        readonly _NameRequired: boolean;
        _DesignText: Atozed.Props.Property<any> | null;
        constructor(aParentArray: NamedObjectArray<any>, aNameRequired?: boolean);
        BeforeParentRenders(): void;
        protected RuntimeDelayLoad(): void;
        AfterParse(): void;
    }
    class NamedTextArrayItem extends NamedArrayItem {
        Text: Atozed.Props.StringArray;
        GetParams(): Atozed.Props.Params;
        protected RuntimeDelayLoad(): void;
    }
    abstract class NamedObjectArray<T extends NamedArrayItem> extends Atozed.ObservableArrayOld<T> {
        readonly Parent: Object | null;
        constructor(aParent: Object);
        ByName(aName: string): T;
        CreateItem(aClassName: string): NamedArrayItem;
        private _Page;
        get Page(): Page;
    }
    abstract class PropObject extends ObjectWithProps {
    }
    class Background extends PropObject {
        readonly Color: Props.Color;
    }
    class Border extends PropObject {
        readonly Color: Props.Color;
        readonly Size: Props.Size;
        readonly Style: Props.BorderStyle;
    }
    class Font extends PropObject {
        readonly Bold: Atozed.Props.Boolean;
        readonly Size: Props.Size;
        readonly Weight: Atozed.Props.String;
    }
    class TextDecoration extends PropObject {
        readonly Decoration: Atozed.Props.String;
    }
    class ActualSize {
        TotalWidth: number;
        TotalHeight: number;
    }
}
declare namespace IntraWeb {
    enum Cursor {
        Auto = 0,
        Default = 1,
        None = 2,
        Pointer = 3,
        ContextMenu = 4,
        Help = 5,
        Text = 6,
        VerticalText = 7,
        Move = 8,
        Grab = 9,
        Grabbing = 10,
        NoDrop = 11,
        NotAllowed = 12,
        EwResize = 13,
        NsResize = 14,
        NeswResize = 15,
        NwseResize = 16,
        ColResize = 17,
        RowResize = 18,
        AllScroll = 19,
        ZoomIn = 20,
        ZoomOut = 21,
        Wait = 22,
        Progress = 23
    }
    class CursorProp extends Atozed.Props.Enum {
        constructor(aObj: Atozed.AZObject);
    }
    abstract class Renderer extends NamedObject {
        ReflectMode: boolean;
        readonly Class: Atozed.Props.String;
        readonly ClientEvents: any;
        readonly Cursor: CursorProp;
        readonly Height: Props.Size;
        GetDefaultHeight(): string;
        readonly ServerEvents: Atozed.Props.StringArray;
        readonly Width: Props.Size;
        GetDefaultWidth(): string;
        readonly Z: Atozed.Props.Int;
        readonly Border: Border;
        readonly Font: Font;
        readonly Margin: Props.SizeQuad;
        readonly Padding: Props.SizeQuad;
        readonly Style: Atozed.Props.String;
        readonly StyleClass: Props.Style;
        readonly TextDecoration: TextDecoration;
        readonly Collapsed: Atozed.Props.Boolean;
        readonly Visible: Atozed.Props.Boolean;
        Show(): void;
        Hide(): void;
        Collapse(): void;
        protected GetDefaultVisibility(): string;
        protected GetIsCell(): boolean;
        get IsCell(): boolean;
        protected GetIsControl(): boolean;
        get IsControl(): boolean;
        protected GetIsComponent(): boolean;
        get IsComponent(): boolean;
        protected GetIsLayout(): boolean;
        get IsLayout(): boolean;
        protected GetIsPage(): boolean;
        get IsPage(): boolean;
        IsParsing: boolean;
        DefaultBindingObj: any;
        protected SetAttribute(aName: string, aProp: Atozed.Props.Property<any>, aElem?: HTMLElement): void;
        AfterParse(): void;
        GetPropNames(): Array<string>;
        GetEventNames(): Array<string>;
        protected SetPage(aValue: Page): void;
        static SizeToDom(aSize: string, aDefaultSuffix?: string): string | null;
        readonly Background: Background;
        readonly Color: Props.Color;
        protected AfterDomComplete(): void;
        QueueFunc(aFunc: Function, aWait?: number): void;
        PropertyChanged(aProp: Atozed.Props.Property<any>, aServer?: boolean): void;
        protected AddInternalEvent(aElem: HTMLElement | Window, aHtmlEventName: string, aLocalEvent: Function): void;
        protected _IsDirty: boolean;
        get IsDirty(): boolean;
        Invalidate(): void;
        protected NeedsRendered(): boolean;
        protected _Rendering: boolean;
        DoRender(): void;
        protected AfterRender(): void;
        DoAfterRender(): void;
        protected _DomClasses: string[];
        protected AddDomClass(...aClasses: any[]): void;
        protected Render(): void;
        get DomIsComplete(): boolean;
        DoAfterDomComplete(): void;
        UpdateFromDOM(): void;
        protected _Parent: Renderer | null;
        get Parent(): Renderer;
        set Parent(aParent: Renderer);
        protected SetParent(aParent: Renderer): void;
        get ActualSize(): ActualSize;
        ScrollIntoView(): void;
        private _Root;
        get Root(): HTMLElement;
        protected SetRoot(aElement: HTMLElement): void;
        get InitDone(): boolean;
        protected CheckInitDone(): void;
        DoInit(): void;
        protected _DefaultDisplay: string;
        protected InitDOM(): void;
        protected abstract CreateRoot(): HTMLElement;
        DoInitDOM(): void;
        protected AfterInitDOM(): void;
        DoAfterInitDOM(): void;
    }
}
declare namespace IntraWeb {
    abstract class Control extends Renderer {
        readonly Title: Atozed.Props.String;
        protected GetIsControl(): boolean;
        static GetControlList(aLayoutsOnly?: boolean, aNS?: typeof Controls): string[];
        protected DisableFocus(aElement: HTMLElement): void;
        protected DisableClick(aElement: HTMLElement): void;
        static LoadAllLoadables(): void;
        get IwmlClassName(): string;
        readonly Enabled: Atozed.Props.Boolean;
        readonly Tag: Atozed.Props.String;
        get Cell(): Cell;
        CanAddTo(aLayout: Layout): boolean;
        DesignInit(): void;
        protected _DesignSelected: boolean;
        DesignSelect(aSelect: boolean): void;
        static DesignGetIcon(): string;
        Removing(): void;
        static NewByName(aClassName: string, aReflectMode?: boolean, aAltPath?: string): Control;
        Clone(): Control;
        static GetLoadedLoadableNamespaces(): Array<string>;
        static LoadLibraryHook: (aName: string) => void;
        static EnsureLoadableIsLoaded(aName: string, aInitRuntime?: boolean, aAltPath?: string): void;
        static RuntimeInitNamespace(aPrefix: string): void;
        static InitNamespace(aPrefix: string, aInitRuntime: boolean): void;
        protected _LastEnabledState: boolean;
        protected GetEnabledState(aBoundProp?: Atozed.Props.Property<any>): boolean;
        protected AfterInitDOM(): void;
        protected InitEvents(): void;
        protected NeedsRendered(): boolean;
        protected SetHint(aElem: HTMLElement, aHint: string): void;
        protected SetPage(aPage: Page): void;
        protected SetParent(aVal: Renderer): void;
        Focus(): void;
        protected Render(): void;
    }
    abstract class Component extends Control {
        protected CreateRoot(): HTMLElement;
        protected GetIsComponent(): boolean;
        SetParent(aVal: Renderer): void;
        protected GetEnabledState(aBoundProp?: Atozed.Props.Property<any>): boolean;
    }
}
declare namespace IntraWeb {
    enum CtrlInsPos {
        Child = 0,
        Before = 1,
        After = 2
    }
    class Cells {
        readonly InternalArray: Cell[];
        protected _MaxItems: number;
        readonly Layout: Layout;
        constructor(aLayout: Layout);
        get ContainerDOM(): HTMLElement;
        get Length(): number;
        Get(aIdx: number, aCheck?: boolean): Cell;
        CellsOfControlType(aClass: any, aMaxCount?: number): Array<Cell>;
        [Symbol.iterator](): IterableIterator<Cell>;
        ToCell(aSrc: Cell | Control | number): Cell;
        ToIndex(aSrc: Cell | Control): number;
        Add(aSrc: Cell | Control, aPos?: number | Control, aAddBefore?: boolean): Cell;
        Remove(aVal: Cell | Control | number): void;
        Clear(): void;
        DomClear(): void;
        DomAdd(aCell: Cell, aPos?: number, aAddBefore?: boolean): void;
        DomRemove(aCell: Cell): void;
    }
    enum LayoutOrientationEnum {
        Ordered = 0,
        Horizontal = 1,
        Vertical = 2,
        Unordered = 3
    }
    enum Scrollbar {
        Default = 0,
        None = 1,
        Always = 2,
        Auto = 3
    }
    abstract class LayoutBase<TCell extends Cell> extends Control {
        readonly DataSource: Props.DatasetSource;
        Removing(): void;
        CreateCell(aCtrl: Control): Cell;
        CellOf(aControl: Control): TCell;
        Clear(): void;
        Add(aControl: Control): TCell;
        protected GetIsLayout(): boolean;
        static DesignGetIcon(): string;
        ControlNameChanged(aCtrl: IntraWeb.Control, aOldName: string, aNewName: string): void;
        [Symbol.iterator](): IterableIterator<TCell>;
        HasDescendant(aCtrl: IntraWeb.Control): boolean;
        protected _ContainerDOM: HTMLElement | null;
        get ContainerDOM(): HTMLElement | null;
        readonly Cells: Cells;
        readonly CellDefaults: object;
        Components: Component[];
        readonly Enabled: Atozed.Props.Boolean;
        protected _ScrollOverflowDefault: string;
        readonly ScrollbarHorizontal: Atozed.Props.Enum;
        readonly ScrollbarVertical: Atozed.Props.Enum;
        protected GetLayoutOrientation(): LayoutOrientationEnum;
        get LayoutOrientation(): LayoutOrientationEnum;
        protected _DesignDropCtrl: Control;
        DesignBeginDrop(aDropControl: Control, aTargetCtrl?: Control, aTargetData?: any, aAddBefore?: boolean): void;
        DesignCommitDrop(aX: number, aY: number): boolean;
        DesignCancelDrop(): void;
        CloneCells(aDest: Layout): void;
        UpdateFromDOM(): void;
        protected RefreshCells(): void;
        RepeaterCells: Cells;
        protected InitCellListDOM(): void;
        RefreshFromDataset(): void;
        AfterParse(): void;
        protected AfterInitDOM(): void;
        GetObjsWithPUIDs(): Array<IntraWeb.ObjectWithProps>;
        protected GetPuidObjectsInternal(aList: Array<IntraWeb.ObjectWithProps>): void;
        protected _DatasetVersion: number;
        protected Render(): void;
        protected NeedsRendered(): boolean;
        DoInitDOM(): void;
        DoAfterInitDOM(): void;
        DoRender(): void;
        DoAfterRender(): void;
        DoAfterDomComplete(): void;
        CheckCanAddControl(aCtrl: Control): void;
        CanAddControl(aCtrl: Control): boolean;
        AddComponent(aComp: Component): void;
    }
    abstract class Layout extends LayoutBase<Cell> {
    }
    abstract class LayoutDivBase<TCell extends Cell> extends LayoutBase<TCell> {
        protected _RootDiv: HTMLDivElement;
        protected GetLayoutOrientation(): LayoutOrientationEnum;
        protected CreateRoot(): HTMLElement;
    }
    abstract class LayoutSpanBase<TCell extends Cell> extends LayoutBase<TCell> {
        protected _RootSpan: HTMLSpanElement;
        protected GetLayoutOrientation(): LayoutOrientationEnum;
        protected CreateRoot(): HTMLElement;
    }
}
declare namespace IntraWeb {
    class Bindings {
        static Init(): void;
    }
    class BindingDefaultObj extends Atozed.Binding.ObjBase {
        protected readonly _Parent: Renderer;
        constructor(aParent: Renderer, aFieldName: string);
        protected GetTargetObj(): object;
    }
}
declare namespace IntraWeb {
    class Code {
        readonly Page: Page | null;
        constructor(aPage: Page | null);
        EventSender: IntraWeb.Control;
        DOM: any;
        Show(): void;
        Hide(): void;
        protected PageHasChanges(): boolean;
        protected ConfirmChanges(aMsg?: string, aCallServer?: boolean): boolean;
        protected Confirm(aMsg?: string, aCallServer?: boolean): boolean;
        Refresh(): void;
        CallServerEvent(): void;
    }
}
declare namespace IntraWeb {
    abstract class Cell extends Renderer {
        readonly Control: Control;
        get Layout(): Layout;
        protected GetIsCell(): boolean;
        protected GetIsCellNone(): boolean;
        get IsCellNone(): boolean;
        constructor(aCtrl: Control);
        Added(): void;
        Removing(): void;
        CollapseFont(): void;
        DoInitDOM(): void;
        DoAfterDomComplete(): void;
        DoAfterRender(): void;
        Clone(aCtrl: Control): Cell;
        CloneWithControl(): Cell;
        protected SetParent(aVal: Renderer): void;
        DoRender(): void;
        UpdateFromDOM(): void;
    }
    class CellNone extends Cell {
        protected CreateRoot(): HTMLElement;
        CollapseFont(): void;
        protected GetIsCellNone(): boolean;
        protected Render(): void;
    }
    abstract class CellContainer extends Cell {
        readonly HAlign: Props.HAlignProp;
        readonly VAlign: Props.VAlignProp;
        protected _ControlContainer: HTMLElement;
        protected AfterInitDOM(): void;
        protected AddControlDOM(): void;
        protected static _DebugColor: number;
        protected Render(): void;
    }
    abstract class CellDiv extends CellContainer {
        protected _Div: HTMLDivElement;
        protected CreateRoot(): HTMLElement;
    }
    abstract class CellSpan extends CellContainer {
        protected _DomSpan: HTMLSpanElement;
        protected CreateRoot(): HTMLElement;
    }
}
declare namespace IntraWeb {
    class Debugger {
        static Active: boolean;
        static Trigger: boolean;
        static RendererHeader(aVal: Renderer): string;
        Log(aVal: any): void;
    }
}
declare namespace IntraWeb {
    abstract class Event extends Atozed.Props.Event {
        protected readonly _Control: Control;
        protected _CodeEventName: string | null;
        protected abstract GetPrefixName(): string;
        protected AfterAttachedEvents(): void;
        protected _CallFunc: Function;
        constructor(aControl: Control);
        protected CallInner(aArgs: Array<any>): boolean | null | undefined;
        Init(aName: string): void;
        Call(...aArgs: Array<any>): any;
        static CreateHook(aControl: Control, aEventName: string): Function;
    }
    class PageEvent extends Event {
        protected GetPrefixName(): string;
    }
    class ControlEvent extends Event {
        protected GetPrefixName(): string;
    }
    class UpdateEvent extends ControlEvent {
        protected AfterAttachedEvents(): void;
        Call(...aArgs: any[]): any;
        protected CallInner(aArgs: Array<any>): boolean;
    }
    class DomEvent extends UpdateEvent {
        protected _DomEventName: string;
        protected _ChainedFunc: Function;
        constructor(aControl: Control, aDomEventName: string, aChainedFunc?: Function);
        Init(aName: string): void;
    }
}
declare namespace IntraWeb {
    class IWML extends Atozed.ACORN {
        protected _AutoLoadCode: boolean;
        get AutoLoadCode(): boolean;
        set AutoLoadCode(aValue: boolean);
        ReflectMode: boolean;
        UrlPath: string | null;
        protected _URL: string | null;
        get URL(): string | null;
        _Page: Page | null;
        protected SetRootObj(aObj: object): void;
        protected EnsurePropExists(aObj: object, aName: string): any;
        protected ObjectComplete(aObj: object): void;
        ParseURL(aURL: string, aThrowOnGetError?: boolean, aObj?: object | null): object | null;
        Parse(aData: string, aObj?: object): object;
        GetURL(aURL: string, aThrowOnError?: boolean): string;
        CheckSubType(aValue: string, aVer: number, aParams: string[]): void;
        protected ParsingSetPropInner(aObj: object, aName: string, aValue: string): boolean;
        protected Throw(aTest: boolean, aMsg: string): void;
        protected SetNameAndPUID(aObj: NamedObject, aValue: string): void;
        protected CreateRootObj(aClassName: string, aName?: string | null, aParam?: string | null): object;
        protected ParsingListGet(aParent: object, aPropName?: string): object;
        protected ParsingListAddControl(aParent: object, aItemType: string, aItemName: string, aItemParam: string): Control | null;
        protected ParsingListArrayItem(aArray: IntraWeb.NamedObjectArray<NamedArrayItem>, aItemType: string, aItemName: string, aItemParam: string): object;
        protected AssignObjName(aNameAndPUID: string, aObj: NamedObject): void;
        protected ParsingListAdd(aParent: object, aList: object, aItemType: string, aItemName: string, aItemParam: string): object;
        protected CreateListItemObj(aClassName: string, aName?: string | null): object | null;
    }
}
declare namespace IntraWeb {
    type TagProcessStringFunc = (aValue: string) => string;
    export class Tag {
        readonly Parent?: ObjectWithProps;
        Name: string;
        Params: string | null;
        constructor(aParent?: ObjectWithProps);
        get Data(): string;
        readonly Parts: (string | Tag)[];
        Process(aDefaultHandlerFunc?: TagHandlerProcessFunc): string;
        Process_All(aStringFunc?: TagProcessStringFunc | null, aEncodeHTML?: boolean): string;
        Process_HtmlWrap(aHtmlTag: string): string;
    }
    type TagHandlerMatchFunc = (aName: string) => boolean;
    export type TagHandlerProcessFunc = (aTag: Tag) => string;
    export class TagHandler {
        Tag: string;
        IsInline: boolean;
        AllowNestedTags: boolean;
        MatchFunc: TagHandlerMatchFunc;
        ProcessFunc: TagHandlerProcessFunc;
    }
    export class Markdown {
        DefaultHandlerFunc: TagHandlerProcessFunc | null;
        protected readonly _Parent?: ObjectWithProps;
        protected _Input: string;
        protected _Idx: number;
        protected _IdxPrev: number;
        protected _Char: string;
        protected _CharNext: string;
        Encode(aText: string): string;
        constructor(aParent?: ObjectWithProps);
        protected GetNext(aStopChars: string, aThrowIfNoMatch?: boolean): string | null;
        protected GetRest(): string;
        protected MoveTo(aIdx: number): string;
        protected SkipNext(aChar: string): boolean;
        Process(aMarkdown: string): string;
        static AddHandler(aName: string, aProcessFunc: TagHandlerProcessFunc, aIsWildcard?: boolean): TagHandler;
        static GetHandler(aName: string): TagHandler | null;
        static readonly Handlers: TagHandler[];
        protected static _HandlersInitted: boolean;
        static InitTagHandlers(): void;
    }
    export {};
}
declare namespace IntraWeb {
    class New {
        protected static DivDisplay(aParent?: HTMLElement, aDisplay?: string): HTMLDivElement;
        static Div(aParent?: HTMLElement, aHTML?: string): HTMLDivElement;
        static DivFlex(aParent?: HTMLElement): HTMLDivElement;
        static Span(aParent?: HTMLElement, aHTML?: string): HTMLSpanElement;
        static Anchor(aParent?: HTMLElement, aText?: string, aHREF?: string): HTMLAnchorElement;
        static BR(aParent?: HTMLElement): HTMLBRElement;
        static Canvas(aParent?: HTMLElement): HTMLCanvasElement;
        static DataList(aParent?: HTMLElement): HTMLDataListElement;
        static Definition(aParent?: HTMLElement): HTMLElement;
        static DescrList(aParent?: HTMLElement): HTMLDListElement;
        static DescrTitle(aParent?: HTMLElement): HTMLElement;
        static DescrData(aParent?: HTMLElement): HTMLElement;
        static Details(aParent?: HTMLElement): HTMLDetailsElement;
        static Dialog(aParent?: HTMLElement): HTMLDialogElement;
        static Fieldset(aParent?: HTMLElement): HTMLFieldSetElement;
        static HR(aParent?: HTMLElement): HTMLHRElement;
        static IFrame(aParent?: HTMLElement): HTMLIFrameElement;
        static Image(aParent?: HTMLElement): HTMLImageElement;
        static Legend(aParent?: HTMLElement): HTMLLegendElement;
        static ListItem(aParent?: HTMLElement, aHTML?: string): HTMLLIElement;
        static OptGroup(aParent?: HTMLElement): HTMLOptGroupElement;
        static OrderedList(aParent?: HTMLElement): HTMLOListElement;
        static Progress(aParent?: HTMLElement): HTMLProgressElement;
        static Select(aParent?: HTMLElement): HTMLSelectElement;
        static Style(aParent?: HTMLElement): HTMLStyleElement;
        static Summary(aParent?: HTMLElement): HTMLElement;
        static SVG(aParent?: HTMLElement): SVGSVGElement;
        static SvgPolygon(aParent?: HTMLElement): SVGPolygonElement;
        static Table(aParent?: HTMLElement): HTMLTableElement;
        static TableBody(aParent?: HTMLElement): HTMLTableSectionElement;
        static TableHeadCell(aParent?: HTMLElement): HTMLTableCellElement;
        static TableDataCell(aParent?: HTMLElement): HTMLTableCellElement;
        static TableHead(aParent?: HTMLElement): HTMLTableSectionElement;
        static TableRow(aParent?: HTMLElement): HTMLElement;
        static TextArea(aParent?: HTMLElement): HTMLTextAreaElement;
        static UnorderedList(aParent?: HTMLElement): HTMLUListElement;
        static Paragraph(aParent?: HTMLElement): HTMLParagraphElement;
        static Pre(aParent?: HTMLElement): HTMLPreElement;
        private static Input;
        static InputCheckBox(aParent?: HTMLElement): HTMLInputElement;
        static InputRadio(aParent?: HTMLElement): HTMLInputElement;
        static InputText(aParent?: HTMLElement): HTMLInputElement;
        static Button(aParent?: HTMLElement | null, aText?: string): HTMLButtonElement;
        static Heading(aParent?: HTMLElement | null, aLevel?: number): HTMLHeadingElement;
        static Label(aParent?: HTMLElement, aFor?: HTMLElement): HTMLLabelElement;
        static Option(aParent?: HTMLElement, aText?: string): HTMLOptionElement;
        protected static _UniqueNameCounter: number;
        static UniqueName(aPrefix?: string): string;
    }
}
declare namespace IntraWeb {
    class JqEvent extends UpdateEvent {
        protected _EventName: string | null;
        constructor(aControl: Control, aEventName: string);
        Init(aName: string): void;
    }
    class JqHelper {
        readonly Control: IntraWeb.Control;
        protected readonly _FuncName: string;
        protected readonly _WrapInFunc: boolean;
        constructor(aControl: IntraWeb.Control, aFuncName: string, aWrapInFunc?: boolean);
        get JQ(): any;
        Func(...aArgs: any[]): any;
        GetOption(aName: string): any;
        SetOption(aName: string, aValue: any): void;
        Render(aParams: any): void;
    }
}
declare namespace IntraWeb {
    class PageLoader<T extends Code> {
        readonly ID: string;
        Description: string;
        constructor(aID: string);
        GetIwmlURL(): string;
        GetIsolatedURL(): string;
        protected _CodeLoaded: boolean;
        LoadCode(): Promise<void>;
        New(): T;
        Show(): T;
    }
    class PageMgr {
        _ActivePage: Page;
        get ActivePage(): Page;
        protected _Pages: Page[];
        get Pages(): Page[];
        Remove(aPage: Page): void;
        Show(aPage: Page): void;
        Hide(aPage: Page): void;
    }
    class App {
        static readonly PageMgr: PageMgr;
        static UserPages: any;
    }
}
declare namespace IntraWeb.Props {
    class ControlRef extends Atozed.Props.String {
    }
    class ObjectName extends Atozed.Props.String {
        protected _ParentIsControl: boolean;
        constructor(aObj: Atozed.AZObject, aDefaultValue?: string);
        protected ValidateValue(aValue: string): string;
        protected SetValue(aValue: string, aUpdateBinding?: boolean): void;
    }
    class DatasetSource extends Atozed.Props.String {
        protected _Inst: Controls.ArrayItems.Page.Data;
        get Reference(): Controls.ArrayItems.Page.Data;
    }
    class Style extends Atozed.Props.String {
    }
    class SizeQuad extends Atozed.Props.String {
    }
    class BorderStyle extends Atozed.Props.String {
    }
    abstract class Markdown extends Atozed.Props.String {
        protected _Output: string;
        DefaultMarkdownFunc: IntraWeb.TagHandlerProcessFunc;
        DoUpdateFromData(): void;
        Output(): string;
        protected Encode(aText: string): string;
    }
    class Text extends Markdown {
        protected Encode(aText: string): string;
    }
    class URL extends Markdown {
        Output(): string;
    }
    class HTML extends Atozed.Props.StringArray {
        Fragment: boolean;
        constructor(aObj: Atozed.AZObject, aDefault?: Array<string>, aFragment?: boolean);
        GetDocument(): string;
    }
    class SortOrderProp extends Atozed.Props.Enum {
        constructor(aObj: Atozed.AZObject, aDefault?: number);
    }
    enum HAlign {
        Default = 0,
        Left = 1,
        Center = 2,
        Right = 3
    }
    class HAlignProp extends Atozed.Props.Enum {
        constructor(aObj: Atozed.AZObject, aDefault?: number);
    }
    enum VAlign {
        Default = 0,
        Top = 1,
        Middle = 2,
        Bottom = 3
    }
    class VAlignProp extends Atozed.Props.Enum {
        constructor(aObj: Atozed.AZObject, aDefault?: number);
    }
    enum Orientation {
        Vertical = 0,
        Horizontal = 1
    }
    class OrientationProp extends Atozed.Props.Enum {
        constructor(aObj: Atozed.AZObject, aDefault?: number);
        AsLayoutOrientation(): LayoutOrientationEnum;
    }
    class Color extends Atozed.Props.String {
        protected ValidateValue(aValue: string): string;
        Output(): string;
    }
    class Size extends Atozed.Props.String {
        protected ValidateValue(aValue: string): string;
        toString(): string;
    }
}
declare namespace IntraWeb {
    class LUID {
        static Get(): string;
    }
    class URL {
        static ExpansionPaths: any;
        static JsURL: any;
        static Init(): void;
        static EnsureDefaultDoc(aURL: string, aExt: string): string;
        protected static _CacheBuster: string;
        static Get(aURL: string, aThrowOnError?: boolean, aWithCredentials?: boolean, aCacheBuster?: boolean): string;
        static Expand(aBasePath: string, aSubPath?: string): string;
        static Merge(aBaseURL: string, aSubURL: string): string;
        protected static CacheBuster: string;
        static CacheBust(aURL: string): string;
        static ChangeExt(aURL: string, aExt: string): string;
        static GetPath(aURL: string): string;
        static RemoveParams(aURL: string): string;
        static IsHTML(aURL: string): boolean;
        static IsIWML(aURL: string): boolean;
    }
    class Config {
        protected _Locale: string;
        get Locale(): string;
        set Locale(aValue: string);
        static CheckLocale(aValue: string): void;
    }
    class System {
        static Config: Config;
        static Init(): void;
        static Run(): void;
    }
}
declare namespace IntraWeb {
    type TestValue = string | Array<string> | Atozed.Props.String | Atozed.Props.StringArray;
    export class Tester {
        static Fail(): void;
        protected static ToString(aValue: TestValue): string;
        static Test(aVal1: TestValue, aVal2: TestValue): void;
        static FailIf(aValue: boolean): void;
        static TestLayout(aLayout: IntraWeb.Layout): void;
    }
    export {};
}
declare namespace IntraWeb.Transport {
    class Dataset {
        Updates: any[];
    }
    abstract class Command {
        Command: string | null;
        constructor();
    }
    abstract class CommandWithPUID extends Command {
        PUID: number | null;
    }
    class NewCommand extends CommandWithPUID {
        Class: string | null;
        Name: string | null;
        ParentPUID: number | null;
        Position: number | null;
    }
    class EventCallCommand extends CommandWithPUID {
        Name: string | null;
    }
    class UpdateCommand extends CommandWithPUID {
        Data: any | null;
    }
    class RedirectCommand extends Command {
        URL: string | null;
    }
    class Packet {
        InstanceID: number | null;
        TrackID: number | null;
        Commands: Command[];
    }
}
declare namespace IntraWeb.Controls {
    abstract class SpanControl extends Control {
        protected _RootSpan: HTMLSpanElement;
        protected CreateRoot(): HTMLElement;
    }
    abstract class DivControl extends Control {
        protected _RootDiv: HTMLDivElement;
        protected CreateRoot(): HTMLElement;
    }
}
declare namespace IntraWeb.Controls.HTML {
    abstract class HtmlBase<T extends HTMLElement> extends Control {
        readonly Content: Props.HTML;
        readonly ID: Atozed.Props.String;
        readonly Lang: Atozed.Props.String;
        readonly Title: Atozed.Props.String;
        static DesignGetIcon(): string;
        protected _Element: T;
        get Element(): T;
        GetParams(): Atozed.Props.Params;
        protected abstract CreateElement(): T;
        protected CreateRoot(): HTMLElement;
        protected UpdateInnerHTML(): void;
        protected Render(): void;
    }
    class Span extends HtmlBase<HTMLSpanElement> {
        protected CreateElement(): HTMLSpanElement;
    }
    class Div extends HtmlBase<HTMLDivElement> {
        protected CreateElement(): HTMLDivElement;
    }
    class P extends HtmlBase<HTMLParagraphElement> {
        protected CreateElement(): HTMLParagraphElement;
    }
    class SVG extends Div {
        protected _SVG: SVGSVGElement;
        get SVG(): SVGSVGElement;
        protected UpdateInnerHTML(): void;
        protected CreateElement(): HTMLDivElement;
    }
}
declare namespace IntraWeb.Controls {
    class Button extends LayoutBase<CellNone> {
        readonly Hint: Atozed.Props.String;
        readonly LineHeight: Atozed.Props.String;
        readonly Text: Props.Text;
        readonly TextHAlign: Props.HAlignProp;
        GetParams(): Atozed.Props.Params;
        readonly WhenClicked: DomEvent;
        protected GetLayoutOrientation(): LayoutOrientationEnum;
        static DesignGetIcon(): string;
        protected _Button: HTMLButtonElement;
        protected CreateRoot(): HTMLElement;
        DesignInit(): void;
        ShowAsDefaultAction(aValue: boolean): void;
        protected Render(): void;
    }
}
declare namespace IntraWeb.Controls {
    class CheckBox extends SpanControl {
        readonly Checked: Atozed.Props.Boolean;
        readonly Hint: Atozed.Props.String;
        readonly Text: Props.Text;
        readonly WhenClicked: DomEvent;
        protected _CheckBox: HTMLInputElement;
        protected _Label: HTMLLabelElement;
        protected CreateRoot(): HTMLElement;
        GetParams(): Atozed.Props.Params;
        static DesignGetIcon(): string;
        DesignInit(): void;
        UpdateFromDOM(): void;
        protected Render(): void;
    }
}
declare namespace IntraWeb.Dialogs {
    function ShowMessage(aMessage: string, aWhenClosed?: () => any): void;
    function GetText(aMessage: string, aWhenClosed: (aText: string) => any, aText?: string): void;
    function EditMemo(aMessage: string, aWhenClosed: (aText: Array<string>) => any, aText?: Array<string>, aFullWindow?: boolean, aReadOnly?: boolean): void;
    function MultChoice(aMessage: string, aButtonTexts: Array<string>, aWhenClosed: (aValue: number) => any): void;
    function BinaryChoice(aMessage: string, aTrue: string, aFalse: string, aWhenClosed: (aValue: boolean) => any): void;
    function OkCancel(aMessage: string, aWhenClosed: (aValue: boolean) => any): void;
    function YesNo(aMessage: string, aWhenClosed: (aValue: boolean) => any): void;
    class Dialog {
        protected _Dialog: HTMLDialogElement;
        protected _Buttons: HTMLDivElement;
        WhenCancel: () => any;
        WhenClosed: (aValue: any) => any;
        protected constructor();
        Show(): void;
        AddButton(aHTML: string, aTag?: any): void;
        AddButtonsBool(aTrue: string, aFalse: string): void;
        AddButtons(aButtonTexts: Array<string>): void;
        AddOK(): void;
        AddOkCancel(): void;
        protected Close(): void;
    }
    class Message extends Dialog {
        protected _Message: HTMLDivElement;
        constructor(aMessage: string);
    }
    class InputText extends Message {
        get Text(): string;
        _Edit: HTMLInputElement;
        constructor(aMessage: string, aText?: string);
        Show(): void;
    }
    class InputMemo extends Message {
        get Text(): Array<string>;
        _Edit: HTMLTextAreaElement;
        SetFullWindow(): void;
        constructor(aMessage: string, aText?: Array<string>, aReadOnly?: boolean);
    }
}
declare namespace IntraWeb.Controls {
    abstract class DataTable extends Control {
        readonly ArrowUp: Atozed.Props.String;
        readonly ArrowDown: Atozed.Props.String;
        readonly Data: Atozed.Props.StringArray;
        readonly WhenGetHeader: ControlEvent;
        DataArray: Array<any>;
        protected _Table: HTMLTableElement;
        protected CreateRoot(): HTMLElement;
        Clear(): void;
        protected Render(): void;
    }
}
declare namespace IntraWeb.Controls {
    abstract class EditBase extends Control {
        readonly AutoCompletes: Atozed.Props.StringArray;
        readonly Hint: Atozed.Props.String;
        readonly WhenChanging: DomEvent;
        readonly WhenChanged: DomEvent;
        readonly WhenKeyDown: DomEvent;
        readonly WhenKeyUp: DomEvent;
        readonly WhenKeyPressed: DomEvent;
        protected _Input: HTMLInputElement;
        protected _DataList: HTMLDataListElement;
        protected CreateRoot(): HTMLElement;
        protected abstract GetInputType(): string;
        static DesignGetIcon(): string;
        protected Render(): void;
        SelectAll(): void;
    }
    enum EditType {
        Text = 0,
        Password = 1,
        EMail = 2,
        URL = 3,
        Telephone = 4,
        Search = 5
    }
    class Edit extends EditBase {
        readonly Placeholder: Atozed.Props.String;
        readonly ReadOnly: Atozed.Props.Boolean;
        readonly Text: Atozed.Props.String;
        readonly Type: Atozed.Props.Enum;
        GetParams(): Atozed.Props.Params;
        protected GetInputType(): string;
        protected Render(): void;
        DoRender(): void;
        UpdateFromDOM(): void;
    }
    abstract class EditNumBase extends EditBase {
        readonly Min: Atozed.Props.Float;
        readonly Max: Atozed.Props.Float;
        readonly Step: Atozed.Props.Float;
        readonly Value: Atozed.Props.Float;
        GetParams(): Atozed.Props.Params;
        protected Render(): void;
        DoRender(): void;
        UpdateFromDOM(): void;
    }
    class EditNum extends EditNumBase {
        readonly Placeholder: Atozed.Props.String;
        protected GetInputType(): string;
        static DesignGetIcon(): string;
        protected Render(): void;
    }
    class Slider extends EditNumBase {
        protected GetInputType(): string;
    }
    enum EditDateTimeType {
        Date = 0,
        DateTime = 1,
        Month = 2,
        Time = 3
    }
    class EditDateTime extends EditBase {
        readonly Min: Atozed.Props.DateTime;
        readonly Max: Atozed.Props.DateTime;
        readonly Step: Atozed.Props.Int;
        readonly Value: Atozed.Props.DateTime;
        readonly Type: Atozed.Props.Enum;
        GetParams(): Atozed.Props.Params;
        protected GetInputType(): string;
        protected Render(): void;
        DoRender(): void;
        UpdateFromDOM(): void;
    }
}
declare namespace IntraWeb.Controls {
    enum Resizing {
        Disabled = 0,
        Enabled = 1,
        Horizontal = 2,
        Vertical = 3
    }
    class ResizingProp extends Atozed.Props.Enum {
        constructor(aObj: Atozed.AZObject);
    }
    class EditMulti extends Control {
        readonly FixedWidthFont: Atozed.Props.Boolean;
        readonly Text: Atozed.Props.StringArray;
        readonly LineHeight: Atozed.Props.String;
        readonly Placeholder: Atozed.Props.String;
        readonly ReadOnly: Atozed.Props.Boolean;
        readonly Resizing: ResizingProp;
        readonly WordWrap: Atozed.Props.Boolean;
        protected _TextArea: HTMLTextAreaElement | null;
        protected CreateRoot(): HTMLElement;
        GetParams(): Atozed.Props.Params;
        SelectLine(aLineNo: number): void;
        UpdateFromDOM(): void;
        protected Render(): void;
        SelectAll(): void;
    }
}
declare namespace IntraWeb.Controls {
    class IFrame extends Control {
        protected _Frame: HTMLIFrameElement;
        get DomFrame(): HTMLIFrameElement;
        readonly HTML: Props.HTML;
        readonly URL: Props.URL;
        GetParams(): Atozed.Props.Params;
        protected CreateRoot(): HTMLElement;
        static DesignGetIcon(): string;
        protected Render(): void;
    }
}
declare namespace IntraWeb.Controls {
    class Link extends Control {
        protected _DomAnchor: HTMLAnchorElement;
        readonly Text: Props.Text;
        readonly Hint: Atozed.Props.String;
        readonly URL: Props.URL;
        readonly NewWindow: Atozed.Props.Boolean;
        readonly Target: Atozed.Props.String;
        readonly Relation: Atozed.Props.String;
        readonly WhenClicked: DomEvent;
        GetParams(): Atozed.Props.Params;
        protected CreateRoot(): HTMLElement;
        DesignInit(): void;
        protected Render(): void;
    }
}
declare namespace IntraWeb.Controls {
    abstract class ListBoxBase extends Control {
        readonly Items: Atozed.Props.StringArray;
        readonly Placeholder: Atozed.Props.String;
        readonly RowCount: Atozed.Props.Int;
        readonly Values: Atozed.Props.StringArray;
        readonly WhenSelectionChanged: DomEvent;
        protected _Select: HTMLSelectElement;
        protected CreateRoot(): HTMLElement;
        protected Render(): void;
    }
    class ListBoxMulti extends ListBoxBase {
        SelectedIndexes: Atozed.Props.NumberArray;
        protected _SelectedIndexesParsed: Array<number>;
        SelectedTexts: Atozed.Props.StringArray;
        protected _SelectedTextsParsed: Array<string>;
        SelectedValues: Atozed.Props.StringArray;
        protected _SelectedValuesParsed: Array<string>;
        protected GetTextsForSelectedIndexes(aProp: Atozed.Props.StringArray): Array<string>;
        protected SetTextsForSelectedIndexes(aProp: Atozed.Props.StringArray, aValues: Array<string>): void;
        constructor();
        AfterParse(): void;
        protected InitDOM(): void;
        SelectAll(): void;
        DeselectAll(): void;
        UpdateFromDOM(): void;
        protected Render(): void;
    }
    class ListBox extends ListBoxBase {
        readonly Index: Atozed.Props.Int;
        protected _IndexParsed: number;
        readonly Text: Atozed.Props.String;
        readonly Value: Atozed.Props.String;
        SelectedValue(): string;
        constructor();
        AfterParse(): void;
        protected Render(): void;
        UpdateFromDOM(): void;
    }
}
declare namespace IntraWeb.Controls {
    class Image extends Control {
        readonly URL: Props.URL;
        protected _Image: HTMLImageElement;
        protected CreateRoot(): HTMLElement;
        GetParams(): Atozed.Props.Params;
        protected Render(): void;
    }
    class YouTube extends Control {
        readonly VideoID: Atozed.Props.String;
        readonly PlaysInline: Atozed.Props.Boolean;
        readonly Autoplay: Atozed.Props.Boolean;
        readonly Mute: Atozed.Props.Boolean;
        readonly Controls: Atozed.Props.Boolean;
        protected _IFrame: HTMLIFrameElement;
        GetParams(): Atozed.Props.Params;
        protected CreateRoot(): HTMLElement;
        protected Render(): void;
    }
}
declare namespace IntraWeb.Controls {
    class Definition extends Control {
        protected _DomDfn: HTMLElement | null;
        readonly Text: Atozed.Props.String;
        GetParams(): Atozed.Props.Params;
        protected CreateRoot(): HTMLElement;
        protected Render(): void;
    }
    class HorizLine extends Control {
        _HR: HTMLHRElement | null;
        readonly HAlign: Props.HAlignProp;
        protected CreateRoot(): HTMLElement;
        protected Render(): void;
        GetParams(): Atozed.Props.Params;
    }
    class Gap extends SpanControl {
        readonly Auto: Props.Size;
        protected NeedsRendered(): boolean;
        GetParams(): Atozed.Props.Params;
        protected GetDefaultVisibility(): string;
        protected CreateRoot(): HTMLElement;
        protected Render(): void;
    }
    abstract class Progress extends Control {
        readonly Max: Atozed.Props.Float;
        readonly Value: Atozed.Props.Float;
        protected _Progress: HTMLProgressElement;
        protected CreateRoot(): HTMLElement;
        static DesignGetIcon(): string;
        protected Render(): void;
    }
}
declare namespace IntraWeb.Controls {
    class RadioGroup extends LayoutBase<CellNone> {
        Value: Atozed.Props.String;
        readonly WhenClicked: ControlEvent;
        protected GetLayoutOrientation(): LayoutOrientationEnum;
        protected CreateRoot(): HTMLElement;
        GetParams(): Atozed.Props.Params;
        static DesignGetIcon(): string;
        _CheckedRadio: Radio | null;
        get CheckedRadio(): Radio | null;
        set CheckedRadio(aValue: Radio);
        readonly GroupName: string;
        constructor();
        UpdateFromDOM(): void;
    }
    class Radio extends Control {
        Text: Props.Text;
        Value: Atozed.Props.String;
        readonly WhenClicked: DomEvent;
        constructor();
        protected _Radio: HTMLInputElement;
        protected _TextSpan: HTMLSpanElement;
        protected CreateRoot(): HTMLElement;
        GetParams(): Atozed.Props.Params;
        static DesignGetIcon(): string;
        get Checked(): boolean;
        protected FindGroup(): RadioGroup | null;
        UpdateFromDOM(): void;
        protected Render(): void;
    }
}
declare namespace IntraWeb.Controls {
    class SVG extends Control {
        readonly WhenClicked: DomEvent;
        readonly WhenContextMenu: DomEvent;
        protected _SVG: SVGSVGElement;
        get SVG(): SVGSVGElement;
        protected CreateRoot(): HTMLElement;
        NewCircle(): SVG.Circle;
        NewEllipse(): SVG.Ellipse;
        NewLine(): SVG.Line;
        NewPath(): SVG.Path;
        NewPolyline(): SVG.Polyline;
        NewPolygon(): SVG.Polygon;
        NewRect(): SVG.Rect;
        CircleElement(): SVGCircleElement;
        EllipseElement(): SVGEllipseElement;
        LineElement(): SVGLineElement;
        PathElement(): SVGPathElement;
        PolylineElement(): SVGPolylineElement;
        PolygonElement(): SVGPolygonElement;
        RectElement(): SVGRectElement;
        readonly Elements: SVG.Element[];
        Add(aElem: IntraWeb.Controls.SVG.Element): void;
        Remove(aElem: IntraWeb.Controls.SVG.Element): void;
        FindElemFromEvent(a: PointerEvent): SVG.Geometry | null;
        PointFromEvent(a: PointerEvent): DOMPoint;
    }
}
declare namespace IntraWeb.Controls.SVG {
    abstract class Element {
        readonly Root: SVGElement;
        constructor(aRoot: SVGElement);
    }
    abstract class Graphics extends Element {
    }
    abstract class Geometry extends Graphics {
    }
    class Circle extends Geometry {
        protected readonly _Circle: SVGCircleElement;
        constructor();
        get Fill(): string;
        set Fill(aValue: string);
        get StrokeColor(): string;
        set StrokeColor(aValue: number | string);
        get Radius(): string;
        set Radius(aValue: number | string);
        get X(): string;
        set X(aValue: number | string);
        get Y(): string;
        set Y(aValue: number | string);
    }
    class Ellipse extends Geometry {
        protected readonly _Ellipse: SVGEllipseElement;
        constructor();
    }
    class Line extends Geometry {
        protected readonly _Line: SVGLineElement;
        constructor();
        get Color(): string;
        set Color(aValue: string);
        get X1(): string;
        set X1(aValue: number | string);
        get X2(): string;
        set X2(aValue: number | string);
        get Y1(): string;
        set Y1(aValue: number | string);
        get Y2(): string;
        set Y2(aValue: number | string);
        get Width(): string;
        set Width(aValue: number | string);
    }
    class Path extends Geometry {
        protected readonly _Path: SVGPathElement;
        constructor();
    }
    class Polyline extends Geometry {
        protected readonly _Polyline: SVGPolylineElement;
        constructor();
    }
    class Polygon extends Geometry {
        protected readonly _Polygon: SVGPolygonElement;
        constructor();
    }
    class Rect extends Geometry {
        protected readonly _Rect: SVGRectElement;
        constructor();
    }
}
declare namespace IntraWeb.Controls {
    class PreText extends Control {
        readonly Text: Props.Text;
        readonly WhenClicked: DomEvent;
        protected CreateRoot(): HTMLElement;
        GetParams(): Atozed.Props.Params;
        protected Render(): void;
        DesignInit(): void;
    }
    abstract class TextBase extends Control {
        readonly Color: Props.Color;
        readonly Text: Props.Text;
        readonly Hint: Atozed.Props.String;
        readonly WhenClicked: DomEvent;
        GetParams(): Atozed.Props.Params;
        static DesignGetIcon(): string;
        DesignInit(): void;
        protected Render(): void;
    }
    class Text extends TextBase {
        protected CreateRoot(): HTMLElement;
    }
    class TextDiv extends TextBase {
        protected CreateRoot(): HTMLElement;
    }
    class DiffViewer extends Control {
        readonly Lines: Atozed.Props.StringArray;
        protected _Pre: HTMLPreElement | null;
        protected CreateRoot(): HTMLElement;
        protected Render(): void;
    }
    class Header extends DivControl {
        protected _DomHeading: HTMLHeadingElement | null;
        readonly Level: Atozed.Props.Int;
        readonly Text: Props.Text;
        GetParams(): Atozed.Props.Params;
        protected Render(): void;
    }
    class EOL extends Control {
        protected CreateRoot(): HTMLElement;
    }
    class Space extends SpanControl {
        protected CreateRoot(): HTMLElement;
    }
    class StatusIndicator extends SpanControl {
        readonly Indicators: Atozed.Props.StringArray;
        readonly Value: Atozed.Props.Int;
        GetParams(): Atozed.Props.Params;
        protected Render(): void;
    }
}
declare namespace IntraWeb.Controls {
    enum ListType {
        Disc = 0,
        Circle = 1,
        Square = 2,
        None = 3,
        Armenian = 4,
        Georgian = 5,
        Hebrew = 6,
        Hiragana = 7,
        HiraganaIroha = 8,
        Katakana = 9,
        KatakanaIroha = 10,
        CJK = 11,
        Num0 = 12,
        Num00 = 13,
        ABC = 14,
        AbcLower = 15,
        Greek = 16,
        GreekLower = 17,
        Roman = 18,
        RomanLower = 19
    }
    const ListTypeValues: string[];
    class ListTypeProp extends Atozed.Props.Enum {
        constructor(aObj: Atozed.AZObject, aDefault?: number);
        get Ordered(): boolean;
    }
    class TextList extends Control {
        readonly Items: Atozed.Props.StringArray;
        readonly ListType: ListTypeProp;
        readonly Reversed: Atozed.Props.Boolean;
        readonly StartAt: Atozed.Props.Int;
        readonly Text: Props.Text;
        readonly UseMarkdown: Atozed.Props.Boolean;
        GetParams(): Atozed.Props.Params;
        _DivText: HTMLDivElement | null;
        _List: HTMLElement | null;
        protected CreateRoot(): HTMLElement;
        protected Render(): void;
    }
}
declare namespace IntraWeb.Controls {
    class TreeListNodes extends Array<TreeListNode> {
        readonly ParentNode: TreeListNode;
        constructor(aParentNode?: TreeListNode);
        AddText(aText: string, aTag?: any, aPos?: number): void;
        Add(aNode: TreeListNode, aPos?: number): void;
    }
    class TreeListNode {
        readonly Nodes: TreeListNodes;
        readonly Tag: any;
        readonly Tree: TreeList;
        protected _Text: any;
        get Text(): string;
        set Text(aValue: string);
        protected _ChildrenDIV: HTMLDivElement | null;
        protected _Details: HTMLDetailsElement;
        readonly RootDIV: HTMLDivElement;
        readonly HTMLElement: HTMLElement | null;
        protected _ParentNodes: TreeListNodes;
        get ParentNodes(): TreeListNodes;
        get ParentNode(): TreeListNode | null;
        protected UpdateText(): void;
        constructor(aTree: TreeList, aText: string, aTag?: any, aElem?: HTMLElement);
        get Siblings(): TreeListNodes;
        ScrollIntoView(): void;
        Expand(): void;
        Collapse(): void;
        get IsExpanded(): boolean;
        Remove(): void;
        ExpandAncestors(): void;
        AddTo(aParentNodes: TreeListNodes, aPos?: number): void;
    }
    class TreeList extends Control {
        readonly Items: Atozed.Props.StringArray;
        readonly TaggedNodesAsLinks: Atozed.Props.Boolean;
        readonly UseMarkdown: Atozed.Props.Boolean;
        readonly WhenClicked: UpdateEvent;
        readonly WhenDoubleClicked: UpdateEvent;
        readonly WhenCollapsed: UpdateEvent;
        readonly WhenExpanded: UpdateEvent;
        readonly WhenCreateNodeElement: ControlEvent;
        readonly WhenGetNodeText: ControlEvent;
        protected CreateRoot(): HTMLElement;
        static DesignGetIcon(): string;
        Nodes: TreeListNodes;
        protected _SelectedNode: TreeListNode | null;
        get SelectedNode(): TreeListNode | null;
        set SelectedNode(aNode: TreeListNode);
        CreateNode(aText: string, aTag?: any, aElem?: HTMLElement): TreeListNode;
        GetAllNodes(aParent?: TreeListNode): TreeListNodes;
        protected LoadItems(): void;
        protected Render(): void;
    }
}
declare namespace IntraWeb.Controls {
    class CellHTML extends CellNone {
    }
    abstract class LayoutHTML<TElement extends HTMLElement> extends LayoutBase<CellHTML> {
        protected _RootElement: TElement;
        protected GetLayoutOrientation(): LayoutOrientationEnum;
        GetParams(): Atozed.Props.Params;
    }
    class Para extends LayoutHTML<HTMLParagraphElement> {
        protected CreateRoot(): HTMLElement;
    }
    class Div extends LayoutHTML<HTMLDivElement> {
        protected CreateRoot(): HTMLElement;
    }
    class Flex extends Div {
        protected CreateRoot(): HTMLElement;
    }
    class Span extends LayoutHTML<HTMLSpanElement> {
        protected CreateRoot(): HTMLElement;
    }
    class Label extends LayoutHTML<HTMLLabelElement> {
        protected CreateRoot(): HTMLElement;
    }
}
declare namespace IntraWeb.PageItems {
    enum ColumnType {
        Auto = 0,
        Text = 1,
        Memo = 2,
        Int = 3,
        Decimal = 4,
        Date = 5,
        Bool = 6
    }
    class DebugOptions extends PropObject {
        CellBorders: Atozed.Props.Boolean;
    }
    class ServerOptions extends PropObject {
        readonly CallbackURI: Atozed.Props.String;
    }
}
declare namespace IntraWeb.Transient {
}
declare namespace IntraWeb {
    class Page extends IntraWeb.Controls.Div {
        readonly Test: Atozed.Props.Boolean;
        readonly Debug: PageItems.DebugOptions;
        readonly Server: PageItems.ServerOptions;
        readonly WhenAfterRender: PageEvent;
        readonly WhenBeforeRender: PageEvent;
        readonly WhenHidden: PageEvent;
        readonly WhenInvalidated: PageEvent;
        readonly WhenLoaded: PageEvent;
        readonly WhenPropertyChanged: PageEvent;
        readonly WhenReady: PageEvent;
        readonly WhenResized: PageEvent;
        readonly WhenShown: PageEvent;
        readonly WhenTest: PageEvent;
        readonly WhenUpdate: PageEvent;
        protected GetPage(): Page;
        protected GetIsPage(): boolean;
        static DesignGetIcon(): string;
        protected _ScrollWidth: number;
        protected _ScrollHeight: number;
        static LoadCode(aURL: string): Promise<void>;
        static CreateFromURL(aURL: string): Page;
        protected DoResize(): void;
        PageClass: string;
        private _InstanceID;
        get InstanceID(): number;
        set InstanceID(value: number);
        private _TrackID;
        get TrackID(): number;
        set TrackID(value: number);
        readonly ControlsByName: any;
        readonly ControlsByPUID: any;
        protected _PuidGenerator: number;
        NewPUID(): number;
        readonly Properties: any;
        readonly Data: Controls.ArrayItems.Page.DataItems;
        readonly Scripts: Controls.ArrayItems.Page.Scripts;
        readonly Styles: Controls.ArrayItems.Page.Styles;
        Code: Code;
        _ReflectMode: boolean;
        protected _URL: string;
        get URL(): string;
        UrlPath: string;
        CreateCell(aCtrl: Control): Cell;
        constructor(aURL?: string | null);
        FindControl(aName: string): Control;
        GetURL(aURL: string, aThrowOnError?: boolean): string;
        protected PushPropertiesToCode(): void;
        protected PullPropertiesFromCode(): void;
        Unload(): void;
        protected static _TempPageID: number;
        protected _ControlID: number;
        AfterParse(): void;
        protected CheckEvents(): void;
        protected CreateRoot(): HTMLElement;
        protected InitDOM(): void;
        protected GetPuidObjectsInternal(aList: Array<IntraWeb.ObjectWithProps>): void;
        WhenControlNameChanged: ControlEvent;
        ControlNameChanged(aCtrl: IntraWeb.Control, aOldName: string, aNewName: string): void;
        AddObjName(aName: string, aObj: NamedObject): void;
        RemoveObjName(aName: string): void;
        ApplyUpdate(aJSON: string, aPerformChecks?: boolean): void;
        ExecuteServerEvent(aSource: Renderer, aName: string, aArgs: Array<any>): void;
        GetServerUpdateObj(): any;
        protected _Target: HTMLElement;
        get Target(): HTMLElement;
        InsertToDOM(aTarget?: HTMLElement): void;
        _IwmlParams: URLSearchParams;
        WebParam(aName: string, aDeepSearch?: boolean): string | null;
        GetEnabledState(): boolean;
        protected AfterDomComplete(): void;
        protected _InitialResizeCalled: boolean;
        protected Render(): void;
        protected _Invalidated: boolean;
        Invalidate(aSetFlagOnly?: boolean): void;
        DoRender(): void;
        UpdateFromDOM(): void;
        Refresh(): void;
        GetDatasetByName(aName: string): Atozed.Data.Dataset;
    }
}
declare namespace IntraWeb.Controls.ArrayItems.Page {
    class Resource extends NamedTextArrayItem {
        URL: Atozed.Props.String;
        GetParams(): Atozed.Props.Params;
        protected RuntimeDelayLoad(): void;
    }
    class Script extends Resource {
        AttachToPage: Atozed.Props.Boolean;
        protected RuntimeDelayLoad(): void;
    }
    class Scripts extends NamedObjectArray<Script> {
    }
    class CSS extends Resource {
    }
    class Styles extends NamedObjectArray<CSS> {
    }
}
declare namespace IntraWeb.Controls.ArrayItems.Page {
    class Field extends NamedArrayItem {
        Title: Atozed.Props.String;
        GetTitle(): string;
        GetParams(): Atozed.Props.Params;
        readonly DataType: Atozed.Props.Enum;
        ComputedType: PageItems.ColumnType;
        readonly Default: Atozed.Props.String;
        readonly ReadOnly: Atozed.Props.Boolean;
        readonly Required: Atozed.Props.Boolean;
    }
    class Fields extends NamedObjectArray<Field> {
    }
    class Data extends Resource {
        protected _Dataset: Atozed.Data.Dataset;
        get Dataset(): Atozed.Data.Dataset;
        readonly Fields: Fields;
        readonly KeyName: Atozed.Props.String;
        readonly ReadOnly: Atozed.Props.Boolean;
        readonly SortBy: Atozed.Props.String;
        readonly SortOrder: Props.SortOrderProp;
        constructor(aParentArray: NamedObjectArray<NamedArrayItem>);
        protected LoadData(): void;
        LoadJSON(aJSON: string): void;
        AfterParse(): void;
        GetChanges(): Transport.Dataset;
    }
    class DataItems extends NamedObjectArray<Data> {
        HasChanges(): boolean;
    }
}
declare namespace IntraWeb.Controls {
    class CollapsePanel extends LayoutBase<CellNone> {
        readonly Header: Props.HTML;
        readonly HeaderColor: Props.Color;
        readonly HeaderTextColor: Props.Color;
        readonly Open: Atozed.Props.Boolean;
        GetParams(): Atozed.Props.Params;
        protected _Details: HTMLDetailsElement;
        protected _Summary: HTMLElement;
        protected CreateRoot(): HTMLElement;
        UpdateFromDOM(): void;
        protected InitCellListDOM(): void;
        protected Render(): void;
    }
}
declare namespace IntraWeb.Controls {
    class ChildPage extends LayoutDivBase<CellNone> {
        protected _ChildPage: Page | null;
        LoadPage(aPage: Page | null): void;
        LoadURL(aURL: string): void;
        LoadIWML(aData: string): void;
        Clear(): void;
    }
}
declare namespace IntraWeb.Controls {
}
declare namespace IntraWeb.Controls {
    class CellXY extends CellContainer {
        protected _Span: HTMLSpanElement;
        X: Props.Size;
        Y: Props.Size;
        get Position(): string;
        set Position(aValue: string);
        protected CreateRoot(): HTMLElement;
        constructor(aCtrl: Control);
        protected Render(): void;
    }
    class Fixed extends LayoutDivBase<CellXY> {
        CreateCell(aCtrl: Control): Cell;
        DesignInit(): void;
        DesignBeginDrop(aDropControl: Control, aTargetCtrl?: Control, aTargetData?: any, aAddBefore?: boolean): void;
        DesignCommitDrop(aX: number, aY: number): boolean;
        DesignCancelDrop(): void;
        protected GetLayoutOrientation(): LayoutOrientationEnum;
        protected InitDOM(): void;
    }
}
declare namespace IntraWeb.Controls {
    enum FormLayoutEnum {
        Horizontal = 0,
        Vertical = 1
    }
    class CellForm extends CellContainer {
        Title: Props.Text;
        protected _RowDiv: HTMLDivElement;
        protected _TitleDiv: HTMLDivElement;
        protected CreateRoot(): HTMLElement;
        protected Render(): void;
    }
    class Form extends LayoutBase<CellForm> {
        Layout: Atozed.Props.Enum;
        TitlePrefix: Atozed.Props.String;
        TitleSuffix: Atozed.Props.String;
        protected _Table: HTMLDivElement;
        protected GetLayoutOrientation(): LayoutOrientationEnum;
        protected CreateRoot(): HTMLElement;
        CreateCell(aCtrl: Control): Cell;
    }
}
declare namespace IntraWeb.Controls.ArrayItems.DataForm {
    class Field extends NamedArrayItem {
        readonly DataType: Atozed.Props.Enum;
        readonly ReadOnly: Atozed.Props.Boolean;
        readonly Title: Atozed.Props.String;
        GetParams(): Atozed.Props.Params;
    }
    class Fields extends NamedObjectArray<ArrayItems.DataForm.Field> {
    }
}
declare namespace IntraWeb.Controls {
    class DataForm extends Form {
        readonly ShowKey: Atozed.Props.Boolean;
        readonly DataSource: Props.DatasetSource;
        readonly Fields: ArrayItems.DataForm.Fields;
        readonly ReadOnly: Atozed.Props.Boolean;
        readonly Controls: any;
        protected InitCellListDOM(): void;
        GetParams(): Atozed.Props.Params;
    }
}
declare namespace IntraWeb.Controls {
    class CellGrid extends CellDiv {
        readonly Col: Atozed.Props.String;
        readonly Row: Atozed.Props.String;
        protected Render(): void;
    }
    class GridLayout extends LayoutBase<CellGrid> {
        readonly Cols: Atozed.Props.String;
        readonly Rows: Atozed.Props.String;
        readonly Gap: Props.Size;
        protected _RootDiv: HTMLDivElement;
        protected GetLayoutOrientation(): LayoutOrientationEnum;
        static DesignGetIcon(): string;
        protected CreateRoot(): HTMLElement;
        CreateCell(aCtrl: Control): Cell;
        protected Render(): void;
    }
}
declare namespace IntraWeb.Controls {
    class GroupBox extends LayoutBase<CellNone> {
        readonly Caption: Props.Text;
        GetParams(): Atozed.Props.Params;
        protected _Fieldset: HTMLFieldSetElement;
        protected _Legend: HTMLLegendElement;
        protected CreateRoot(): HTMLElement;
        protected InitCellListDOM(): void;
        protected Render(): void;
    }
}
declare namespace IntraWeb.Controls {
    class CellList extends Cell {
        protected _DomListItem: HTMLLIElement;
        get DomListItem(): HTMLLIElement | undefined;
        protected CreateRoot(): HTMLElement;
    }
    class List extends LayoutBase<CellList> {
        readonly ListType: ListTypeProp;
        readonly Reversed: Atozed.Props.Boolean;
        readonly StartAt: Atozed.Props.Int;
        _List: HTMLUListElement;
        protected CreateRoot(): HTMLElement;
        protected GetLayoutOrientation(): LayoutOrientationEnum;
        CreateCell(aCtrl: Control): Cell;
        GetParams(): Atozed.Props.Params;
        protected Render(): void;
    }
}
declare namespace IntraWeb.Controls {
    class CellStack extends CellContainer {
        protected CreateRoot(): HTMLElement;
        protected Render(): void;
    }
    class Stack extends LayoutBase<CellStack> {
        readonly Orientation: Props.OrientationProp;
        protected GetLayoutOrientation(): LayoutOrientationEnum;
        protected _Table: HTMLDivElement | null;
        protected CreateRoot(): HTMLElement;
        CreateCell(aCtrl: Control): Cell;
        GetParams(): Atozed.Props.Params;
        protected InitCellListDOM(): void;
        protected Render(): void;
    }
}
declare namespace IntraWeb.Controls {
    class CellSimpleStack extends CellDiv {
        protected GetDefaultVisibility(): string;
    }
    class SimpleStack extends LayoutDivBase<CellSimpleStack> {
        readonly Orientation: Props.OrientationProp;
        protected GetLayoutOrientation(): LayoutOrientationEnum;
        CreateCell(aCtrl: Control): Cell;
        GetParams(): Atozed.Props.Params;
        static DesignGetIcon(): string;
        DoRender(): void;
    }
}
declare namespace IntraWeb.Controls {
    class CellTabPanel extends CellDiv {
        readonly Title: Atozed.Props.String;
    }
    class TabPanel extends LayoutBase<CellTabPanel> {
        readonly CssClassName: Atozed.Props.String;
        readonly SelectedIndex: Atozed.Props.Int;
        readonly SelectedColor: Props.Color;
        readonly SelectedTextColor: Props.Color;
        protected _SelectedControl: IntraWeb.Control | null;
        get SelectedControl(): IntraWeb.Control | null;
        set SelectedControl(aCtrl: IntraWeb.Control);
        protected _Buttons: HTMLDivElement;
        CreateCell(aCtrl: Control): Cell;
        protected CreateRoot(): HTMLElement;
        protected InitCellListDOM(): void;
        protected Render(): void;
    }
}
declare namespace IntraWeb.Controls {
    class CellTemplate extends CellNone {
        protected _TagElement: HTMLElement | null;
        get TagElement(): HTMLElement | null;
        Added(): void;
        Removing(): void;
    }
    class Template extends LayoutSpanBase<CellTemplate> {
        readonly HTML: Props.HTML;
        readonly URL: Atozed.Props.String;
        TaggedElements: any;
        protected _TemplateHTML: string;
        protected GetTemplateHTML(): string;
        protected GetLayoutOrientation(): LayoutOrientationEnum;
        GetParams(): Atozed.Props.Params;
        CreateCell(aCtrl: Control): Cell;
        ControlNameChanged(aCtrl: IntraWeb.Control, aOldName: string, aNewName: string): void;
        ClearTag(aName: string): void;
        FillTag(aCtrl: IntraWeb.Control): HTMLElement;
        protected _DesignDropTagName: string | undefined;
        DesignBeginDrop(aDropControl: Control, aTargetCtrl?: Control, aTargetData?: any, aAddBefore?: boolean): void;
        DesignCommitDrop(aX: number, aY: number): boolean;
        DesignCancelDrop(): void;
        protected InitCellListDOM(): void;
        ApplyControlsToTags(): void;
        ConvertTags(aHTML: string): string;
    }
}
declare namespace IntraWeb.Local {
    enum Build {
        Dev = 0,
        Mega = 1
    }
    export class Scripts {
        static DevLibs: Array<string>;
        static MegaLibs: Array<string>;
        static Init(): void;
        static LoadList(aBuild: Build): Array<string>;
    }
    export {};
}
declare namespace IntraWeb {
    export let DesignerIsActive: boolean;
    export class Loader {
        static LibPath: string | null;
        private static Get;
        private static readonly _LoadedURLs;
        private static LinkIsLoaded;
        static LoadScriptsAsync(aBasePath: string, aURLs: Array<string>, aMustLoad?: boolean): Promise<void>;
        static readonly JsURLs: any;
        static LoadJS(aID: string, aURL?: string, aThrowOnError?: boolean, aUseSourceMaps?: boolean): boolean;
        static LoadJsFromString(aCode: string): HTMLScriptElement;
        private static CheckLoad;
        static CssURLs: any;
        static LoadCSS(aID: string, aURL?: string, aMedia?: string, aThrowIfNotExist?: boolean): HTMLLinkElement;
        static LoadCssFromString(aCode: string): HTMLStyleElement;
    }
    export class Params {
        AllowDocParams: boolean;
        JsData: any;
        JsQuery: URLSearchParams | null;
        UrlQuery: URLSearchParams | null;
        AsString(aName: string, aDefault?: string, aDocPrefix?: string): string;
        AsBool(aName: string, aDefault?: boolean): boolean;
        AsInt(aName: string, aDefault?: Number | null): Number | null;
    }
    enum Browser {
        Chrome = 0,
        Firefox = 1,
        Safari = 2,
        Unsupported = 3
    }
    export class Boot {
        static Browser: Browser;
        static BrowserVersion: number;
        static BrowserIsMobile: boolean;
        static Integrity: string;
        static MegaLoad: boolean;
        static LoaderURL: string;
        static ProjectSubPath: string;
        private static BootScript;
        static InitialIwmlURL: string;
        static Target: HTMLElement;
        static WordPress: boolean;
        static WordPressBody: string | null;
        static Params: Params;
        static ParamSource: string | null;
        static ParamTestFlag: string | null;
        static Entry(): void;
        static IWPrefix: string;
        private static FindTarget;
        static Message(aHTML: string): void;
        static GetPath(aURL: string): string;
        protected static CheckBrowser(): boolean;
        static Error(aError: Error): void;
        static MainAsync(): Promise<void>;
    }
    export {};
}
