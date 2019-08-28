import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http :HttpClient) { }

  private baseUrl = 'http://localhost:8080/expenses/send/{id}';

  Email(email :Email): Observable<any> {
    return this.http.post(`${this.baseUrl}`, email);
  }

}