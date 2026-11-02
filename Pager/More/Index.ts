namespace Pager.More {
  export class Index extends IndexGen {
    public WhenHelloButtonClicked(): void {
      window.alert('Hello!');
    }

    public WhenCloseButtonClicked(): void {
      this.Hide();
    }

    public WhenPageLoaded(): void {
      this.StateEdit.Text.Value = (Math.floor(Math.random() * 100) + 1).toString();
    }
  }
}
