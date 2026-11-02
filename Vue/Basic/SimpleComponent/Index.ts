namespace Vue.Basic.SimpleComponent {
  export class Index extends IndexGen {
    public WhenSmiley1Clicked(): void {
      this.Smiley1.IsHappy.Value = !this.Smiley1.IsHappy.Value;
    }

    public WhenSmiley2Clicked(): void {
      const xState = this.Smiley2.IsHappy.Value ? 'happy' : 'sad';
      IntraWeb.Dialogs.ShowMessage('I am ' + xState + '.');
    }

    public WhenSmiley3Clicked(): void {
      this.Smiley1.IsHappy.Value = true;
      this.Smiley2.IsHappy.Value = true;
      this.Smiley3.IsHappy.Value = true;
    }
  }
}