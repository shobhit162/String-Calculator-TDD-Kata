import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'string-calculator-tdd-kata';

  add(numbers: string): number {
    if (numbers === "") return 0;
    const numArr = numbers.split(/[\n,]/).map(num => parseInt(num)); // newline and comma-separated
    return numArr.reduce((a, b) => a + b, 0); 
  }
}
