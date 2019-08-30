import { TravelExpense } from './../Entity/TravelExpense';
import { TravelExpenseService } from './../travel-expense.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../Entity/Item';

@Component({
  selector: 'app-travel-expenses-detail',
  templateUrl: './travel-expenses-detail.component.html',
  styleUrls: ['./travel-expenses-detail.component.css']
})

export class TravelExpensesDetailComponent implements OnInit {
  travelExpense: TravelExpense;
    itemList: Item[];

  constructor(private travelExpenseService: TravelExpenseService, private route: ActivatedRoute) { }
 
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('expenseId');
    
    this.travelExpenseService.getTravelExpenseById(id).subscribe(travelExpense=>(this.travelExpense = travelExpense));
    this.travelExpenseService.getItemsByTrexId(id).subscribe(itemList =>(this.itemList = itemList));
    this.travelExpenseService.getTotalCosts(id).subscribe(costs =>(this.travelExpense.costs = costs));
  }

  alreadySent() {

  }
}
