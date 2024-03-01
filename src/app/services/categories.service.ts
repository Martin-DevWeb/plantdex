import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from '../models/categorie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private baseURL = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(`${this.baseURL}`);
  }

  getCategory(id: number): Observable<Categorie> {
    return this.http.get<Categorie>(`http://localhost:3000/categories/${id}`);
  }

  postCategories(plant: Categorie[]): Observable<Categorie[]> {
    return this.http.post<Categorie[]>(`${this.baseURL}/post`, plant);
  }

  createNewCategorie(plantToCreate: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(`${this.baseURL}`, plantToCreate);
  }

  removeCategorie(id: number): Observable<Categorie> {
    return this.http.delete<Categorie>(`${this.baseURL}/${id}`);
  }

  updateCategorie(id: number, cat: Categorie): Observable<Categorie> {
    return this.http.put<Categorie>(`${this.baseURL}/${id}`, cat);
  }
}
