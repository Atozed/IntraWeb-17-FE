namespace Features {
  export class MyPages {
    public static readonly Index = new IntraWeb.PageLoader<Index>('Index');
    public static readonly Opener = new IntraWeb.PageLoader<Opener>('Opener');
    public static readonly Async_ = new IntraWeb.PageLoader<Controls.Index>('Async/');
    public static readonly Controls_ = new IntraWeb.PageLoader<Controls.Index>('Controls/');
    public static readonly Controls_SVG_ = new IntraWeb.PageLoader<Controls.Index>('Controls/SVG/');
    public static readonly Controls_List_ = new IntraWeb.PageLoader<Controls.Index>('Controls/List/');
    public static readonly Controls_ListBox_ = new IntraWeb.PageLoader<Controls.Index>('Controls/ListBox/');
    public static readonly Controls_RadioGroup_ = new IntraWeb.PageLoader<Controls.Index>('Controls/RadioGroup/');
    public static readonly Controls_Text_ = new IntraWeb.PageLoader<Controls.Index>('Controls/Text/');
    public static readonly Controls_TreeList_ = new IntraWeb.PageLoader<Controls.Index>('Controls/TreeList/');
    public static readonly ChildPage_ = new IntraWeb.PageLoader<ChildPage.Index>('ChildPage/');
    public static readonly ChildPage_Child = new IntraWeb.PageLoader<ChildPage.Child>('ChildPage/Child');
    public static readonly DataBinding_ = new IntraWeb.PageLoader<DataBinding.Index>('DataBinding/');
    public static readonly DataBinding_Advanced_ = new IntraWeb.PageLoader<DataBinding.Advanced.Index>('DataBinding/Advanced/');
    public static readonly DataBinding_Loading_ = new IntraWeb.PageLoader<DataBinding.Advanced.Index>('DataBinding/Loading/');
    public static readonly DataBinding_Repeater_ = new IntraWeb.PageLoader<DataBinding.Repeater.Index>('DataBinding/Repeater/');
    public static readonly Dialogs_ = new IntraWeb.PageLoader<DataBinding.Index>('Dialogs/');
    public static readonly Templates_FullPage_ = new IntraWeb.PageLoader<Templates.FullPage.Index>('Templates/FullPage/');
    public static readonly Templates_Internal_ = new IntraWeb.PageLoader<Templates.Internal.Index>('Templates/Internal/');
    public static readonly Templates_Multiple_ = new IntraWeb.PageLoader<Templates.Multiple.Index>('Templates/Multiple/');
    public static readonly Templates_ViaURL_ = new IntraWeb.PageLoader<Templates.ViaURL.Index>('Templates/ViaURL/');
    public static readonly Layouts_ = new IntraWeb.PageLoader<Layouts.Index>('Layouts/');
    public static readonly Layouts_Grid_ = new IntraWeb.PageLoader<Layouts.Index>('Layouts/Grid/');
    public static readonly Layouts_TabPanel_ = new IntraWeb.PageLoader<Layouts.Index>('Layouts/TabPanel/');
    public static readonly Links_ = new IntraWeb.PageLoader<Links.Index>('Links/');
    public static readonly Links_Page2 = new IntraWeb.PageLoader<Links.Page2>('Links/Page2');
    public static readonly Links_Page3 = new IntraWeb.PageLoader<Links.Page2>('Links/Page3');
    public static readonly Loadables_ = new IntraWeb.PageLoader<Loadables.Index>('Loadables/');
    public static readonly Markdown_ = new IntraWeb.PageLoader<Markdown.Index>('Markdown/');
  }
  IntraWeb.App.UserPages = MyPages;
}