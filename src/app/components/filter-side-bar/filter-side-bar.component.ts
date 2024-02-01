import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-side-bar',
  templateUrl: './filter-side-bar.component.html',
  styleUrls: ['./filter-side-bar.component.css'],
})
export class FilterSideBarComponent {
  @Input() categoriesToDisplay!: string[];
  @Output() categoriesToEmit = new EventEmitter<string[]>();

  checkedCategories: string[] = [];

  onCheckedCategories(event: Event) {
    const target = event.target as HTMLInputElement;

    if (target.checked) {
      if (this.checkedCategories.length === this.categoriesToDisplay.length) {
        this.checkedCategories = [];
        this.categoriesToEmit.emit(this.checkedCategories);
      }
      this.checkedCategories.push(target.value);
      this.categoriesToEmit.emit(this.checkedCategories);
    } else {
      this.checkedCategories = this.checkedCategories.filter(
        (category) => category !== target.value
      );
      this.categoriesToEmit.emit(this.checkedCategories);

      if (this.checkedCategories.length === 0) {
        this.checkedCategories = [...this.categoriesToDisplay];
        this.categoriesToEmit.emit(this.checkedCategories);
      }
    }
  }
}
