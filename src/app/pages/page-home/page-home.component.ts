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
  allPlants: Plant[] = [];
  categories: string[] = [];

  constructor(private plantsService: PlantsService) {}

  ngOnInit(): void {
    this.plantsService.getPlants().subscribe((data) => {
      this.plantsToDisplay = [...data];
      this.allPlants = [...data];
      this.categories = this.getCategoriesFromPlants(this.allPlants);
      console.log(this.categories);
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

  alphaSort() {
    this.plantsToDisplay.sort(function (a, b) {
      if (a.nom < b.nom) {
        return -1;
      }
      if (a.nom > b.nom) {
        return 1;
      }
      return 0;
    });
  }

  getCategoriesFromPlants(plants: Plant[]): string[] {
    return [...new Set(plants.map((plant) => plant.categorie))];
  }
}
