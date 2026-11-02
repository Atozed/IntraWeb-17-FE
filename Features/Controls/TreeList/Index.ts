namespace Features.Controls.TreeList {
  export class Index extends IndexGen {
    WhenTree1Clicked(aNode: IntraWeb.Controls.TreeListNode): void {
      this.Text1.Text.Value = aNode.Tag;
    }

    WhenTree2CreateNodeElement(aText: string, aTag: any): HTMLElement | undefined {
      if (!aTag) return undefined;
      return IntraWeb.New.Button(null, aText);
    }

    WhenTree3GetNodeText(aNode: IntraWeb.Controls.TreeListNode, aText: string): string {
      if (aNode.Nodes.length) return '[b:' + aText + ']';
      return aText;
    }
  }
}
