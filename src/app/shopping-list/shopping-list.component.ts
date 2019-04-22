import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model'
import { ShoppingCartService } from './shoppingcart.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[];
  constructor(private shoppingCart: ShoppingCartService) { }

  ngOnInit() {
    this.ingredients=this.shoppingCart.get_Ingrediants();
    this.shoppingCart.newIngradiant.subscribe((ingrediant:Ingredient[]) =>{
    this.ingredients=ingrediant;
    }

    )
  }  
}
