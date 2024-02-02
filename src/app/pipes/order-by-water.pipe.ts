import { Pipe, PipeTransform } from '@angular/core';
import { Plant } from '../models/plant';

@Pipe({
  name: 'orderByWater',
})
export class OrderByWaterPipe implements PipeTransform {
  transform(value: Plant[], order: 'none' | 'asc' | 'desc' = 'none'): Plant[] {
    return value.sort((a, b) => {
      if (order === 'none') {
        return 0;
      }
      if (order === 'asc') {
        return a.arrosage > b.arrosage ? 1 : -1;
      } else if (order === 'desc') {
        return a.arrosage > b.arrosage ? -1 : 1;
      }
      return 0;
    });
  }
}
