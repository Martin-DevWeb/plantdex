import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-page-update-categorie',
  templateUrl: './page-update-categorie.component.html',
  styleUrls: ['./page-update-categorie.component.css'],
})
export class PageUpdateCategorieComponent {
  catToUpdate!: Categorie;
  id!: number;

  constructor(
    private activeRoute: ActivatedRoute,
    private catService: CategoriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.id &&
      this.catService.getCategory(this.id).subscribe((res) => {
        this.catToUpdate = res;
      });
    console.log(this.catToUpdate);
  }

  updateCategorie(cat: Categorie): void {
    this.catService.updateCategorie(this.id, cat).subscribe((res) => {
      console.log('Plant updated', res);
      this.catToUpdate = res;
      this.router.navigate(['/admin']);
    });
  }
}
