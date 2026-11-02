namespace Vue.GUIs.Counter {
  export class Index extends IndexGen {
    Count = 0;

    WhenCountButtonClicked() {
      this.Count++;
    }
  }
}