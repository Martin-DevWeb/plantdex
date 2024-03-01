import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categorie } from 'src/app/models/categorie';
import { Plant } from 'src/app/models/plant';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-form-plant',
  templateUrl: './form-plant.component.html',
  styleUrls: ['./form-plant.component.css'],
})
export class FormPlantComponent implements OnInit {
  plantForm!: FormGroup;
  @Output() submitFormPlant = new EventEmitter<Plant>();
  allCat: Categorie[] = [];
  @Input() plantToUpdate!: Plant;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    if (this.plantToUpdate !== undefined) {
      this.initForm(this.plantToUpdate);
    } else this.initForm('');

    this.categoriesService.getCategories().subscribe((data) => {
      this.allCat = [...data];
    });
    if (this.plantToUpdate !== undefined) {
      console.log(this.plantToUpdate);
    }
  }

  initForm(value: any): void {
    this.plantForm = new FormGroup({
      nom: new FormControl(value.nom, Validators.required),
      soleil: new FormControl(value.soleil),
      arrosage: new FormControl(value.arrosage),
      categorie: new FormControl(value.categorie),
      image: new FormControl(value.image),
    });
  }

  onSubmitForm(): void {
    this.plantForm.value.arrosage = Number(this.plantForm.value.arrosage);
    this.submitFormPlant.emit(this.plantForm.value);
  }
}
