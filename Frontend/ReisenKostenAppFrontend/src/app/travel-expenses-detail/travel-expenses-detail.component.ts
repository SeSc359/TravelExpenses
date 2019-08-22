import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TravelExpenseServiceService } from '../travel-expense-service.service';

@Component({
  selector: 'app-travel-expenses-detail',
  templateUrl: './travel-expenses-detail.component.html',
  styleUrls: ['./travel-expenses-detail.component.css']
})
export class TravelExpensesDetailComponent implements OnInit {
  travelExpense: TravelExpense;  

  constructor(private travelExpenseServiceService: TravelExpenseServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('expenseId');
    this.travelExpenseServiceService.getTravelExpenseById(id).subscribe(travelExpense=>(this.travelExpense = travelExpense));
  }
}
