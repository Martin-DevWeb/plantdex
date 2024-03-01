import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-page-add-categorie',
  templateUrl: './page-add-categorie.component.html',
  styleUrls: ['./page-add-categorie.component.css'],
})
export class PageAddCategorieComponent {
  constructor(
    private categorieService: CategoriesService,
    private router: Router
  ) {}

  newCategorieSubmitted(cat: Categorie) {
    this.categorieService.createNewCategorie(cat).subscribe((resp) => {
      console.log('New category created', resp);
      this.router.navigate(['/admin']);
    });
  }
}
