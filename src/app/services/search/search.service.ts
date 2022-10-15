import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {}

  search(query: string) {
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=1f8cf51826a84ed5807a3b9b83678477&query=${query}&number=10`;

    return this.http.get(apiUrl);
  }
}
