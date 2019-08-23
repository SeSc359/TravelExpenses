import { TravelExpenseService } from './../travel-expense.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-travel-expensens',
  templateUrl: './past-travelexpenses.component.html',
  styleUrls: ['./past-travelexpenses.component.css']
})
export class PastTravelExpensesComponent implements OnInit {
  travelExpenseList: TravelExpense[];

  constructor(private travelExpenseService: TravelExpenseService) { }

  ngOnInit() {
   
    this. travelExpenseService.getTravelExpenseList().subscribe(travelExpenses=>(this.travelExpenseList = travelExpenses));
  }
  }


