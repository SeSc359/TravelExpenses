import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-traffic-expense',
  templateUrl: './create-traffic-expense.component.html',
  styleUrls: ['./create-traffic-expense.component.css']
})
export class CreateTrafficExpenseComponent implements OnInit {

  expenseForm: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {

    this.expenseForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      distense: [''],
      price: [''],
    })

}
}
