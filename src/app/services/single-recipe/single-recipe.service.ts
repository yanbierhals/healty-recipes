import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class SingleRecipeService {

  constructor(private http: HttpClient) {}

    takeRecipe(id: number){
      const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=1f8cf51826a84ed5807a3b9b83678477`;

      return this.http.get(apiUrl)
  }

  takeSimilarRecipe(id: number){
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/similar?apiKey=1f8cf51826a84ed5807a3b9b83678477`;

    return this.http.get(apiUrl);
  }
}
