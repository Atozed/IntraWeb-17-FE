namespace Pager {
  export class PageA extends PageAGen {
    public WhenPageLoaded(): void {
      this.StateEdit.Text.Value = (Math.floor(Math.random() * 100) + 1).toString();
    }
    
    public WhenCloseButtonClicked(): void {
      this.Hide();
    }
  }
}
