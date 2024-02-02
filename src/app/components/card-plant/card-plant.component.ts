import { Component, Input } from '@angular/core';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-card-plant',
  templateUrl: './card-plant.component.html',
  styleUrls: ['./card-plant.component.css'],
})
export class CardPlantComponent {
  @Input() plant!: Plant;

  water(number: number): string {
    if (this.plant.arrosage >= 1 && number === 1) {
      return 'fa-solid fa-droplet';
    }
    if (this.plant.arrosage >= 2 && number === 2) {
      return 'fa-solid fa-droplet';
    }
    if (this.plant.arrosage === 3 && number === 3) {
      return 'fa-solid fa-droplet';
    } else return 'fa-solid fa-droplet-slash';
  }

  sun(number: number): string {
    if (
      (this.plant.soleil === 'peu' ||
        this.plant.soleil === 'moyen' ||
        this.plant.soleil === 'beaucoup') &&
      number === 1
    ) {
      return 'fa-solid fa-sun';
    }
    if (
      (this.plant.soleil === 'moyen' || this.plant.soleil === 'beaucoup') &&
      number === 2
    ) {
      return 'fa-solid fa-sun';
    }
    if (this.plant.soleil === 'beaucoup' && number === 3) {
      return 'fa-solid fa-sun';
    } else return 'fa-regular fa-sun';
  }
}
