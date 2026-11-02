namespace Features.Templates.FullPage {
  export class Index extends IndexGen {
    public WhenButton1Clicked(): void {
      window.alert('Hello ' + this.Edit1.Text.Value);
    }

    public WhenButton2Clicked(): void {
      this.DOM.Target.textContent = this.Edit2.Text.Value;
    }
  }
}
