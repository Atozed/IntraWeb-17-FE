namespace Vue.GUIs.FlightBooker {
  export class Index extends IndexGen {
    BeginDate = new Date();
    EndDate = new Date();
    IsReturn = false;

    WhenPageUpdate() {
      this.IsReturn = this.FlightType.Value.Value === 'Return'; 
      this.Date2.Enabled.Value = this.IsReturn;
      this.ReturnText.Visible.Value = this.IsReturn && this.EndDate < this.BeginDate;
    }

    WhenBookButtonClicked() {
      const xMsg = 'You have booked a ' + this.IsReturn ?
        `return flight leaving on ${this.BeginDate.toISOString().split('T')[0]} and returning on ${this.EndDate.toISOString().split('T')[0]}.` :
        `one-way flight leaving on ${this.BeginDate.toISOString().split('T')[0]}.`;
      window.alert(xMsg);
    }
  }
}