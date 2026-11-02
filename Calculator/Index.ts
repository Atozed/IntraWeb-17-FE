namespace Calculator {
  export class Index extends IndexGen {
    private xA: number = 0;
    private xB: number = 0;
    private xResult: number = 0;
    private xOp: string = '';
    private xAwaitingOperand = false;
    private xExpression = '';
    private xExpressionIndex = 0;

    WhenPageReady() {
      this.ResetCalculator();
    }

    WhenDigit0Clicked() { this.AppendDigit('0'); }
    WhenDigit1Clicked() { this.AppendDigit('1'); }
    WhenDigit2Clicked() { this.AppendDigit('2'); }
    WhenDigit3Clicked() { this.AppendDigit('3'); }
    WhenDigit4Clicked() { this.AppendDigit('4'); }
    WhenDigit5Clicked() { this.AppendDigit('5'); }
    WhenDigit6Clicked() { this.AppendDigit('6'); }
    WhenDigit7Clicked() { this.AppendDigit('7'); }
    WhenDigit8Clicked() { this.AppendDigit('8'); }
    WhenDigit9Clicked() { this.AppendDigit('9'); }

    WhenDecimalClicked() {
      this.PrepareForInput();
      if (!this.Input.Text.Value.includes('.')) {
        this.Input.Text.Value += '.';
      }
    }

    WhenInputKeyDown(aEvent: KeyboardEvent) {
      if (aEvent.key === 'Enter') {
        aEvent.preventDefault();
        this.WhenResultClicked();
      }
    }

    WhenClearClicked() {
      this.ResetCalculator();
    }

    WhenBackspaceClicked() {
      if (this.xAwaitingOperand) {
        return;
      }
      const xText = this.Input.Text.Value.slice(0, -1);
      this.Input.Text.Value = xText === '' || xText === '-' ? '0' : xText;
    }
    WhenPlusClicked() {
      this.HandleOperator('+');
    }

    WhenMinusClicked() {
      this.HandleOperator('-');
    }

    WhenMultiplyClicked() {
      this.HandleOperator('*');
    }

    WhenDivideClicked() {
      this.HandleOperator('/');
    }

    WhenResultClicked() {
      const xVal = this.EvaluateExpression(this.Input.Text.Value);
      if (xVal === null) {
        this.Input.Text.Value = 'Invalid expression';
        this.xAwaitingOperand = true;
        return;
      }

      if (this.xOp !== '') {
        this.xB = xVal;
        if (!this.Calculate()) {
          return;
        }
        this.xA = this.xResult;
      } else {
        this.xA = xVal;
      }

      this.Input.Text.Value = this.xA.toString();
      this.xOp = '';
      this.xAwaitingOperand = true;
    }

    private HandleOperator(aOp: string): void {
      const xVal = this.EvaluateExpression(this.Input.Text.Value);
      if (xVal === null){
        return;
      }

      if (this.xOp !== '' && !this.xAwaitingOperand) {
        this.xB = xVal;
        if (!this.Calculate()) {
          return;
        }
        this.xA = this.xResult;
        this.Input.Text.Value = this.xResult.toString();
      } else {
        this.xA = xVal;
      }

      this.xOp = aOp;
      this.xAwaitingOperand = true;
    }

    private Calculate(): boolean {
      switch (this.xOp) {
        case '+': this.xResult = this.xA + this.xB; return true;
        case '-': this.xResult = this.xA - this.xB; return true;
        case '*': this.xResult = this.xA * this.xB; return true;
        case '/':
          if (this.xB === 0) {
            this.Input.Text.Value = 'Cannot divide by zero';
            this.xOp = '';
            this.xAwaitingOperand = true;
            return false;
          }
          this.xResult = this.xA / this.xB;
          return true;
        default: return false;
      }
    }

    private AppendDigit(aDigit: string): void {
      this.PrepareForInput();
      this.Input.Text.Value = this.Input.Text.Value === '0'
        ? aDigit
        : this.Input.Text.Value + aDigit;
    }

    private PrepareForInput(): void {
      if (this.xAwaitingOperand || this.Input.Text.Value === 'Cannot divide by zero') {
        this.Input.Text.Value = '0';
        this.xAwaitingOperand = false;
      }
    }

    private ResetCalculator(): void {
      this.xA = 0;
      this.xB = 0;
      this.xResult = 0;
      this.xOp = '';
      this.xAwaitingOperand = false;
      this.Input.Text.Value = '0';
    }

    private EvaluateExpression(aText: string): number | null {
      this.xExpression = aText.trim().replaceAll(',', '.').replaceAll('×', '*').replaceAll('÷', '/');
      this.xExpressionIndex = 0;
      const xValue = this.ReadSum();
      this.SkipWhitespace();
      return xValue !== null && this.xExpressionIndex === this.xExpression.length && Number.isFinite(xValue)
        ? xValue
        : null;
    }

    private ReadSum(): number | null {
      let xValue = this.ReadProduct();
      while (xValue !== null) {
        this.SkipWhitespace();
        const xOperator = this.xExpression[this.xExpressionIndex];
        if (xOperator !== '+' && xOperator !== '-') {
          break;
        }
        this.xExpressionIndex++;
        const xRight = this.ReadProduct();
        if (xRight === null) {
          return null;
        }
        xValue = xOperator === '+' ? xValue + xRight : xValue - xRight;
      }
      return xValue;
    }

    private ReadProduct(): number | null {
      let xValue = this.ReadValue();
      while (xValue !== null) {
        this.SkipWhitespace();
        const xOperator = this.xExpression[this.xExpressionIndex];
        if (xOperator !== '*' && xOperator !== '/') {
          break;
        }
        this.xExpressionIndex++;
        const xRight = this.ReadValue();
        if (xRight === null || (xOperator === '/' && xRight === 0)) {
          return null;
        }
        xValue = xOperator === '*' ? xValue * xRight : xValue / xRight;
      }
      return xValue;
    }

    private ReadValue(): number | null {
      this.SkipWhitespace();
      const xCharacter = this.xExpression[this.xExpressionIndex];
      if (xCharacter === '+' || xCharacter === '-') {
        this.xExpressionIndex++;
        const xValue = this.ReadValue();
        return xValue === null ? null : xCharacter === '-' ? -xValue : xValue;
      }
      if (xCharacter === '(') {
        this.xExpressionIndex++;
        const xValue = this.ReadSum();
        this.SkipWhitespace();
        if (xValue === null || this.xExpression[this.xExpressionIndex] !== ')') {
          return null;
        }
        this.xExpressionIndex++;
        return xValue;
      }
      const xMatch = /^(?:\d+\.?\d*|\.\d+)/.exec(this.xExpression.slice(this.xExpressionIndex));
      if (!xMatch) {
        return null;
      }
      this.xExpressionIndex += xMatch[0].length;
      return Number(xMatch[0]);
    }

    private SkipWhitespace(): void {
      while (/\s/.test(this.xExpression[this.xExpressionIndex] ?? '')) {
        this.xExpressionIndex++;
      }
    }
  }
}
