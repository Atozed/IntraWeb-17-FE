namespace Vue {
  export class Index extends IndexGen {
    LoadURL(aURL: string): void {
      this.DemoSpace.URL.Value = aURL;
    }

    AddMenu(aName: string, aPages: Array<IntraWeb.PageLoader<any>>): void{
      const xHeader = new IntraWeb.Controls.Header();
      xHeader.Level.Value = 3;
      xHeader.Text.Value = aName;
      this.Menu.Add(xHeader);

      for (const xPage of aPages) {
        const xLink = new IntraWeb.Controls.Link();
        xLink.Text.Value = xPage.Description;

        xLink.WhenClicked.Attach(() => {
          this.VueStack.Show();
          this.VueLink.URL.Value = 'https://vuejs.org/examples/#' + (xPage as any).__VueBM;
          this.LoadPage(xPage);
        });

        this.Menu.Add(xLink);
      }
    }

    _FramePath: string;
    LoadPage(aPage: IntraWeb.PageLoader<any>): void {
      const xURL = this._FramePath + 'Frame.html' + '?' + aPage.ID;
      this.LoadURL(xURL);
    }

    WhenPageLoaded(): void {
      this._FramePath = IntraWeb.URL.GetPath(IntraWeb.Boot.LoaderURL);

      this.LoadPage(MyPages.Opener);

      const xPages = new Array<IntraWeb.PageLoader<any>>();
      const AddPage = (aPage: IntraWeb.PageLoader<any>, aName: string, aVueBM: string) => {
        aPage.Description = aName;
        (aPage as any).__VueBM = aVueBM;
        xPages.push(aPage);
      }

      AddPage(MyPages.Basic_HelloWorld_, 'Hello World', 'hello-world');
      AddPage(MyPages.Basic_HandlingUserInput_, 'Handling User Input', 'handling-input');
      AddPage(MyPages.Basic_AttribBindings_, 'Attribute Bindings', 'attribute-bindings');
      AddPage(MyPages.Basic_ConditionalsLoopsA_, 'Conditionals & Loops A', 'conditionals-and-loops');
      AddPage(MyPages.Basic_ConditionalsLoopsB_, 'Conditionals & Loops B', 'conditionals-and-loops');
      AddPage(MyPages.Basic_FormBindings_, 'Form Bindings', 'form-bindings');
      AddPage(MyPages.Basic_SimpleComponent_, 'Simple Component', 'simple-component');
      this.AddMenu('Basic', xPages);

      xPages.length = 0;
      AddPage(MyPages.Practical_MarkdownEditor_, 'Markdown Editor', 'markdown');
      AddPage(MyPages.Practical_FetchingData_, 'Fetching Data', 'fetching-data');
      AddPage(MyPages.Practical_GridSortFilter_, 'Grid with Sort & Filter', 'grid');
      AddPage(MyPages.Practical_TreeView_, 'TreeView', 'tree');
      AddPage(MyPages.Practical_SvgGraph_, 'SVG Graph', 'svg');
      // These two pages only demonstrate visual transitions. They do not contain application logic.
      // The same effects can be recreated with CSS styles, but porting them has not been a priority yet. 
      // In developer terms, they are decorative smoke, not load-bearing walls.
      // AddPage(MyPages.Practical_ModalTransitions_, 'Modal Transitions', 'modal');
      // AddPage(MyPages.Practical_ListTransitions_, 'List Transitions', 'list-transition');
      this.AddMenu('Practical', xPages);

      xPages.length = 0;
      AddPage(MyPages.GUIs_Counter_, 'Counter', 'counter');
      AddPage(MyPages.GUIs_TempConverter_, 'Temperature Converter', 'temperature-converter');
      AddPage(MyPages.GUIs_FlightBooker_, 'Flight Booker', 'flight-booker');
      AddPage(MyPages.GUIs_Timer_, 'Timer', 'timer');
      AddPage(MyPages.GUIs_CRUD_, 'CRUD', 'crud');
      AddPage(MyPages.GUIs_CircleDrawer_, 'Circle Drawer', 'circle-drawer');
      AddPage(MyPages.GUIs_Cells_, 'Cells', 'cells');
      this.AddMenu('GUIs', xPages);
    }
  }
}
