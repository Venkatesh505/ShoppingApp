import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class AppComponent {
serverElements=[{type:"server",name:"first server",content:"This is First Server"}];

  constructor() {    
   }
   OnserverCreated(serverData:{serverContent:string,serverName:string}){
     console.log(serverData);
     console.log(serverData.serverName);
     console.log(serverData.serverContent);
     this.serverElements.push({
              type:'server',
              name:   serverData.serverName,
              content: serverData.serverContent
     });
   }
}
