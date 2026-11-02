namespace Features.Templates.ViaURL {
  export class Index extends IndexGen {
    public WhenButton1Clicked(): void {
      window.alert('Hello ' + this.Edit1.Text.Value);
    }
  }
}
