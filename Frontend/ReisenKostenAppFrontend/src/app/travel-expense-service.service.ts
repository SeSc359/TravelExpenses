import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelExpenseServiceService {
  travelexpenseList:TravelExpense[];

  constructor(private http: HttpClient) { }

  getTravelExpenseList(){
    return this.http.get<TravelExpense[]>('http://localhost:8080/index');
  }


  getTravelExpenseById(id:number) : Observable<TravelExpense>{
      return this.http.get<TravelExpense>("http://localhost:8080/index/" + id);
  }
  
  deleteTravelExpenseById(id:number):Observable<TravelExpense>{
    return this.http.delete<TravelExpense>("http://localhost:8080/index/" + id);
  }

  createTravelExpense(travelexpense :TravelExpense){
    const httpOptions = {
      headers : new HttpHeaders({'Content-type':'application/json'}),
   };
    return this.http.post<TravelExpense>("http://localhost:8080/save", travelexpense, httpOptions);
 }

}

