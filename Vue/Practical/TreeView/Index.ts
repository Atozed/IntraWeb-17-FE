namespace Vue.Practical.TreeView {
  export class Index extends IndexGen {
    WhenTree1Clicked(aNode: IntraWeb.Controls.TreeListNode): void {
      if (aNode.Text === '+') {
        aNode.ParentNodes.AddText('new stuff', undefined, -1);
      }
    }

    WhenTree1DoubleClicked(aNode: IntraWeb.Controls.TreeListNode): void {
      if (aNode.Nodes.length) return;
      aNode.Nodes.AddText('new stuff');
      aNode.Nodes.AddText('+');
    }

    WhenTree1GetNodeText(aNode: IntraWeb.Controls.TreeListNode, aText: string): string {
      if (aNode.Nodes.length) return '[b:' + aText + ']';
      return aText;
    }
  }
}