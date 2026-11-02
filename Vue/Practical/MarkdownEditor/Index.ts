namespace Vue.Practical.MarkdownEditor {
  // Marked Types probably exist in NPM too, but not worth adding one more NPM dependency just for this.
  declare const marked: { marked: (src: string) => string; };
  IntraWeb.Loader.LoadJS('Marked', 'https://cdn.jsdelivr.net/npm/marked/marked.min.js');

  export class Index extends IndexGen {
    WhenInputChanging(): void {
      this.Output.Content.AsString = marked.marked(this.Input.Text.AsString);
    }

    WhenPageLoaded() {
      this.WhenInputChanging();
    }
  } 
}