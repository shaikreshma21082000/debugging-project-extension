import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { PocketService } from '../pocket.service';

@Component({
  selector: 'app-pocket-card',
  templateUrl: './pocket-card.component.html',
  styleUrls: ['./pocket-card.component.css']
})

export class PocketCardComponent implements OnInit {

  @Input()
  metadata: any;
  @Output()
  output=new EventEmitter();

  constructor(private pocketService: PocketService) { }

  ngOnInit(): void {
    this.metadata = {
       target:this.metadata.url,
       image:this.metadata.image,
       title:this.metadata.title,
       description:this.metadata.description,
       id:this.metadata.id
    }
  }

  delete(id:any){
    console.log("buttonclicked");
    // const url=`${this.metadata.target}+${this.metadata.id}`;
    console.log("delete",id);
    this.pocketService.deletecard(id).subscribe(()=>
    {
      this.pocketService.retrieveFromJson().subscribe((res)=>{
        console.log("pocket-card",res);
        this.output.emit(res);
      })
    }

    ); 
  }
}
