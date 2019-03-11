import { ElementRef, Directive, OnInit } from '@angular/core';

@Directive({
selector:'[appBlueBackground]'
})

export class bluebackground implements OnInit {
    constructor(private Eleref:ElementRef ) {
        
    }
    ngOnInit()
    {
        this.Eleref.nativeElement.style.backgroundColor='red';

    }
}