namespace Image_Gallery {
  export class MyPages {
    public static readonly Index = new IntraWeb.PageLoader<Index>("Index");
  }
  IntraWeb.App.UserPages = MyPages;
}
