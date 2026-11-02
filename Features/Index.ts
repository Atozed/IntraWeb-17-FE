namespace Features {
  export class Index extends IndexGen {
    LoadPage(aPage: IntraWeb.Page): void {
      this.DemoSpace.LoadPage(aPage);
    }

    NewWindow(aLink: IntraWeb.Controls.Link, aURL: string): void {
      aLink.URL.Value = aURL;
      aLink.Target.Value = '_blank';
      aLink.Relation.Value = 'noopener noreferrer';
    }

    Link(aText: string, aURL: string): HTMLAnchorElement {
      aURL = IntraWeb.URL.Expand(this.Page.UrlPath, aURL);
      const xResult = IntraWeb.New.Anchor(null, aText, aURL);
      xResult.target = '_blank';
      xResult.rel = 'noopener noreferrer';
      return xResult;
    }

    WhenMenuTreeClicked(aNode: IntraWeb.Controls.TreeListNode): void {
      if (typeof aNode.Tag === 'string') {
        if (aNode.Tag === 'PageOnly_') {
          this.DemoSpace.LoadURL('PageOnly/Index.iwml');
        } else {
          throw Error('Unknown menu option: ' + aNode.Tag);
        }
      } else {
        const xLoader = aNode.Tag as IntraWeb.PageLoader<IntraWeb.Code>;
        this.LoadPage(xLoader.New().Page);
      }
    }

    CreateNodes(aPrefix: string, aPages: Array<string>, aParentNodes: IntraWeb.Controls.TreeListNodes): void {
      const xNodes = new Array<string>();
      for (const xPageName of aPages) {
        if (xPageName.startsWith(aPrefix)) {
          const xName = xPageName.substring(aPrefix.length);
          if (xName) {
            const xText = xName.split('_')[0];
            if (!xNodes.includes(xText)) {
              xNodes.push(xText);
              // Split with spaces by capital letters, but not grouped (ie XML) Capital letters.
              const xTitle = xText.replace(/([a-z])([A-Z])/g, '$1 $2');

              const xLoader = (MyPages as any)[xPageName] as IntraWeb.PageLoader<IntraWeb.Code>;
              let xLink: HTMLAnchorElement;
              if (xLoader === MyPages.Links_) {
                xLink = this.Link(xTitle, 'Links/Index.html');
              } else if (xLoader === MyPages.Layouts_Grid_) {
                xLink = this.Link(xTitle, 'Layouts/Grid/Index.html');
              }

              const xTag = xLoader ?? xPageName;
              const xNode = this.MenuTree.CreateNode(xTitle, xTag, xLink);
              aParentNodes.Add(xNode);

              this.CreateNodes(xPageName, aPages, xNode.Nodes);
            }
          }
        }
      }
    }

    WhenPageReady(): void {
      this.LoadPage(MyPages.Opener.New().Page);

      // Get list of pages for menu
      let xPages = new Array<string>();
      for (const xName in MyPages) {
        const xLoader = (MyPages as any)[xName];
        if (xLoader instanceof IntraWeb.PageLoader) {
          if (xName.endsWith('_')) xPages.push(xName);
        }
      }
      // Has no code, only IWML we manually add an entry.
      xPages.push('PageOnly_');
      xPages = xPages.sort();

      this.CreateNodes('', xPages, this.MenuTree.Nodes);
    }
  }
}
