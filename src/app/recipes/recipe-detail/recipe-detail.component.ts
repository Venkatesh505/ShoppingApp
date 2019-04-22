import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';
import { ShoppingCartService } from 'src/app/shopping-list/shoppingcart.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
@Input() selRecipe: Recipe
  constructor(private shoppingcartService: ShoppingCartService) { }

  ngOnInit() {
  }
  add_shoppinglist()
  {
    this.selRecipe.Ingrediants.forEach(element => {
      this.shoppingcartService.new_addition(element);
    });
    
    console.log(this.selRecipe.Name);
  }
}
