import {  Directive, HostListener, HostBinding } from '@angular/core';
@Directive(
{
selector:'[appDropdown]'
})
export class dropdownDirective{
    @HostBinding('class.open') 
    isOpen=false;
    @HostListener('click') mouseenter()
    {
this.isOpen=!this.isOpen;
    }
}