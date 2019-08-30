import { TravelExpense } from './../Entity/TravelExpense';
import { TravelExpenseService } from './../travel-expense.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})

export class StatusComponent implements OnInit {

  statuscolor = 'yellow';
  travelExpenseList: TravelExpense[];
  travelExpense: TravelExpense;

  constructor(private travelExpenseService: TravelExpenseService) { }

  ngOnInit() {
    this.travelExpenseService.getTravelExpenseList().subscribe(travelExpenses => (this.travelExpenseList = travelExpenses));
  }

  statusChange() {
    this.statuscolor = "green";
  }

  statusUpdate() {
    const id = this.travelExpenseList.indexOf(this.travelExpense);
    this.travelExpenseList.splice(id, 1);
    this.travelExpense.status = true;
  }

}
