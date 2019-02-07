import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
serverElements=[{type: 'server',name:"testserver", content:"just a content"}];

  constructor() {    
   }
   OnserverCreated(serverDate:{ServerName: string,serverContent:string}){
     this.serverElements.push({
              type:'blueprint',
              name:    serverDate.ServerName,
              content: serverDate.serverContent
     });
   }
}
