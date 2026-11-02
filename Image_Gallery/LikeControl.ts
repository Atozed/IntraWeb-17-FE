namespace IntraWeb.Controls.LikeControl {
  export class Like extends Control {
    public readonly Text = new Atozed.Props.String(this, '');;
    public readonly IsLiked = new Atozed.Props.Boolean(this, false);
    public readonly FontSize = new Props.Size(this);
    public readonly WhenClicked = new DomEvent(this, 'click');

    protected _Div: HTMLDivElement = null;
    protected override CreateRoot(): HTMLElement {
      return this._Div = IntraWeb.New.Div();
    }

    public GetParams(): Atozed.Props.Params { return [this.Text, this.IsLiked, this.FontSize]; }  

    protected Render(): void {
      super.Render();
      this._Div.style.cursor = 'pointer';
      this._Div.style.display = 'inline-block';
      this._Div.style.fontSize = this.FontSize.AsString;
      
      this._Div.style.transition = 'transform 0.15s';
      this._Div.onmouseenter = () => this._Div.style.transform = 'scale(1.2)';
      this._Div.onmouseleave = () => this._Div.style.transform = 'scale(1.0)';

      this._Div.innerHTML = this.IsLiked.IsTrue ? "♥️" : "🤍";
    }
  }
}
