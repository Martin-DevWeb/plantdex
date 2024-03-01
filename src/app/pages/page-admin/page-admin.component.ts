import { Component } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';
import { Plant } from 'src/app/models/plant';
import { CategoriesService } from 'src/app/services/categories.service';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css'],
})
export class PageAdminComponent {
  allPlants: Plant[] = [];
  allCat: Categorie[] = [];

  constructor(
    private plantsService: PlantsService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.plantsService.getPlants().subscribe((data) => {
      this.allPlants = [...data];
    });
    this.categoriesService.getCategories().subscribe((data) => {
      this.allCat = [...data];
    });
  }

  removePlant(id: number): void {
    console.log(`ID of the plant removed: ${id}`);
    this.plantsService.removePlant(id).subscribe(() => {
      this.allPlants = this.allPlants.filter((plant) => plant.id !== id);
    });
  }

  removeCategorie(id: number): void {
    console.log(`ID of the categorie removed: ${id}`);
    this.categoriesService.removeCategorie(id).subscribe(() => {
      this.allCat = this.allCat.filter((cat) => cat.id !== id);
    });
  }
}
