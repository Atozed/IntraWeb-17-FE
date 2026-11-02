namespace IntraWeb.Controls.SampleControl {
  export class Smiley extends Control {
    public readonly IsHappy = new Atozed.Props.Boolean(this, true);
    public readonly WhenClicked = new DomEvent(this, 'click');

    protected _Button!: HTMLButtonElement;
    protected override CreateRoot(): HTMLElement { 
      return this._Button = IntraWeb.New.Button();
    }

    public override GetParams(): Atozed.Props.Params { return [this.IsHappy]; }  

    protected override Render(): void {
      super.Render();
      this._Button.innerHTML = this.IsHappy.IsTrue ? ":)" : ":(";
    }
  }
}
