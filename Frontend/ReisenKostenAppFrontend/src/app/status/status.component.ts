import { ActivatedRoute } from '@angular/router';
import { TravelExpenseService } from './../travel-expense.service';


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

  constructor(private travelExpenseService: TravelExpenseService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.travelExpenseService.getTravelExpenseList().subscribe(travelExpenses=>(this.travelExpenseList = travelExpenses));
  }
  
  statusChange() {
     
     this.statuscolor = 'yellow';
  }

  delete(){
    
    const exId = this.travelExpenseList.indexOf(this.travelExpense);
    // this.travelExpenseService.statusChange(exId).subscribe(()=>this.travelExpenseList.splice(exId, 1));
    this.travelExpenseList.splice(exId, 1);
    // this.travelExpenseService.statusChange(id,true);
}
  
  

  


}
