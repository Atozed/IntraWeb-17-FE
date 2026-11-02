namespace Vue {
  export class MyPages {
    public static readonly Index = new IntraWeb.PageLoader<Index>("Index");
    public static readonly Opener = new IntraWeb.PageLoader<Opener>("Opener");
    public static readonly Basic_AttribBindings_ = new IntraWeb.PageLoader<Basic.AttribBindings.Index>("Basic/AttribBindings/");
    public static readonly Basic_ConditionalsLoopsA_ = new IntraWeb.PageLoader<Basic.ConditionalsLoopsA.Index>("Basic/ConditionalsLoopsA/");
    public static readonly Basic_ConditionalsLoopsB_ = new IntraWeb.PageLoader<Basic.ConditionalsLoopsB.Index>("Basic/ConditionalsLoopsB/");
    public static readonly Basic_FormBindings_ = new IntraWeb.PageLoader<Basic.FormBindings.Index>("Basic/FormBindings/");
    public static readonly Basic_HandlingUserInput_ = new IntraWeb.PageLoader<Basic.HandlingUserInput.Index>("Basic/HandlingUserInput/");
    public static readonly Basic_HelloWorld_ = new IntraWeb.PageLoader<Basic.HelloWorld.Index>("Basic/HelloWorld/");
    public static readonly Basic_SimpleComponent_ = new IntraWeb.PageLoader<Basic.SimpleComponent.Index>("Basic/SimpleComponent/");
    public static readonly GUIs_Cells_ = new IntraWeb.PageLoader<GUIs.Cells.Index>("GUIs/Cells/");
    public static readonly GUIs_CircleDrawer_ = new IntraWeb.PageLoader<GUIs.CircleDrawer.Index>("GUIs/CircleDrawer/");
    public static readonly GUIs_Counter_ = new IntraWeb.PageLoader<GUIs.Counter.Index>("GUIs/Counter/");
    public static readonly GUIs_CRUD_ = new IntraWeb.PageLoader<GUIs.CRUD.Index>("GUIs/CRUD/");
    public static readonly GUIs_FlightBooker_ = new IntraWeb.PageLoader<GUIs.FlightBooker.Index>("GUIs/FlightBooker/");
    public static readonly GUIs_TempConverter_ = new IntraWeb.PageLoader<GUIs.TempConverter.Index>("GUIs/TempConverter/");
    public static readonly GUIs_Timer_ = new IntraWeb.PageLoader<GUIs.Timer.Index>("GUIs/Timer/");
    public static readonly Practical_FetchingData_ = new IntraWeb.PageLoader<Practical.FetchingData.Index>("Practical/FetchingData/");
    public static readonly Practical_GridSortFilter_ = new IntraWeb.PageLoader<Practical.GridSortFilter.Index>("Practical/GridSortFilter/");
    public static readonly Practical_ListTransitions_ = new IntraWeb.PageLoader<Practical.ListTransitions.Index>("Practical/ListTransitions/");
    public static readonly Practical_MarkdownEditor_ = new IntraWeb.PageLoader<Practical.MarkdownEditor.Index>("Practical/MarkdownEditor/");
    public static readonly Practical_ModalTransitions_ = new IntraWeb.PageLoader<Practical.ModalTransitions.Index>("Practical/ModalTransitions/");
    public static readonly Practical_SvgGraph_ = new IntraWeb.PageLoader<Practical.SvgGraph.Index>("Practical/SvgGraph/");
    public static readonly Practical_TreeView_ = new IntraWeb.PageLoader<Practical.TreeView.Index>("Practical/TreeView/");
  }
  IntraWeb.App.UserPages = MyPages;
}
