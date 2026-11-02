namespace GuessTemplate {
  export class Index extends IndexGen {
    public Count = 0;
    // Must init to a value so it has a type and exists.
    public Guess = NaN;
    public Msg = '';
    protected MagicNo = Math.floor((Math.random() * 100) + 1);

    public WhenPageLoaded(): void {
      const xMagicNo = this.Page.WebParam('MagicNo');
      if (xMagicNo) this.MagicNo = parseInt(xMagicNo);
    }

    public WhenGuessButtonClicked(e: MouseEvent): void {
      if (e && e.shiftKey) {
        IntraWeb.Dialogs.ShowMessage('The magic number is: ' + this.MagicNo);
        return;
      }

      this.Msg = '';
      if (isNaN(this.Guess)) {
        // Need to retrieve value from Edit itself when its an invalid number
        this.Msg = this.GuessEdit.Text.Value + ' is not a valid number.';
      } else if (this.Guess < 1 || this.Guess > 100) {
        this.Msg = this.Guess + ' is not in the range of 1 to 100.';
      } else {
        this.Count++;
        this.CountText.Text.Value = 'Attempts: ' + this.Count;

        if (this.Guess < this.MagicNo) {
          this.Msg = this.Guess + ' is too low.';
        } else if (this.Guess > this.MagicNo) {
          this.Msg = this.Guess + ' is too high.';
        } else if (this.Guess === this.MagicNo) {
          IntraWeb.Dialogs.ShowMessage('Congratulations! You guessed the magic number.');
          this.GuessButton.Enabled.Value = false;
        }
      }

      this.GuessEdit.Focus();
      this.Guess = NaN;
    }
  }
}
