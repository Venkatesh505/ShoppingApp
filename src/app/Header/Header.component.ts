import { Component,EventEmitter,Output } from '@angular/core';

@Component({
selector:"app-Header",
templateUrl:"./Header.component.html"
})
export class Headercomponent{
@Output() Clickemit=new EventEmitter<string>();

OnLinkClick(inputval: string)
{
    console.log("Link Clicked: " + inputval);
    this.Clickemit.emit(inputval);
}
}
