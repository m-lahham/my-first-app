import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';

@Component({
  //selector: '[app-servers]',
  //selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {
  allowAddServer = false;
  serverAddServerStatus ='No new server added';
  serverNameInput:String;
  constructor() { 
    setTimeout(()=>{this.allowAddServer = true;},2000);

  }

  ngOnInit() {
  }

  onAddNewServer(){
    this.serverAddServerStatus = 'New server has been added';
  }

  onServerNameInput(event){
    this.serverNameInput = event.target.value;
  }
}
