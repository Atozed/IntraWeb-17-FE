namespace Features.Controls.RadioGroup {
  export class Index extends IndexGen {
    Value1 = 1;
    Value2 = 'A';

    WhenGroup2Clicked() {
      this.Value2 = this.Group2.Value.Value;
    }
 
    WhenRadio2AClicked() { this.Text2.Text.Value = 'Click 2A'; }
    WhenRadio2BClicked() { this.Text2.Text.Value = 'Click 2B'; }
  }
}
