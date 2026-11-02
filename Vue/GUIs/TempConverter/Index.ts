namespace Vue.GUIs.TempConverter {
  export class Index extends IndexGen {
    C = 0;
    F = 32;

    WhenEditCChanged() { this.F = this.C * (9 / 5) + 32; }
    WhenEditFChanged() { this.C = (this.F - 32) * (5 / 9); }
  }
}