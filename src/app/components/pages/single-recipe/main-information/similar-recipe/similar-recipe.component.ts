import { SingleRecipeService } from 'src/app/services/single-recipe/single-recipe.service';
import { finalize } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-similar-recipe',
  templateUrl: './similar-recipe.component.html',
  styleUrls: ['./similar-recipe.component.css']
})
export class SimilarRecipeComponent implements OnInit {
  public loading = true
  public similarRecipes: any = []

  @Input() recipeIdSimilar!: number;

  constructor(private service: SingleRecipeService) { }

  ngOnInit(): void {
    this.takeSimilarRecipes(this.recipeIdSimilar)
  }

  takeSimilarRecipes(id: number){
    this.service
      .takeSimilarRecipe(id)
      .pipe(
        finalize(() => {
        this.loading = false
        })
      )
      .subscribe((data: any) => {
        this.similarRecipes = data.slice(0,3)
      })
  }

  reloadPage(){
    setTimeout(()=>{window.location.reload()})
  }
}
