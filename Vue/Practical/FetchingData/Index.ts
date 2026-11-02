namespace Vue.Practical.FetchingData {
  export class Index extends IndexGen {
    Branch = 'main';
    ApiURL = 'https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=';
    ApiSuffix = '';

    WhenBranchRadioClicked() {
      (async () => {
        const xRes = await fetch(this.ApiURL + this.Branch + this.ApiSuffix);
        const xJSON = await xRes.text();
        this.Commits.LoadJSON(xJSON);
      })();
    }

    WhenPageLoaded() {
      // VPNs often trigger GitHub rate limits because many users share the same IP.
      // When this happens, GitHub stops returning the expected JSON,
      // so this demo (as does the Vue version) breaks.
      // To avoid GitHub drama, the demo uses snapshot copies of the two files by default.
      // To run live, comment out these two lines:
      this.ApiURL = IntraWeb.URL.GetPath(this.Page.URL);
      this.ApiSuffix = '.json'

      this.WhenBranchRadioClicked(); 
    }

    Truncate(aText: string): string {
      const xNewLine = aText.indexOf('\n');
      return xNewLine > 0 ? aText.slice(0, xNewLine) : aText;
    }

    FormatDate(aDate: string): string {
      return aDate.replace(/T|Z/g, ' ');
    }
  }
}