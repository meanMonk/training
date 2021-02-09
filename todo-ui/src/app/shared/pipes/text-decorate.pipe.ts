import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textDecorate',
})
export class TextDecoratePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    let count = args[1];
    let formatter = Array(count).fill(args[0]).join('');
    return value
      .split(' ')
      .map((i) => {
        return formatter ? `${formatter}${i}${formatter}` : `__${i}__`;
      })
      .join(' ');
  }
}
