import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css'],
})
export class PageHomeComponent implements OnInit {
  plantsToDisplay: Plant[] = [];
  orderBy: 'none' | 'asc' | 'desc' = 'none';
  allPlants: Plant[] = [];

  categoriesToSend: string[] = [];

  constructor(private plantsService: PlantsService) {}

  ngOnInit(): void {
    this.plantsService.getPlants().subscribe((data) => {
      this.plantsToDisplay = [...data];
      this.allPlants = [...data];
      this.categoriesToSend = this.getCategoriesFromPlants(this.allPlants);
    });
  }

  searchValue(value: string) {
    if (value == null || value == '') {
      this.plantsToDisplay = this.allPlants;
    } else {
      this.plantsToDisplay = this.allPlants.filter((plant) =>
        plant.nom.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );
    }
  }

  getCategoriesFromPlants(plants: Plant[]): string[] {
    return [...new Set(plants.map((plant) => plant.categorie))];
  }

  getCategories(categories: string[]) {
    this.plantsToDisplay = this.allPlants.filter((plant) =>
      categories.includes(plant.categorie)
    );
  }

  genericSearch() {}
}
