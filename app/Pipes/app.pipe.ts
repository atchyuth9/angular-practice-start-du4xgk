import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentence',
})
export class Sentence implements PipeTransform {
  transform(value: any) {
    let firstchar = value.charAt(0);
    let restchar = value.substring(1);
    let sent = firstchar.toUpperCase() + restchar.toLowerCase();
    return sent;
  }
}
