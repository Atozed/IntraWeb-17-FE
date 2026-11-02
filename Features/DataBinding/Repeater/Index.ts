namespace Features.DataBinding.Repeater {
  export class Index extends IndexGen {
    WhenAddVendorButtonClicked() {
      this.Vendors.Dataset.AddRow({ ID: -1, Name: 'New Vendor' });
    }
  }
}