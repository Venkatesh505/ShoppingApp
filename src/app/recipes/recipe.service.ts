import{Recipe} from '../recipes/recipe-list/recipe.model';
import { EventEmitter } from '@angular/core';
export class RecipeService {
    public ItemClicked= new EventEmitter<Recipe>();
  private  recipes: Recipe[]=[
        new Recipe('Chicken Recipe','Hyderabadi Dum Chicken Biryani','https://www.rachnas-kitchen.com/wp-content/uploads/2016/07/chicken-biryani-@4-1-e1505461223560.jpg')
        ,new Recipe('Mutton Recipe','Hyderabadi Dum Mutton Biryani','https://www.swatifood.com/wp-content/uploads/2018/01/Authentic-Hyderabadi-mutton-biryani-recipe.jpg')
        ,new Recipe('Fish Recipe','Hyderabadi Dum Fish Biryani','https://www.ndtv.com/cooks/images/biryani.4.jpg?downsize=650:400&output-quality=70&output-format=webp')
      ]

getRecipes()
   {
    return this.recipes.slice();
   }

}