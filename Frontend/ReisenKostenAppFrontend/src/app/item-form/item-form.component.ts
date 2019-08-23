import { Item } from '../Entity/Item';
import { TravelExpenseService } from './../travel-expense.service';


import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  itemForm: FormGroup;
  ItemList: Item[];

  constructor(private fb:FormBuilder,private travelExpenseService: TravelExpenseService) { }
  ngOnInit() {

    this.itemForm = this.fb.group({
      id: [''],
      date: [''],
      description: [''],      
      amount: [''],      
      status: ['false']
    })

  }

  createItem(){
    const item: Item = this.itemForm.value;
    item.id = null;
    this.travelExpenseService.createItem(item).subscribe(item => this.ItemList.push(item));
   }

}