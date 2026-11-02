namespace Vue.GUIs.CRUD {
  export class Index extends IndexGen {
    Names = ['Emil, Hans', 'Mustermann, Max', 'Tisch, Roman'];
    FilteredNames = [''];

    WhenPageLoaded() { this.FilteredNames = this.Names; }
    WhenFilterEditChanging() { this.UpdateFilter(); }

    UpdateFilter() {
      this.FilteredNames = this.Names.filter((n) => n.toLowerCase().startsWith(this.FilterEdit.Text.Value.toLowerCase()));
    }

    HasValidInput(): boolean {
      return this.NameEdit.Text.HasText && this.SurnameEdit.Text.HasText;
    }

    WhenCreateButtonClicked() {
      if (!this.HasValidInput()) return;
      const xFullName = `${this.SurnameEdit.Text.Value}, ${this.NameEdit.Text.Value}`;
      if (this.Names.includes(xFullName)) return;
      this.Names.push(xFullName);
      this.NameEdit.Text.Value = '';
      this.SurnameEdit.Text.Value = '';
      this.UpdateFilter();
    }

    WhenUpdateButtonClicked() {
      if (!this.HasValidInput() || this.NamesListBox.Index.Value < 0) return;
      const i = this.Names.indexOf(this.NamesListBox.Text.Value);
      this.Names[i] = `${this.SurnameEdit.Text.Value}, ${this.NameEdit.Text.Value}`;
      this.UpdateFilter();
    }

    WhenDeleteButtonClicked() {
      if (this.NamesListBox.Index.Value < 0) return;
      const i = this.Names.indexOf(this.NamesListBox.Text.Value);
      this.Names.splice(i, 1);
      this.NameEdit.Text.Value = '';
      this.SurnameEdit.Text.Value = '';
      this.UpdateFilter();
    }

    WhenNamesListBoxSelectionChanged() {
      const xNames = this.NamesListBox.Text.Value.split(', ');
      this.NameEdit.Text.Value = xNames[1];
      this.SurnameEdit.Text.Value = xNames[0];
    }
  }
}