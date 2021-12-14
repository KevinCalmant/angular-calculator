import { Component } from '@angular/core';
import { rows } from './misc/rows';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-calculator';
  rows = rows;

  calculation: string = '';
  result: number = 0;

  handleOperation(operation: string): void {
    if (operation === 'clear') {
      this.calculation = '';
      this.result = 0;
    } else if (operation === '=') {
      const calcEval = eval(this.calculation);
      if (isNaN(calcEval)) {
        this.result = 0;
      } else {
        this.result = calcEval;
        this.calculation = '';
      }
    } else if (isNaN(+operation)) {
      this.calculation = this.calculation + ' ' + operation + ' ';
    } else {
      this.calculation = this.calculation + +operation;
    }
  }
}
