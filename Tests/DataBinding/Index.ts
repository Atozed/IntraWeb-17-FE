namespace Tests.DataBinding {
  export class Index extends IndexGen {
    MagicNo = 42;
    Message = 'Hello';

    Test22(): number { return 22; }
    Add1(aValue: number): number { return aValue + 1; }
    AddTest(aValue: string): string { return aValue + 'Test'; }
    Concat(aValue1: string, aValue2: string): string { return aValue1 + aValue2; }
  }
}