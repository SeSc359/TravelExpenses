import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  personalForm = new FormGroup({
    name: new FormControl(''),
    staffNumber: new FormControl(''),
    email: new FormControl('')
  });

  ngOnInit() {
    
   
  }

}
