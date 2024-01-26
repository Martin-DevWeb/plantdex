import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort-buttons',
  templateUrl: './sort-buttons.component.html',
  styleUrls: ['./sort-buttons.component.css'],
})
export class SortButtonsComponent {
  @Output() alpha = new EventEmitter();

  emitSort(event: any) {
    this.alpha.emit(event);
  }
}
