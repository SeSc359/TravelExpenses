import { TravelExpenseServiceService } from './../travel-expense-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  

  statuscolor='red';
  travelExpenseList: TravelExpense[];
  travelExpense: TravelExpense;

  constructor(private travelExpenseService: TravelExpenseServiceService) { }

  ngOnInit() {
    this.travelExpenseService.getTravelExpenseList().subscribe(travelExpenses=>(this.travelExpenseList = travelExpenses));
  }

  statusChange() {
      this.statuscolor = "yellow";
  }

  
  delete(){
    const id = this.travelExpenseList.indexOf(this.travelExpense);
    this.travelExpenseList.splice(id, 1);
    this.travelExpense.status=true;
}
  
  

  


}
