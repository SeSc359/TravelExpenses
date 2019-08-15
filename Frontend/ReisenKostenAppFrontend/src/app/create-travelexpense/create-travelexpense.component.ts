import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-travel-expense',
  templateUrl: './create-travelexpense.component.html',
  styleUrls: ['./create-travelexpense.component.css']
})
export class CreateTravelExpenseComponent implements OnInit {

  expenseForm: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {

    this.expenseForm = this.fb.group({
      name: [''],
      staffNumber: [''],
      email: [''],
      month: [''],
      year: [''],
      costs: [''],
    })

}
}
