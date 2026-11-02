namespace Pager {
  export class MyPages {
    public static Index = new IntraWeb.PageLoader<Index>('Index');
    public static PageA = new IntraWeb.PageLoader<PageA>('PageA');
    public static More_ = new IntraWeb.PageLoader<More.Index>('More/Index');
  }
  IntraWeb.App.UserPages = MyPages;
}