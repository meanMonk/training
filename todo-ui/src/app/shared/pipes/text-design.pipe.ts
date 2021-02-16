import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textDesign',
})
export class TextDesignPipe implements PipeTransform {
  transform(
    value: string,
    char: string,
    color: string,
    isBold: boolean = true
  ) {
    let result = '';
    if (isBold) {
      console.log(`<b style="color:${color}">${char.toLowerCase()}</b>`);
      result = value
        .split(char.toLowerCase())
        .join(`<b style="color: ${color}">${char.toLowerCase()}</b>`)
        .split(char.toUpperCase())
        .join(`<b style="color: ${color}">${char.toUpperCase()}</b>`);
    } else {
      result = value
        .split(char.toLowerCase())
        .join(`<span style="color: ${color}">${char.toLowerCase()}</span>`)
        .split(char.toUpperCase())
        .join(`<span style="color: ${color}">${char.toUpperCase()}</b>`);
    }
    return result;
    // let final = document.createElement('span');
    // final.innerHTML = result;
    // return final;
  }
}

/* 
 Alpanlibe

*/
