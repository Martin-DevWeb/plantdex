import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categorie } from 'src/app/models/categorie';

@Component({
  selector: 'app-form-categorie',
  templateUrl: './form-categorie.component.html',
  styleUrls: ['./form-categorie.component.css'],
})
export class FormCategorieComponent implements OnInit {
  categorieForm!: FormGroup;
  @Output() submitFormCat = new EventEmitter<Categorie>();
  @Input() catToUpdate!: Categorie;

  ngOnInit(): void {
    if (this.catToUpdate !== undefined) {
      this.initForm(this.catToUpdate);
    } else this.initForm('');
  }

  initForm(value: any): void {
    this.categorieForm = new FormGroup({
      label: new FormControl(value.label, Validators.required),
    });
  }

  onSubmitForm(): void {
    this.submitFormCat.emit(this.categorieForm.value);
  }
}
