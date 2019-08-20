import { TravelExpenseServiceService } from './../travel-expense-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-travel-expense',
  templateUrl: './create-travelexpense.component.html',
  styleUrls: ['./create-travelexpense.component.css']
})
export class CreateTravelExpenseComponent implements OnInit {

  expenseForm: FormGroup;
  travelExpenseList: TravelExpense[];

  constructor(private fb:FormBuilder,private travelexpenseService: TravelExpenseServiceService) { }

  ngOnInit() {

    this.expenseForm = this.fb.group({
      id: [''],
      // name: [''],
      staffNumber: [''],
      // email: [''],
      month: [''],
      year: [''],
      costs: [''],
     status: ['false']
    })
}

createExpense(){
  const travelexpense: TravelExpense = this.expenseForm.value;
  travelexpense.id = null;
  this.travelexpenseService.createTravelExpense(travelexpense).subscribe(travelexpense => this.travelExpenseList.push(travelexpense));
 }

}
