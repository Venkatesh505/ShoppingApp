import { Component, OnInit,ViewChild,ElementRef, EventEmitter, Output } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("inputName") nameelement: ElementRef;
  @ViewChild("inputAmount") amountelement: ElementRef;
  @Output() ingredientadd=new EventEmitter<Ingredient>();
  // Shoppinglist=[{Name:"venky",Description:"finger"}]
  constructor() {    
   }

  ngOnInit() {
  }
onSave(){
  console.log(this.nameelement.nativeElement.value);
  const newin= new Ingredient(this.nameelement.nativeElement.value,this.amountelement.nativeElement.value);
  this.ingredientadd.emit(newin);
  
}
}
