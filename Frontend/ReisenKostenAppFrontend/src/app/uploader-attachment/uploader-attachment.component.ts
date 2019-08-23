import { TravelExpenseService } from './../travel-expense.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploader-attachment',
  templateUrl: './uploader-attachment.component.html',
  styleUrls: ['./uploader-attachment.component.css']
})
export class UploaderAttachmentComponent implements OnInit {

  files: File;
  formData = FormData
  

  constructor(private travelExpenseService: TravelExpenseService) { }

  ngOnInit() {
  }
  createAttachment() {
   this.travelExpenseService.createAttachment(this.files).subscribe()
  }
}
