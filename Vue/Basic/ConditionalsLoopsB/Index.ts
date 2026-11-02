namespace Vue.Basic.ConditionalsLoopsB {
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

    WhenPageBeforeRender() {
      const xHTML = this.TextList.Content.Value;
      xHTML.length = 0;
      xHTML.push('<ul>');
      for (const xItem of this.List) {
        xHTML.push('<li>' + xItem + '</li>');
      }
      xHTML.push('</ul>');
    }

    ShowList = true;
    WhenToggleButtonClicked(): void {
      this.ShowList = !this.ShowList;
    }
  }
}