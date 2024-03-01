import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plant } from '../models/plant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlantsService {
  private baseURL = 'http://localhost:3000/plants';

  constructor(private http: HttpClient) {}

  // Observable ligne 13 pas obligatoire, il le comprend déjà avec le get<Plant[]> ligne 14
  getPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>(`${this.baseURL}`);
  }

  getPlant(id: number): Observable<Plant> {
    return this.http.get<Plant>(`http://localhost:3000/plants/${id}`);
  }

  postPlants(plant: Plant[]): Observable<Plant[]> {
    return this.http.post<Plant[]>(`${this.baseURL}/post`, plant);
  }

  createNewPlant(plantToCreate: Plant): Observable<Plant> {
    return this.http.post<Plant>('http://localhost:3000/plants', plantToCreate);
  }

  removePlant(id: number): Observable<Plant> {
    return this.http.delete<Plant>(`http://localhost:3000/plants/${id}`);
  }

  updatePlant(id: number, plant: Plant): Observable<Plant> {
    return this.http.put<Plant>(`http://localhost:3000/plants/${id}`, plant);
  }
}
