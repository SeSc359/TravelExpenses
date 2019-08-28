import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  SERVER_URL = "http://localhost:8080/items/{id}/attachment";
  uploadForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      file: ['']
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('file').setValue(file);
    }
  }

  onSubmit() {
    // const httpOptions = {
    // headers: new HttpHeaders({'Content-Type': 'application/json'})};
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('file').value);

    this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
      // (res) => console.log(res),
      // (err) => console.log(err)
    );
  }

}
