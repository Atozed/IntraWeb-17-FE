namespace Vue.Basic.HandlingUserInput {
  export class Index extends IndexGen {
    Message = 'Hello World!';

    WhenReverseButtonClicked() {
      this.Message = this.Message.split('').reverse().join('');
    }

    WhenAppendButtonClicked() {
      this.Message += '!';
    }

    WhenLink1Clicked() {
      alert('Link1 was clcked.');
    }
  }
}