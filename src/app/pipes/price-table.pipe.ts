import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceTable'
})
export class PriceTablePipe implements PipeTransform {
  // I don't know how to know month and yearly
  pattern = " تومان (ماهیانه)";
  transform(digit: string): string {
    const digitNumber = parseInt(digit);
    return digitNumber + this.pattern;
  }
}
