import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlantsService } from 'src/app/services/plants.service';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.css'],
})
export class PageDetailsComponent implements OnInit {
  plantDisplayed!: Plant;

  constructor(
    private activeRoute: ActivatedRoute,
    private plantService: PlantsService
  ) {}

  ngOnInit(): void {
    let id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    id &&
      this.plantService.getPlant(id).subscribe({
        next: (res) => {
          this.plantDisplayed = res;
        },
        error: () => {},
      });
  }
}
