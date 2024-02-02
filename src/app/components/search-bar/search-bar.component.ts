import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @Output() inputVal = new EventEmitter<string>();

  inputValue(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.inputVal.emit(value);
  }
}
