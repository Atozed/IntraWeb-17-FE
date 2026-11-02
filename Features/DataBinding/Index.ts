namespace Features.DataBinding {
  export class Index extends IndexGen {
    MagicNo = 42;
    Message = 'Hello';

    WhenThisButtonClicked() {
      this.MagicNo++;
      this.Message = 'Hello World!';
    }
  }
}