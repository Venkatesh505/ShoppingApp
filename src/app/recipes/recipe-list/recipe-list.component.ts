import { Component, OnInit } from '@angular/core';
import{Recipe} from './recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[
    new Recipe('First Recipe','Hyderabadi Dum Chicken Biryani','https://www.rachnas-kitchen.com/wp-content/uploads/2016/07/chicken-biryani-@4-1-e1505461223560.jpg')
    ,new Recipe('First Recipe','Hyderabadi Dum Chicken Biryani','https://www.rachnas-kitchen.com/wp-content/uploads/2016/07/chicken-biryani-@4-1-e1505461223560.jpg')
    ,new Recipe('First Recipe','Hyderabadi Dum Chicken Biryani','https://www.rachnas-kitchen.com/wp-content/uploads/2016/07/chicken-biryani-@4-1-e1505461223560.jpg')
  ]
  constructor() { }

  ngOnInit() {
  }

}
