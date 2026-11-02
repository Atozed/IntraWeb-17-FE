namespace Tests.Parsing {
  export class Index extends IndexGen {
    WhenPageTest() {
      const T = IntraWeb.Tester;
      T.Test(this.EditMulti1.Text, ['One', ' Two', '  Three', ' Four']);
      T.Test(this.EditMulti2.Text, ['One', '', 'Two', '', 'Three']);
      T.Test(this.EditMulti3.Text, [' One', 'Two', 'Three']);
      T.Test(this.Edit1.Text, 'One');
      T.Test(this.Edit2.Text, ' Two');
      T.Test(this.Edit3.Text, ' Three ');
    }
  }
}