import { Pipe, PipeTransform } from '@angular/core';
import { Plant } from '../models/plant';

@Pipe({
  name: 'orderBySun',
})
export class OrderBySunPipe implements PipeTransform {
  transform(value: Plant[], order: 'none' | 'asc' | 'desc' = 'none'): Plant[] {
    return value.sort((a, b) => {
      if (order === 'none') {
        return 0;
      }
      if (order === 'asc') {
        return a.soleil.length > b.soleil.length ? 1 : -1;
      } else if (order === 'desc') {
        return a.soleil.length > b.soleil.length ? -1 : 1;
      }
      return 0;
    });
  }
}
