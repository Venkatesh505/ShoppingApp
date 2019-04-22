import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipe: {Name: string, Description: string,Imagepath: string,Ingrediants: Ingredient[]}

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  itemclick()
  {
    console.log("write")
    this.recipeService.ItemClicked.emit(this.recipe);
  }
}
