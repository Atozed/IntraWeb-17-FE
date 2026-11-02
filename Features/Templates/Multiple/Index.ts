namespace Features.Templates.Multiple {
  export class Index extends IndexGen {
    public WhenButton1Clicked(): void {
      window.alert('Hello ' + this.Edit1.Text.Value);
    }

    public WhenButton2Clicked(): void {
      window.alert('Boo!');
    }

    public WhenButton3Clicked(): void {
      window.alert('Fascinated yet?');
    }
}
}
