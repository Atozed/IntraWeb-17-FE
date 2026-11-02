namespace Features.Controls.List {
  class Random extends Object {
    public override toString(): string { return IntraWeb.LUID.Get(); };
  }

  export class Index extends IndexGen {

    ObjectList = new Array<any>();
    WhenPageLoaded(): void {
      this.ObjectList.push('string');
      this.ObjectList.push('22');
      // This is a cool feature. It allows you to use objects to provide live values.
      // For the demo, we just provide random values, but you can use this to return any 
      // values you want.
      this.ObjectList.push(new Random());
      this.ObjectList.push(new Random());
    }
    
    WhenButton1Clicked(): void {
      // No code needed. Any event will cause the page to refresh.
    }
  }
}
