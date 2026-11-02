namespace Vue.Basic.ConditionalsLoopsA {
  export class Index extends IndexGen {
    List = [1, 2, 3];

    WhenPopButtonClicked(): void {
      this.List.pop();
    }

    WhenPushButtonClicked(): void {
      this.List.push(this.List.length + 1);
    }

    WhenReverseButtonClicked(): void {
      this.List.reverse();
    }

    ShowList = true;
    WhenToggleButtonClicked(): void {
      this.ShowList = !this.ShowList;
    }
  }
}