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
      const delimiterPart = parts[0];
      if(delimiterPart.startsWith("//[")) {
        const delimiterContent = delimiterPart.slice(3, -1); // it will extract the delimiter inside [ ]
        delimiter = new RegExp(delimiterContent.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')); // it will escape special characters
      } else {
        delimiter = new RegExp(delimiterPart.substring(2));
      }
      numbers = parts[1];
    }

    const numArray = numbers.split(delimiter).map(num => parseInt(num));
    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives.join(",")}`);
    }
    return numArray.filter(num => num <= 1000).reduce((a, b) => a + b, 0);
  }
}
