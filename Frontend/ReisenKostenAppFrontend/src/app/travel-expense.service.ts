import { TrexItem } from './Entity/TrexItem';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelExpenseService {
  travelExpenseList: TravelExpense[] = [];

  url: string = "'http://localhost:8080/travelexpense/";

  constructor(private http: HttpClient) { }

  getTravelExpenseList() {
    return this.http.get<TravelExpense[]>('{this.url} + index');
  }

  getTravelExpenseById(id: number): Observable<TravelExpense> {
    return this.http.get<TravelExpense>("{this.url} + index/" + id);
  }

  deleteTravelExpenseById(id: number): Observable<TravelExpense> {
    return this.http.delete<TravelExpense>("{this.url} + index/" + id);
  }

  createTravelExpense(travelExpense: TravelExpense): Observable<TravelExpense> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<TravelExpense>("{this.url} + saveExpense", travelExpense, httpOptions);
  }

  createTrexItem(trexItem: TrexItem): Observable<TrexItem> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<TrexItem>("{this.url} + saveItem", trexItem, httpOptions);
  }

  createAttachment(file: File): Observable<any> { 
    console.log(file);
    let formData = new FormData();
    formData.append('file', file);
       return this.http.put<File>('{this.url} + attachment', file);  
   }

}

