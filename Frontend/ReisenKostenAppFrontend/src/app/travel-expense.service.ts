
import { Item } from './Entity/Item';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelExpenseService {
  travelExpenseList: TravelExpense[] = [];
  selecteFile : File=null;

  url: string = "http://localhost:8080/travelexpense/";

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

  createItem(Item: Item): Observable<Item> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Item>("{this.url} + saveItem", Item, httpOptions);
  }

  createAttachment(ItemId: number, file: File): Observable<any> { 
    console.log(file);
    let formData = new FormData();
    formData.append('file', file);
       return this.http.put<File>('{this.url} + attachment', file);  
   }

   onFileSelected(event){
     this.selecteFile =<File>event.target.files[0];
   }

   onUpload(){
      const httpOptions = {
      headers: new HttpHeaders({'Content-Type': undefined})};
      const fd = new FormData();
      fd.append('file', this.selecteFile);
      this.http.post("{this.url} + attachment", fd, httpOptions)
      //{
  //    reportProgress:true,observe:'events'})
  //  .subscribe(event=>{
  //    if (event.type===HttpEventType.Response){
  //    console.log(event);
  //    }
  //   });
        
   }

   submit(Item : Item) {
    console.log(Item);
    
    const httpOptions = {
      headers: new HttpHeaders({'content-type': 'application/json'}),
      responseType: 'arrayBuffer' as any
    };

    return this.http.post("http://localhost:8080//saveItem", Item, httpOptions);
  }
  
 

}

