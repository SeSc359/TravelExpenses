import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TravelExpenseService {

  constructor( private httpClient:HttpClient) { }

  url:string = 'http://localhost:8080/travelexpense'
  httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json'}) };

  getAllTravelExpenses(){
    return this.httpClient.get(this.url);
  }

  getTravelExpenseById(id:number){
    return this.httpClient.get(`${this.url}/${id}`);
  }

  postTravelExpense(travelexpense:TravelExpense){
    return this.httpClient.post(this.url, travelexpense, this.httpOptions);
  }

}
