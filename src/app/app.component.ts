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

    let delimiter = /[\n,]/;

    if (numbers.startsWith("//")) {   // supports different delimiters
      const parts = numbers.split('\n');
      delimiter = new RegExp(parts[0].substring(2));
      numbers = parts[1];
    }

    const numArray = numbers.split(delimiter).map(num => parseInt(num));
    return numArray.reduce((a, b) => a + b, 0);
  }
}
