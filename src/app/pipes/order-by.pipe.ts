import { Pipe, PipeTransform } from '@angular/core';
import { Plant } from '../models/plant';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(value: Plant[], order: 'none' | 'asc' | 'desc' = 'none') {
    return value.sort((a, b) => {
      if (order === 'none') {
        return 0;
      }
      if (order === 'asc') {
        return a.nom > b.nom ? 1 : -1;
      } else if (order === 'desc') {
        return a.nom > b.nom ? -1 : 1;
      }
      return 0;
    });
  }
}
