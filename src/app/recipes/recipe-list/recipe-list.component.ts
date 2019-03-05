import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import{Recipe} from './recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() Recipelistemit= new EventEmitter<Recipe>();
  recipes: Recipe[]=[
    new Recipe('Chicken Recipe','Hyderabadi Dum Chicken Biryani','https://www.rachnas-kitchen.com/wp-content/uploads/2016/07/chicken-biryani-@4-1-e1505461223560.jpg')
    ,new Recipe('Mutton Recipe','Hyderabadi Dum Mutton Biryani','https://www.swatifood.com/wp-content/uploads/2018/01/Authentic-Hyderabadi-mutton-biryani-recipe.jpg')
    ,new Recipe('Fish Recipe','Hyderabadi Dum Fish Biryani','https://www.ndtv.com/cooks/images/biryani.4.jpg?downsize=650:400&output-quality=70&output-format=webp')
  ]
  constructor() { }

  ngOnInit() {
  }
  rlistClicked(recipe: Recipe){
this.Recipelistemit.emit(recipe)
  }
}
