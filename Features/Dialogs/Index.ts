namespace Features.Dialogs {
  export class Index extends IndexGen {
    WhenShowMessageButtonClicked(): void {
      IntraWeb.Dialogs.ShowMessage('Hello!');
    }

    WhenYesNoButtonClicked(): void {
      IntraWeb.Dialogs.YesNo('Do you like ice cream?',
         (aValue: boolean) => { 
           this.YesNoResultText.Text.Value = aValue ? 'You like ice cream!' : 'What?????'
         }
      );
    }

    WhenGetTextButtonClicked(): void {
      IntraWeb.Dialogs.GetText('What is your favorite color?',
        (aText: string) => {
          if (aText) this.GetTextResultText.Text.Value = 'Your favorite color is ' + aText;
        }
        , 'Green'
      );
    }

    WhenMultChoiceButtonClicked(): void {
      const xColors = ['Red', 'Green', 'Blue'];
      IntraWeb.Dialogs.MultChoice('What is your favorite color?', xColors,
        (aValue: number) => {
          this.MultChoiceResultText.Text.Value = '';
          if (aValue != null) this.MultChoiceResultText.Text.Value = 'Your favorite color is ' + xColors[aValue];
        }
      );
    }

    WhenMemoButtonClicked(): void {
      IntraWeb.Dialogs.EditMemo('Edit the text how you like:', 
        (aValue: Array<string>) => {
          if (aValue != null) this.MemoEditMulti.Text.Value = aValue;
        }
        , this.MemoEditMulti.Text.Value, this.MemoFullCheckBox.Checked.Value
      );
    }
  }
}