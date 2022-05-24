import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { PocketService } from '../pocket.service';

@Component({
  selector: 'app-pocket-list',
  templateUrl: './pocket-list.component.html',
  styleUrls: ['./pocket-list.component.css']
})
export class PocketListComponent implements OnInit {

@Input() pockets={};
@Output() message=new EventEmitter();
localproperty:any;

constructor() {}
ngOnInit(): void {  
}  

sendData(data:any){
  console.log("pocket-list",data);
  this.localproperty=data;
  this.message.emit(this.localproperty);
}

}
