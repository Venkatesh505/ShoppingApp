import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingCartService{
    newIngradiant= new EventEmitter<Ingredient[]>();
    private ingredients_svc:Ingredient[]=[
        new Ingredient('Apple',5),
        new Ingredient('Oranges',10)
      ];
      new_addition(ing: Ingredient)
      {
    this.ingredients_svc.push(ing);
    this.newIngradiant.emit(this.ingredients_svc.slice());
      }
      get_Ingrediants()
      {
       return   this.ingredients_svc.slice();       
      }
}