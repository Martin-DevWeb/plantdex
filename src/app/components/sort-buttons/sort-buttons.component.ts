import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort-buttons',
  templateUrl: './sort-buttons.component.html',
  styleUrls: ['./sort-buttons.component.css'],
})
export class SortButtonsComponent {
  @Output() alpha = new EventEmitter();
  @Output() water = new EventEmitter();
  statusAscClass = 'btn btn-outline-success';
  statusWaterClass = 'btn btn-outline-primary';
  statusSunClass = 'btn btn-outline-warning';
  arrowIcon = '';
  waterIcon = '';
  sunIcon = '';

  emitSort(event: any) {
    this.alpha.emit(event);
    this.statusAscClass === 'btn btn-success'
      ? ((this.statusAscClass = 'btn btn-outline-success'),
        (this.arrowIcon = 'fa-solid fa-arrow-up'))
      : ((this.statusAscClass = 'btn btn-success'),
        (this.arrowIcon = 'fa-solid fa-arrow-down'));
  }

  emitWater(event: any) {
    this.statusWaterClass === 'btn btn-primary'
      ? ((this.statusWaterClass = 'btn btn-outline-primary'),
        (this.waterIcon = 'fa-solid fa-droplet'))
      : ((this.statusWaterClass = 'btn btn-primary'),
        (this.waterIcon = 'fa-solid fa-droplet-slash'));
  }

  emitSun(event: any) {
    this.statusSunClass === 'btn btn-warning'
      ? ((this.statusSunClass = 'btn btn-outline-warning'),
        (this.sunIcon = 'fa-solid fa-sun'))
      : ((this.statusSunClass = 'btn btn-warning'),
        (this.sunIcon = 'fa-regular fa-sun'));
  }
}
