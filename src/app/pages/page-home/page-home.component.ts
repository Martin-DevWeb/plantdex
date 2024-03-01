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
  orderBy: 'none' | 'asc' | 'desc' = 'none';
  orderByWater: 'none' | 'asc' | 'desc' = 'none';
  orderBySun: 'none' | 'asc' | 'desc' = 'none';

  categoriesToSend: string[] = [];
  waterToSend: number[] = [];
  sunToSend: string[] = [];

  searchText: string = '';
  selectedCategory: string[] = [];
  selectedWater: number[] = [];
  selectedSun: string[] = [];

  type: string = 'arrosage';
  orderReset: string = 'asc';

  constructor(private plantsService: PlantsService) {}

  ngOnInit(): void {
    this.plantsService.getPlants().subscribe((data) => {
      this.plantsToDisplay = [...data];
      this.allPlants = [...data];
      this.categoriesToSend = this.getCategoriesFromPlants(data);
      this.waterToSend = this.getWaterFromPlants(data);
      this.sunToSend = this.getSunFromPlants(data);
    });
  }

  searchValue(value: string) {
    this.searchText = value;
    this.genericSearch();
  }

  getCategoriesFromPlants(plants: Plant[]): string[] {
    return [...new Set(plants.map((plant) => plant.categorie))].sort();
  }

  getWaterFromPlants(plants: Plant[]) {
    return [...new Set(plants.map((plant) => plant.arrosage))].sort();
  }

  getSunFromPlants(plants: Plant[]) {
    return [...new Set(plants.map((plant) => plant.soleil))].sort(
      (a, b) => a.length - b.length
    );
  }

  getCategories(categories: string[]) {
    this.selectedCategory = categories;
    this.genericSearch();
  }

  getWater(water: number[]) {
    this.selectedWater = water;
    this.genericSearch();
  }

  getSun(sun: string[]) {
    this.selectedSun = sun;
    this.genericSearch();
  }

  genericSearch() {
    const filteredPlantsByCat = this.allPlants.filter(
      (plant) =>
        this.selectedCategory.length === 0 ||
        this.selectedCategory.includes(plant.categorie)
    );
    const filteredPlantsByWater = filteredPlantsByCat.filter(
      (plant) =>
        this.selectedWater.length === 0 ||
        this.selectedWater.includes(plant.arrosage)
    );
    const filteredPlantsBySun = filteredPlantsByWater.filter(
      (plant) =>
        this.selectedSun.length === 0 || this.selectedSun.includes(plant.soleil)
    );
    this.plantsToDisplay = filteredPlantsBySun.filter((plant) =>
      plant.nom
        .toLocaleLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .includes(
          this.searchText
            .toLocaleLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
        )
    );
  }
}
