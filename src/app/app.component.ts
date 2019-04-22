import { Component, ViewEncapsulation,Input } from '@angular/core';
import { loggingService } from './Services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.Emulated,
  providers:[loggingService]
})
export class AppComponent {
  element1='';
serverElements=[{type:"server",name:"first server",content:"This is First Server"}];
@Input() linkclicked: string;
localClickVal: string="Random";
  constructor(private logService: loggingService) {    
   }
   OnserverCreated(serverData:{serverContent:string,serverName:string}){
    this.logService.logmsg(serverData.serverName);

    // console.log(serverData);
    //  console.log(serverData.serverName);
    //  console.log(serverData.serverContent);
     this.serverElements.push({
              type:'server',
              name:   serverData.serverName,
              content: serverData.serverContent
     });
   }
   Receiveclick(inputval: string)
   {
this.localClickVal=inputval;
console.log("Inside App Component: " + inputval );
   }
}
