
import { TravelExpenseService } from './../travel-expense.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-uploader-attachment',
  templateUrl: './uploader-attachment.component.html',
  styleUrls: ['./uploader-attachment.component.css']
})
export class UploaderAttachmentComponent implements OnInit {

  files: File[];
  
  file: File;
 
  error: string;



  constructor(private travelExpenseService: TravelExpenseService) { }

  ngOnInit() {
   
  }

  handleFileInput(files: FileList) {
     this.file = files.item(0);
 }

  uploadFileToActivity() {
    
   this.travelExpenseService.createAttachment(this.file).subscribe((response) => {
      console.log('response', response)
    }, error => {
      console.log(error);
    });
}
}
