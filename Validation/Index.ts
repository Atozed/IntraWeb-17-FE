namespace Validation {
  export class Index extends IndexGen {

    WhenPageReady() {
      this.ValidateForm();
    }

    WhenUsernameEditChanging() {
      this.ValidateForm();
    }

    WhenPasswordEditChanging() {
      this.ValidateForm();
    }

    WhenSubmitButtonClicked(){
      if (!this.ValidateForm()) {
        return;
      }
      window.alert("You’ve submitted successfully!");
    }

    private ValidateForm(): boolean {
      const ValidateField = (aValue: string, aMinLen: number): string => {
        const xValue = aValue.trim();
        if (xValue === '') return 'Required';
        if (xValue.length < aMinLen) return `Minimum length: ${aMinLen}`;
        return '';
      };

      const xUserMessage = ValidateField(this.UsernameEdit.Text.Value, 5);
      const xPasswordMessage = ValidateField(this.PasswordEdit.Text.Value, 10);
      this.UserMsgText.Text.Value = xUserMessage;
      this.PassMsgText.Text.Value = xPasswordMessage;

      const xIsValid = xUserMessage === '' && xPasswordMessage === '';
      this.SubmitButton.Enabled.Value = xIsValid;
      return xIsValid;
    }

  }
}
