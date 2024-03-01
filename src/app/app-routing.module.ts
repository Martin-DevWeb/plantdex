import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageMyPlantsComponent } from './pages/page-my-plants/page-my-plants.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageAddPlantComponent } from './pages/page-add-plant/page-add-plant.component';
import { PageAddCategorieComponent } from './pages/page-add-categorie/page-add-categorie.component';
import { PageDetailsComponent } from './pages/page-details/page-details.component';
import { PageUpdatePlantComponent } from './pages/page-update-plant/page-update-plant.component';
import { PageUpdateCategorieComponent } from './pages/page-update-categorie/page-update-categorie.component';

const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'plants', component: PageMyPlantsComponent },
  { path: 'admin', component: PageAdminComponent },
  { path: 'admin/add-plant', component: PageAddPlantComponent },
  { path: 'admin/add-categorie', component: PageAddCategorieComponent },
  { path: 'details/:id', component: PageDetailsComponent },
  { path: 'admin/update/plant/:id', component: PageUpdatePlantComponent },
  {
    path: 'admin/update/categorie/:id',
    component: PageUpdateCategorieComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
