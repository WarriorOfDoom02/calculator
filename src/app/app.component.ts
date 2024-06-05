import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';

  calValue: number = 0;
  funcT: any = 'NoFunction';

  calNumber: string = 'noValue'

  firstNumber: number = 0;
  secondNumber: number = 0;

  onClickValue (val: string, type: any) {

    if (type == 'number') {
      this.onNumberClick(val);
    } else if (type == 'function') {
      this.onFunctionClick(val);
    }
  }

  onNumberClick(val: string) {

    if (this.calNumber != 'noValue') {
      this.calNumber += val;
    } else {
      this.calNumber = val;
    }

    this.calValue = parseFloat(this.calNumber);
  }

  onFunctionClick(val: string) {

    if (this.funcT == "C") {this.clearAll()}

    if (this.funcT == 'NoFunction') {
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'noValue';
      this.funcT = val;
    } else if (this.funcT != 'NoFunction') {
      this.secondNumber = this.calValue;
      
      this.valueCalculator(val);
    }

  }

  valueCalculator(val: string) {

    if (this.funcT == '+') {
      const result = this.firstNumber + this.secondNumber;
      this.totalAssignValues(result, val)
    } else if (this.funcT == '-') {
      const result = this.firstNumber - this.secondNumber;
      this.totalAssignValues(result, val)    
    } else if (this.funcT == '*') {
      const result = this.firstNumber * this.secondNumber;
      this.totalAssignValues(result, val)    
    } else if (this.funcT == '/') {
      const result = this.firstNumber / this.secondNumber;
      this.totalAssignValues(result, val)
    } else if (this.funcT == '%') {
      const result = this.firstNumber % this.secondNumber;
      this.totalAssignValues(result, val)
    }
  }

  totalAssignValues(result: number, val: string) {

    this.calValue = result;
    this.firstNumber = result;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funcT = val;
    if (val == '=') { this.onEqualPress() }
  }

  onEqualPress() {

    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = 'NoFunction'
    this.calNumber = 'noValue'
  }

  clearAll() {

    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calValue = 0;
    this.funcT = 'NoFunction';
    this.calNumber = 'noValue';
  }
}
