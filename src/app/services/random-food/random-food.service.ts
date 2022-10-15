import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomFoodService {

  constructor(private http: HttpClient) {}

  listRandomFood(take: number) {
    const apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=1f8cf51826a84ed5807a3b9b83678477&number=${take}`;

    return this.http.get(apiUrl);
  }
}
