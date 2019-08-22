import { TravelExpenseServiceService } from './../travel-expense-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploader-attechment',
  templateUrl: './uploader-attechment.component.html',
  styleUrls: ['./uploader-attechment.component.css']
})
export class UploaderAttechmentComponent implements OnInit {

  constructor(private attachmentservice: TravelExpenseServiceService) { }

  ngOnInit() {
  }

  // fileUpload(files){
    
  //     console.log('files', files)
  //         var formData = new FormData();
  
  //     for(let i =0; i < files.length; i++){
  //       formData.append("files", files[i], files[i]['name']);
  //         }
  
  //     this.attachmentservice.OnUploadFile(formData)
  //       .subscribe((response) => {
  //         console.log('response', response)
  //       }
    

  


}
