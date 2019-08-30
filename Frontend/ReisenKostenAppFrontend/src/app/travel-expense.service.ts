
import { Item } from './Entity/Item';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TravelExpenseService {

  travelExpense: TravelExpense;
  travelExpenseList: TravelExpense[] = [];
  
  url: string = "http://localhost:8080/expenses/";

  constructor(private http: HttpClient) { }

  getTravelExpenseList() {
    return this.http.get<TravelExpense[]>(`${this.url}`);
  }

  getTravelExpenseById(id: number): Observable<TravelExpense> {
    return this.http.get<TravelExpense>(`${this.url}/${id}`);
  }

  deleteTravelExpenseById(id: number): Observable<TravelExpense> {
    return this.http.delete<TravelExpense>(`${this.url}/${id}`);
  }

  updateStatus(id:number,updateStatusDto:boolean):Observable<TravelExpense>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put<TravelExpense>(`${this.url}/${id}`, updateStatusDto, httpOptions);
  }

  createTravelExpense(travelExpense: TravelExpense): Observable<TravelExpense> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<TravelExpense>(`${this.url}/create`, travelExpense, httpOptions);
  }

  createItem(item: Item, id:number): Observable<Item> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Item>(this.url + id +'/items', item, httpOptions);
  }

  createAttachment(item: Item, file: File) { 
    console.log(file);
    let formData = new FormData();
    formData.append('file', file);
       return this.http.post<File>(this.url + item.id + '/attachment', file);  
   }

   sendWithAttachment(item:Item): Observable<any> {
    return this.http.post(this.url +'send',item);
    // sendWithAttachment(item:Item, file :File): Observable<any> {
    // this.http.post("http://localhost:8080/send/{id}", file).subscribe();
    // this.travelExpenseService.getTravelExpenseById()
    // .subscribe(travelExpense=>(this.travelExpense= travelExpense));
  }

  //  onFileSelected(event){
  //    this.selecteFile =<File>event.target.files[0];
  //  }

  //  onUpload(){
  //    const fd = new FormData();
  //    fd.append('file', this.selecteFile, this.selecteFile.name);
  //    this.http.post("{this.url} + saveItem", fd,{
  //      reportProgress:true,observe:'events'})
  //      .subscribe(event=>{
  //        if (event.type===HttpEventType.Response){
  //          console.log(event);
  //        }
  //    });
  //  }

  //  submit(Item : Item) {
  //   console.log(Item);
    
  //   const httpOptions = {
  //     headers: new HttpHeaders({'content-type': 'application/json'}),
  //     responseType: 'arrayBuffer' as any
  //   };

  //   return this.http.post("http://localhost:8080//saveItem", Item, httpOptions);
  // }
  
 

}

