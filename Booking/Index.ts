namespace Booking {
  export class Index extends IndexGen {
    Service = '';
    TimeSlot = '';

    UpdateSummary(): void {
      const xName = this.NameEdit.Text.Value.trim();
      if (!xName && !this.Service && !this.TimeSlot) {
        this.SummaryText.Text.Value = '';
        return;
      }
      let xResult = '';
      if (xName) xResult = xName;
      if (this.Service) xResult = xResult + (xResult ? ' — ' : '') + this.Service;
      if (this.TimeSlot) xResult = xResult + (xResult ? ' — ' : '') + this.TimeSlot;
      this.SummaryText.Text.Value = xResult;
    }

    WhenNameEditChanged(): void {
      this.UpdateSummary();
    }

    WhenServiceGroupClicked(): void {
      this.UpdateSummary();
    }

    WhenTimeGroupClicked(): void {
      this.UpdateSummary();
    }

    WhenBookButtonClicked(): void {
      const xName = this.NameEdit.Text.Value.trim();
      const xPhone = this.PhoneEdit.Text.Value.trim();
      const xEmail = this.EmailEdit.Text.Value.trim();

      if (!xName) {
        IntraWeb.Dialogs.ShowMessage('Please enter your full name.');
        this.NameEdit.Focus();
        return;
      }
      if (!xPhone && !xEmail) {
        IntraWeb.Dialogs.ShowMessage('Please enter a phone number or email address.');
        this.PhoneEdit.Focus();
        return;
      }
      if (!this.Service) {
        IntraWeb.Dialogs.ShowMessage('Please choose a service.');
        return;
      }
      if (!this.TimeSlot) {
        IntraWeb.Dialogs.ShowMessage('Please choose a time slot.');
        return;
      }

      const xMsg = 'Appointment booked!'
        + '\n\nName: ' + xName
        + '\nService: ' + this.Service
        + '\nTime: ' + this.TimeSlot;

      IntraWeb.Dialogs.ShowMessage(xMsg);
      this.StatusText.Text.Value = 'Your appointment is confirmed. We will contact you shortly.';
      this.BookButton.Enabled.Value = false;
    }
  }
}
