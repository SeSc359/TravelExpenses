import { TravelExpense } from './../Entity/TravelExpense';
import { Item } from '../Entity/Item';
import { TravelExpenseService } from './../travel-expense.service';
import { ngfModule, ngf } from "angular-file";
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  itemForm: FormGroup;
  travelExpenseList: TravelExpense[];
  travelExpense: TravelExpense;

  itemList: Item[];
  item: Item
  
  constructor(private fb: FormBuilder, private travelExpenseService: TravelExpenseService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.itemForm = this.fb.group({
      id: [''],
      date: [''],
      description: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0)]],
      file: ['']
  })
  }

  itemSubmit() {
    const item: Item = this.itemForm.value;
    item.id = null;
    const exId = +this.route.snapshot.paramMap.get('expenseId');
    this.travelExpenseService.createItem(item, exId).subscribe(item => { 
      // this.itemList.push(item); 
      this.router.navigate([`/items/${item.id}/attachment/`]); 
    });

  }
 
  
  // attachmentSubmit() {
  //   this.travelExpenseService.createAttachment(this.item, this.files).subscribe();
  // }

  Email(){
    
    const item: Item = this.itemForm.value;
    const exId = +this.route.snapshot.paramMap.get('expenseId');   
    this.travelExpenseService.sendWithAttachment(item).subscribe();
}
}

