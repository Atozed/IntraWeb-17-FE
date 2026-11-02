namespace StorageDemo {
  export class Index extends IndexGen {
    _Name = '';
    _Msg = '';

    WhenPageLoaded(): void {
      const xSaved = localStorage.getItem('Name');
      if (xSaved) {
        this._Name = xSaved;
        this._Msg = 'Welcome back, ' + xSaved + '!';
      }
    }

    WhenSaveButtonClicked(): void {
      localStorage.setItem('Name', this._Name);
      this._Msg = 'Saved! Welcome, ' + this._Name + '.';
    }
  }
}
