import { TravelExpenseService } from './../travel-expense.service';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { Moment} from 'moment';
const moment = _moment;


export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-create-travel-expense',
  templateUrl: './create-travelexpense.component.html',
  styleUrls: ['./create-travelexpense.component.css']
})
export class CreateTravelExpenseComponent implements OnInit {

  expenseForm: FormGroup;
  travelExpenseList: TravelExpense[];

  constructor(private fb:FormBuilder, private travelExpenseService: TravelExpenseService, private router: Router) { }

  ngOnInit() {

    this.expenseForm = this.fb.group({
      id: [''],
      month: [''],
      year: [''],
      status: ['false']
    })
   
  
    
}

createExpense(){
  const travelExpense: TravelExpense = this.expenseForm.value;
  travelExpense.id = null;
  const dateValue :Moment = this.date.value;
  travelExpense.month = dateValue.month();
  travelExpense.year = dateValue.year();

  this.travelExpenseService.createTravelExpense(travelExpense).subscribe(travelExpense => {
    //  this.travelExpenseList.push(travelExpense);
     this.router.navigate([`/expenses/${travelExpense.id}/items/`]); }
  );
  
}

//
date = new FormControl(moment());

chosenYearHandler(normalizedYear: Moment) {
  const ctrlValue = this.date.value;
  ctrlValue.year(normalizedYear.year());
  this.date.setValue(ctrlValue);
}

chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
  const ctrlValue = this.date.value;
  ctrlValue.month(normalizedMonth.month());
  this.date.setValue(ctrlValue);
  datepicker.close();
}

}
