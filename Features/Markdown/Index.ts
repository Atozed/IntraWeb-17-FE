namespace Features.Markdown {
  export class Index extends IndexGen {
    MagicNo = 42;
    Message = 'Hello';

    WhenThisButtonClicked() {
      this.MagicNo++;
      this.Message = 'Hello World!';
    }

    WhenPageLoaded() {
      const xItems = new Array<string>();
      for (const xTagHandler of IntraWeb.Markdown.Handlers) {
        xItems.push(xTagHandler.Tag);
      }
      this.TagList.Items.Value = xItems.sort();
    }
  }
}

IntraWeb.Markdown.AddHandler('Atozed-UpperCase', (aTag: IntraWeb.Tag) => aTag.Data.toUpperCase() );