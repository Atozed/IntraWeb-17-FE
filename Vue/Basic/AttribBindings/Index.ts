namespace Vue.Basic.AttribBindings {
  export class Index extends IndexGen {
    Message = 'Hello World!';
    Color = 'green';

    WhenGreenTextClicked() {
      this.GreenText.Color.Value = this.GreenText.Color.Value === 'green' ? 'blue' : 'green';
    }

    WhenRedTextClicked() {
      this.RedText.Color.Value = this.RedText.Color.Value === '' ? 'red' : '';
    }
  }
}