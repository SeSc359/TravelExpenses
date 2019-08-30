import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs'
import {
  HttpClient, HttpRequest,
  HttpResponse, HttpEvent
} from '@angular/common/http'
import { Item } from '../Entity/Item';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  ngOnInit() {
    
   }

  itemId = +this.route.snapshot.paramMap.get('itemId');
  item: Item;
  accept = '*'
  files:File[] = []
  progress:number
  
  url = `http://localhost:8080/items/${this.itemId}/attachment`;
  hasBaseDropZoneOver:boolean = false
  httpEmitter:Subscription
  httpEvent:HttpEvent<{}>
  lastFileAt:Date
 
  sendableFormData:FormData//populated via ngfFormData directive
 
  dragFiles:any
  validComboDrag:any
  lastInvalids:any
  fileDropDisabled:any
  maxSize: 10000000;
  baseDropValid:any
 
  constructor(private HttpClient: HttpClient, private route: ActivatedRoute){}
 
  cancel(){
    this.progress = 0
    if( this.httpEmitter ){
      console.log('cancelled')
      this.httpEmitter.unsubscribe()
    }
  }
 
  uploadFiles():Subscription{
    const req = new HttpRequest<FormData>(
      'POST',
      this.url,
      this.sendableFormData, {
      reportProgress: true//, responseType: 'text'
    })
    
    return this.httpEmitter = this.HttpClient.request(req)
    .subscribe(
      event=>{
        this.httpEvent = event
        
        if (event instanceof HttpResponse) {
          delete this.httpEmitter
          console.log('request done', event)
        }
      },
      error=>alert('Error Uploading Files: '+error.message)
    )
  }
 
  getDate(){
    return new Date()
  }
  
 

}
