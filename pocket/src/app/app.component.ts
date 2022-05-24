import { Component, OnInit, Output } from '@angular/core';
import { PocketService } from './pocket/pocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  pocket: any = [];
  targetUrl: string = "";


  constructor(private pocketService: PocketService) {
  }

  ngOnInit() {
    this.pocketService.retrieveFromJson().subscribe((res)=>{
      console.log(res);
      this.pocket=res;
     
})
}

  //below code does not need debugging
  next=(data:any)=>{
      this.pocketService.saveInJson(data).subscribe((res)=>{
        this.pocketService.retrieveFromJson().subscribe((res)=>{
          console.log(res);
          this.pocket=res;
        })
      })
  }
  
  error=(err:any)=>{
    console.log(err);
  };
  add() {
    this.pocketService.scrape({ target: this.targetUrl }).subscribe(this.next,this.error)
  }

  refresh(info:any){
    console.log("grand parent",info);
    this.pocket=info;
    console.log("this is parent ",this.pocket);
  }
  
}



// add() {
//   this.pocketService.scrape({ target: this.targetUrl }).subscribe((data) => {
//     this.pocket[data.url] = data;
//     this.targetUrl = '';
//   })
// }