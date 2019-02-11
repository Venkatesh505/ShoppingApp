import { Component, OnInit,EventEmitter,Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  @ViewChild("newserverName") nameelement: ElementRef;
  @Output() serverCreated= new EventEmitter<{serverName: string,serverContent: string}>();
  constructor() { }

  ngOnInit() {
  }
  onAddServer(nameInput:HTMLInputElement) {
console.log(nameInput.value); //LocalReferences
console.log(this.nameelement.nativeElement.value); //@DOM Element references
    this.serverCreated.emit({serverName:nameInput.value,serverContent:this.newServerContent});

  }

  onAddBlueprint() {

  }
}
