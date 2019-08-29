import { Item } from '../Entity/Item';
import { TravelExpenseService } from './../travel-expense.service';
import { ngfModule, ngf } from "angular-file";
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Moment } from 'moment';



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
  
  startDate:Date;

  constructor(private fb: FormBuilder, private travelExpenseService: TravelExpenseService, private route: ActivatedRoute) { }

  

  ngOnInit() {
    this.itemForm = this.fb.group({
      id: [''],
      date: [''],
      description: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0)]]      
  })
    const exId = +this.route.snapshot.paramMap.get('expenseId');
    this.travelExpenseService.getTravelExpenseById(exId).subscribe(travelExpense =>( this.travelExpense=travelExpense));
    this.startDate = new Date(this.travelExpense.year, this.travelExpense.month, 1);
  }

  itemSubmit() {
    const item: Item = this.itemForm.value;
    item.id = null;
    const exId = +this.route.snapshot.paramMap.get('expenseId');
    this.travelExpenseService.createItem(item, exId).subscribe(item => this.itemList.push(item));
  }

  dateFilter = (d: Moment): boolean => {
    const month = d.month();
    const year = d.year();
    return (month === this.travelExpense.month && year === this.travelExpense.year);
  }

  // attachmentSubmit() {
  //   this.travelExpenseService.createAttachment(this.item, this.files).subscribe();
  // }
}

