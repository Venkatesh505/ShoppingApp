import { ElementRef, Directive, OnInit,HostListener, HostBinding ,Input} from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';
import { stringify } from '@angular/core/src/render3/util';

@Directive({
selector:'[appBlueBackground]'
})

export class bluebackground implements OnInit {
    @Input() Defaultcolor: string;
    @Input() Hovercolor: string;
    @HostBinding('style.font-weight') fontwgt: string='bold'; 
    constructor(private Eleref:ElementRef ) {
       
    }
    ngOnInit()
    {
        this.Eleref.nativeElement.style.color=this.Defaultcolor;   

    }
    @HostListener('mouseenter') mouseenter(eentData: Event)
    {
        // this.Eleref.nativeElement.style.backgroundColor='red';
        this.Eleref.nativeElement.style.color=this.Hovercolor;
        this.fontwgt='900';
    }
    @HostListener('mouseleave') mouseexit(eventdata: Event)
    {
        // this.Eleref.nativeElement.style.backgroundColor='black';
        this.Eleref.nativeElement.style.color=this.Defaultcolor;
        this.fontwgt='bold';
    } 
}