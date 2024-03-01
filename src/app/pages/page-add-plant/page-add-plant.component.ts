import { Component } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-add-plant',
  templateUrl: './page-add-plant.component.html',
  styleUrls: ['./page-add-plant.component.css'],
})
export class PageAddPlantComponent {
  constructor(private plantsService: PlantsService, private router: Router) {}

  newPlantSubmitted(plant: Plant): void {
    this.plantsService.createNewPlant(plant).subscribe((resp) => {
      console.log('New plant created', resp);
      this.router.navigate(['/admin']);
    });
  }
}
