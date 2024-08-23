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
    return parseInt(numbers); // it will handle the single number passed as a string
  }
}
