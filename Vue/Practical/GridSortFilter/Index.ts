namespace Vue.Practical.GridSortFilter {
  export class Index extends IndexGen {
    Data = [
      { Name: 'Chuck Norris', Power: Infinity },
      { Name: 'Bruce Lee', Power: 9000 },
      { Name: 'Jackie Chan', Power: 7000 },
      { Name: 'Jet Li', Power: 8000 }
    ];

    WhenPageLoaded() {
      this.Table.DataArray = this.Data;
    }
  }
}