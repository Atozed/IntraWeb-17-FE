namespace Vue.Basic.FormBindings {
  export class Index extends IndexGen {
    Text = 'Edit me';
    Checked = false;
    CheckedNames: any = new Object();
    CheckedNamesList = '';
    Picked = '';
    MilkPicked = '';
    PickedOther = '';
    SelectItem = 'A';
    MultiSelectItems = '';

    WhenMulti1SelectionChanged() {
      this.MultiSelectItems = JSON.stringify(this.Multi1.SelectedTexts.Value).replace(/,/g, ', ');
    }

    CheckboxClicked() {
      const xCB = this.EventSender as IntraWeb.Controls.CheckBox;
      this.CheckedNames[xCB.Text.Value] = xCB.Checked.Value;

      const x = this.CheckedNames;
      this.CheckedNamesList = Object.keys(x).filter(q => x[q]).sort().join(', ');
    }
    WhenJackCBClicked() { this.CheckboxClicked(); }
    WhenJohnCBClicked() { this.CheckboxClicked(); }
    WhenMikeCBClicked() { this.CheckboxClicked(); }
  }
}