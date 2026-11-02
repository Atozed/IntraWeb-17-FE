namespace Vue.GUIs.CircleDrawer {
  export class Index extends IndexGen {
    RedoList = new Array<IntraWeb.Controls.SVG.Element>();
    SelectedCircle: IntraWeb.Controls.SVG.Circle;
    SelectedPos = '';

    WhenSVGContextMenu(a: PointerEvent) {
      const xCircle = this.SVG.FindElemFromEvent(a) as IntraWeb.Controls.SVG.Circle;
      if (xCircle) {
        this.Select(xCircle);
        this.SelectedPos = xCircle.X + ', ' + xCircle.Y;
        this.RadiusSlider.Value.Value = Number(xCircle.Radius);
        this.AdjustDialog.Show();
        a.preventDefault();
      }
    }

    Select(aCircle: IntraWeb.Controls.SVG.Circle) {
      this.SelectedCircle = aCircle;
      for (const x of this.SVG.Elements) {
        (x as IntraWeb.Controls.SVG.Circle).Fill = x === this.SelectedCircle ? '#ccc' : '#fff';
      }
    }

    WhenSVGClicked(a: PointerEvent) {
      if (this.AdjustDialog.Visible.Value) {
        this.AdjustDialog.Hide();
      } else {
        const xCircle = this.SVG.FindElemFromEvent(a) as IntraWeb.Controls.SVG.Circle;
        if (xCircle) {
          this.Select(xCircle);
        } else {
          const xCircle = this.SVG.NewCircle();
          const xPoint = this.SVG.PointFromEvent(a);
          xCircle.X = xPoint.x
          xCircle.Y = xPoint.y;
          xCircle.Radius = 50;
          xCircle.StrokeColor = '#000';
          xCircle.Fill = '#fff';
        }
      }
    }

    WhenRadiusSliderChanging() {
      this.SelectedCircle.Radius = this.RadiusSlider.Value.Value;
    }

    WhenPageBeforeRender() { 
      this.UndoButton.Enabled.Value = this.SVG.Elements.length > 0;
      this.RedoButton.Enabled.Value = this.RedoList.length > 0;
    }

    WhenUndoButtonClicked() {
      const xElem = this.SVG.Elements.at(-1);
      this.SVG.Remove(xElem);
      this.RedoList.push(xElem);
    }

    WhenRedoButtonClicked() {
      const xElem = this.RedoList.pop();
      this.SVG.Add(xElem);
    }
  }
}