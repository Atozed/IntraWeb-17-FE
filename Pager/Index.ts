namespace Pager {
  export class Index extends IndexGen {
    public WhenOtherIndexButtonClicked(): void {
      MyPages.More_.Show();
    }

    public WhenOtherIndexParamButtonClicked(): void {
      const xPage = MyPages.More_.New();
      xPage.StateEdit.Text.Value = 'Im a param from /Index!';
      xPage.Show();
    }

    public WhenPageLoaded(): void {
      this.StateEdit.Text.Value = (Math.floor(Math.random() * 100) + 1).toString();
    }

    public WhenPageANewButtonClicked(): void {
      MyPages.PageA.Show();
    }

    private _PageA1!: PageA;
    public WhenPageAInstance1ButtonClicked(): void {
      if (!this._PageA1) this._PageA1 = MyPages.PageA.New();
      this._PageA1.Show();
    }

    private _PageA2!: PageA;
    public WhenPageAInstance2ButtonClicked(): void {
      if (!this._PageA2) this._PageA2 = MyPages.PageA.New();
      this._PageA2.Show();
    }
  }
}