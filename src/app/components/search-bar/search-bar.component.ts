import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @Output() input = new EventEmitter<string>();

  inputValue(input: any) {
    this.input.emit(input.target.value);
  }
}
