import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
serverElements=[];

  constructor() {    
   }
   OnserverCreated(serverDate:{ServerName: string,serverContent:string}){
     this.serverElements.push({
              type:'server',
              name1:    serverDate.ServerName,
              content: serverDate.serverContent
     });
   }
}
