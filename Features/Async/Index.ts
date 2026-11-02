namespace Features.Async {
  export class Index extends IndexGen {
    _BaseURL!: string;
    WhenPageLoaded(): void {
      this._BaseURL = IntraWeb.URL.GetPath(this.Page.URL);
    }

    WhenThenButtonClicked(): void {
      this.OutputEdit.Text.Clear();
      fetch(this._BaseURL + 'Index.gen.ts')
        .then(aRes => aRes.text())
        .then(aText => {
          this.OutputEdit.Text.AsString = aText;
        }
      );
    }

    WhenAwaitButtonClicked(): void {
      this.OutputEdit.Text.Clear();
      (async () => {
        const xRes = await fetch(this._BaseURL + 'Index.iwml');
        const xJSON = await xRes.text();
        this.OutputEdit.Text.AsString = xJSON;
      })();
    }

    WhenSyncButtonClicked(): void {
      this.OutputEdit.Text.AsString = Atozed.HTTP.Get(this._BaseURL + 'Index.ts');;
    }
  }
}