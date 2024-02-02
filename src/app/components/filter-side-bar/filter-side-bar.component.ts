import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-side-bar',
  templateUrl: './filter-side-bar.component.html',
  styleUrls: ['./filter-side-bar.component.css'],
})
export class FilterSideBarComponent {
  @Input() categoriesToDisplay!: string[];
  @Input() waterToDisplay!: number[];
  @Input() sunToDisplay!: string[];

  @Output() categoriesToEmit = new EventEmitter<string[]>();
  @Output() waterToEmit = new EventEmitter<number[]>();
  @Output() sunToEmit = new EventEmitter<string[]>();

  checkedCategories: string[] = [];
  checkedWater: number[] = [];
  checkedSun: string[] = [];
  dropIcon = new Array(3);
  sunIcon = new Array(3);

  onCheckedCategories(event: Event) {
    const target = event.target as HTMLInputElement;

    if (target.checked) {
      if (this.checkedCategories.length === this.categoriesToDisplay.length) {
        this.checkedCategories = [];
      }
      this.checkedCategories.push(target.value);
    } else {
      this.checkedCategories = this.checkedCategories.filter(
        (category) => category !== target.value
      );

      if (this.checkedCategories.length === 0) {
        this.checkedCategories = [...this.categoriesToDisplay];
      }
    }
    this.categoriesToEmit.emit(this.checkedCategories);
  }

  onCheckedWater(event: Event) {
    const target = event.target as HTMLInputElement;

    if (target.checked) {
      if (this.checkedWater.length === this.waterToDisplay.length) {
        this.checkedWater = [];
      }
      this.checkedWater.push(+target.value);
    } else {
      this.checkedWater = this.checkedWater.filter(
        (water) => water !== +target.value
      );

      if (this.checkedWater.length === 0) {
        this.checkedWater = [...this.waterToDisplay];
      }
    }
    this.waterToEmit.emit(this.checkedWater);
  }

  onCheckedSun(event: Event) {
    const target = event.target as HTMLInputElement;

    if (target.checked) {
      if (this.checkedSun.length === this.sunToDisplay.length) {
        this.checkedSun = [];
      }
      this.checkedSun.push(target.value);
    } else {
      this.checkedSun = this.checkedSun.filter((sun) => sun !== target.value);

      if (this.checkedSun.length === 0) {
        this.checkedSun = [...this.sunToDisplay];
      }
    }
    this.sunToEmit.emit(this.checkedSun);
  }
}
