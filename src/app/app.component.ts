import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
serverElements=[{type: 'server',name:"testserver", content:"just a content"}
,{type: 'blueprint',name:"testserver1", content:"just a content1"}
,{type: 'server',name:"testserver2", content:"just a content2"}];

  constructor() {    
   }
   
}
