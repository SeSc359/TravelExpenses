import { TravelExpense } from './../Entity/TravelExpense';
import { TravelExpenseService } from './../travel-expense.service';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-travel-expense',
  templateUrl: './create-travelexpense.component.html',
  styleUrls: ['./create-travelexpense.component.css']
})
export class CreateTravelExpenseComponent implements OnInit {

  expenseForm: FormGroup;
  travelExpenseList: TravelExpense[];

  constructor(private fb:FormBuilder, private route: ActivatedRoute, private travelExpenseService: TravelExpenseService, private router: Router) { }

  ngOnInit() {

    this.expenseForm = this.fb.group({
      id: [''],
      month: ['', Validators.required],
      year: ['', Validators.required],
      status: ['false']
    })   
}

createExpense(){
  const travelExpense: TravelExpense = this.expenseForm.value;
  travelExpense.id = null;
  const userId = +this.route.snapshot.paramMap.get('userId');
  this.travelExpenseService.createTravelExpense(travelExpense, userId).subscribe(travelExpense => {
    //  this.travelExpenseList.push(travelExpense);
     this.router.navigate([`/user/${userId}/expenses/${travelExpense.id}/items/`]); }
  );
  
}

}
