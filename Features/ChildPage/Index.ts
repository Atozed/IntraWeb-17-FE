namespace Features.ChildPage {
  export class Index extends IndexGen {
    public WhenPageLoaded(): void {
      this.ChildPage1.LoadPage(MyPages.ChildPage_Child.New().Page);
    }
  }
}
