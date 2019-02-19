import { Component, OnInit,Input,AfterContentInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
@Input() element: {type: string, name: string, content: string}
@ContentChild('serverelement') paragraph: ElementRef;
  constructor() { }

  ngOnInit() {
    console.log("In INIT:" + this.paragraph.nativeElement.textContent)
  }
  ngAfterContentInit(){
    console.log("In AfterContentInit:" + this.paragraph.nativeElement.textContent)
  }

}
