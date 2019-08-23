import { TravelExpenseService } from './../travel-expense.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
=======
import { TravelExpenseService } from '../travel-expense.service';
>>>>>>> features_YJ


@Component({
  selector: 'app-travel-expenses-detail',
  templateUrl: './travel-expenses-detail.component.html',
  styleUrls: ['./travel-expenses-detail.component.css']
})
export class TravelExpensesDetailComponent implements OnInit {
  travelExpense: TravelExpense;  

<<<<<<< HEAD
  constructor(private travelExpenseService: TravelExpenseService, private route: ActivatedRoute) { }
=======
  constructor(private travelExpenseServiceService: TravelExpenseService, private route: ActivatedRoute) { }
>>>>>>> features_YJ

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('expenseId');
    this.travelExpenseService.getTravelExpenseById(id).subscribe(travelExpense=>(this.travelExpense = travelExpense));
  }
}
