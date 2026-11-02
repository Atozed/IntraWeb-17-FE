namespace Features.DataBinding.Advanced {
  export class Index extends IndexGen {
    WhenPrevButtonClicked() { this.Purchases.Dataset.MovePrior(); }
    WhenNextButtonClicked() { this.Purchases.Dataset.MoveNext(); }

    WhenPrevUsersButtonClicked() { this.Users.Dataset.MovePrior(); }
    WhenNextUsersButtonClicked() { this.Users.Dataset.MoveNext(); }
  }
}