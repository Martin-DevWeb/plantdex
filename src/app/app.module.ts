import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageMyPlantsComponent } from './pages/page-my-plants/page-my-plants.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CardPlantComponent } from './components/card-plant/card-plant.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SortButtonsComponent } from './components/sort-buttons/sort-buttons.component';
import { FilterSideBarComponent } from './components/filter-side-bar/filter-side-bar.component';
import { OrderByWaterPipe } from './pipes/order-by-water.pipe';
import { OrderBySunPipe } from './pipes/order-by-sun.pipe';
import { IconsComponent } from './components/icons/icons.component';
import { PageAddPlantComponent } from './pages/page-add-plant/page-add-plant.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormPlantComponent } from './components/form-plant/form-plant.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { FormCategorieComponent } from './components/form-categorie/form-categorie.component';
import { PageAddCategorieComponent } from './pages/page-add-categorie/page-add-categorie.component';
import { PageDetailsComponent } from './pages/page-details/page-details.component';
import { PageUpdatePlantComponent } from './pages/page-update-plant/page-update-plant.component';
import { PageUpdateCategorieComponent } from './pages/page-update-categorie/page-update-categorie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageHomeComponent,
    PageMyPlantsComponent,
    PageAdminComponent,
    PageNotFoundComponent,
    CardPlantComponent,
    SearchBarComponent,
    SortButtonsComponent,
    FilterSideBarComponent,
    OrderByPipe,
    OrderByWaterPipe,
    OrderBySunPipe,
    IconsComponent,
    PageAddPlantComponent,
    FormPlantComponent,
    ScrollToTopComponent,
    FormCategorieComponent,
    PageAddCategorieComponent,
    PageDetailsComponent,
    PageUpdatePlantComponent,
    PageUpdateCategorieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
