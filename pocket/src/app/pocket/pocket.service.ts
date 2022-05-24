//6
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PocketService {
  
  scraperApi: string = 'http://localhost:9090/scrape';
  constructor(private httpClient: HttpClient) {
  }
  scrape(data: any) {
     console.log("entered in scrape data")
     let datatoserver= this.httpClient.post<any>(this.scraperApi, data)
     return datatoserver
  }
  saveInJson(data:any){
     return this.httpClient.post<any>("http://localhost:3000/pocket", data)
  }
  retrieveFromJson(){
    return this.httpClient.get<any>("http://localhost:3000/pocket")
 }
 deletecard(id:any){
    const data="http://localhost:3000/pocket"+"/"+id;
    console.log("data",data);
    return (this.httpClient.delete(data));  
  }
 
}
