import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  personalForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.personalForm = this.fb.group({
      id: [''],
      month: [''],
      year: [''],
      // costs: [''],
     status: ['false']
    })
  }

}
