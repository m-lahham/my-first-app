import { Component } from "@angular/core";



@Component({
    selector : 'app-server',
    templateUrl : './server.component.html',
    styles : [`
        .online {
            color : white
        }`,`
        .on-border{
            border: 1px solid #eaff00 !important ;
            padding: 0.01em 16px;
        }`
    ]

})
export class ServerComponent{

    serverStatus:String = Math.random() > 0.5 ?'Offline' : 'Online';
    serverId:number = 10;

    getColor(){
        return this.serverStatus == 'Online' ?'green':'red';
    }

    getServerStatus(){
        return this.serverStatus;
    }
}