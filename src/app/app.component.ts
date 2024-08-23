import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'string-calculator-tdd-kata';
  inputString: string = '';
  result: number | null = null;
  errorMessage: string | null = null;

  add(numbers: string): number {
    if (numbers === '') return 0;

    const [delimiter, numberStr] = this.extractDelimiters(numbers);

    const numArray = numberStr.split(delimiter).map((num) => parseInt(num));
    const negatives = numArray.filter((num) => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives.join(',')}`);
    }
    return numArray.filter((num) => num <= 1000).reduce((a, b) => a + b, 0);
  }

  extractDelimiters(numbers: string): [RegExp, string] {
    let delimiter = /[\n,]/;

    if (numbers.startsWith('//')) {
      // supports different delimiters
      const parts = numbers.split('\n');
      const delimiterPart = parts[0];

      if (delimiterPart.startsWith('//[')) {
        const delimiterContent = delimiterPart
          .slice(2) // it will remove initial "//"
          .split('][') // it will split by "][" to handle multiple delimiters
          .map((d) => d.replace(/[\[\]]/g, '')) // it will remove square brackets
          .map((d) => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) // it will escape special characters
          .join('|'); // it will join them using OR operator for regex
        delimiter = new RegExp(delimiterContent);
      } else {
        delimiter = new RegExp(delimiterPart.substring(2));
      }

      numbers = parts[1];
    }
    return [delimiter, numbers];
  }

  calculateSum(): void {
    try {
      this.result = this.add(this.inputString);
      this.errorMessage = null;
    } catch (error: any) {
      this.result = null;
      this.errorMessage = error.message;
    }
  }
}
