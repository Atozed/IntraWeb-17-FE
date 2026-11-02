namespace Tests {
  export class MyPages {
    public static readonly Index = new IntraWeb.PageLoader<Index>('Index');
    public static readonly DataBinding_ = new IntraWeb.PageLoader<DataBinding.Index>('DataBinding/');
  }
  IntraWeb.App.UserPages = MyPages;
}
