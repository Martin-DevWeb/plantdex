import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plant } from 'src/app/models/plant';
import { Router } from '@angular/router';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-page-update-plant',
  templateUrl: './page-update-plant.component.html',
  styleUrls: ['./page-update-plant.component.css'],
})
export class PageUpdatePlantComponent implements OnInit {
  plantToUpdate!: Plant;
  id!: number;

  constructor(
    private activeRoute: ActivatedRoute,
    private plantService: PlantsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.id &&
      this.plantService.getPlant(this.id).subscribe((res) => {
        this.plantToUpdate = res;
      });
    console.log(this.plantToUpdate);
  }

  updatePlant(plant: Plant): void {
    this.plantService.updatePlant(this.id, plant).subscribe((res) => {
      console.log('Plant updated', res);
      this.plantToUpdate = res;
      this.router.navigate(['/admin']);
    });
  }
}
