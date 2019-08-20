import { Component, OnInit } from '@angular/core';
import { TravelExpenseServiceService } from '../travel-expense-service.service';

@Component({
  selector: 'app-past-travel-expensens',
  templateUrl: './past-travelexpenses.component.html',
  styleUrls: ['./past-travelexpenses.component.css']
})
export class PastTravelExpensesComponent implements OnInit {
  travelexpenseList: TravelExpense[];

  constructor(private travelexpenseService: TravelExpenseServiceService) { }

  ngOnInit() {
   
    this.travelexpenseService.getTravelExpenseList().subscribe(travelexpenses=>(this.travelexpenseList = travelexpenses));
 
  }

}
