import { TravelExpenseServiceService } from './../travel-expense-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  // expenselist:Expense[];

  statuscolor='red';
  travelexpenseList: TravelExpense[];
  travelexpense: TravelExpense;

  constructor(private travelexpenseService: TravelExpenseServiceService) { }

  ngOnInit() {
    this.travelexpenseService.getTravelExpenseList().subscribe(travelexpenses=>(this.travelexpenseList = travelexpenses));
  }

  statusChange() {
      this.statuscolor = "yellow";
  }

  
  delete(){
    const id = this.travelexpenseList.indexOf(this.travelexpense);
    this.travelexpenseList.splice(id, 1);
    this.travelexpense.status=true;
}
  
  

  


}
