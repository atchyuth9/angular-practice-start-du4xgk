import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class Sorting implements PipeTransform {
  transform(list: any[], reverse?: boolean) {
    if (reverse == true) {
      list.sort();
      list.reverse();
      return list;
    } else {
      list.sort();
      return list;
    }
  }
}
