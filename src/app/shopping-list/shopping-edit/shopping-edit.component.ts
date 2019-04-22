import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import { ShoppingCartService } from '../shoppingcart.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("inputName") nameelement: ElementRef;
  @ViewChild("inputAmount") amountelement: ElementRef;
  // @Output() ingredientadd=new EventEmitter<Ingredient>();
  constructor(private shoppingcartService: ShoppingCartService) {    
   }

  ngOnInit() {
  }
onSave(){  
  const newin= new Ingredient(this.nameelement.nativeElement.value,this.amountelement.nativeElement.value);
  this.shoppingcartService.new_addition(newin);
  
}
}
