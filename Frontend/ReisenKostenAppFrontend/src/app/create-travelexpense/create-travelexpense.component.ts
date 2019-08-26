import { TravelExpenseService } from './../travel-expense.service';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
  this.travelExpenseService.createTravelExpense(travelExpense).subscribe(travelExpense => {
    //  this.travelExpenseList.push(travelExpense);
     this.router.navigate([`/expenses/${travelExpense.id}/items/`]); }
  );
  
}

}
