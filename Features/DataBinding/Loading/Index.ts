namespace Features.DataBinding.Loading {
  export class Index extends IndexGen {
    WhenButtonVendor3SyncClicked() {
      const xJSON = this.Page.GetURL('Vendors3A.json')
      this.Vendors3.LoadJSON(xJSON);
    }

    WhenButtonVendor3AsyncClicked() {
      (async () => {
        const xURL = IntraWeb.URL.Expand(this.Page.UrlPath, 'Vendors3B.json');
        const xRes = await fetch(xURL);
        const xJSON = await xRes.text();
        this.Vendors3.LoadJSON(xJSON);
      })();
    }
  }
}