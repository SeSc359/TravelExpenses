import { Component, OnInit } from '@angular/core';
import { TravelExpenseServiceService } from '../travel-expense-service.service';

@Component({
  selector: 'app-past-travel-expensens',
  templateUrl: './past-travelexpenses.component.html',
  styleUrls: ['./past-travelexpenses.component.css']
})
export class PastTravelExpensesComponent implements OnInit {
  travelExpenseList: TravelExpense[];

  constructor(private travelExpenseService: TravelExpenseServiceService) { }

  ngOnInit() {
   
    this.travelExpenseService.getTravelExpenseList().subscribe(travelExpenses=>(this.travelExpenseList = travelExpenses));
  }
  }


