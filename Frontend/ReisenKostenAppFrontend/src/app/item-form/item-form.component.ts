import { TrexItem } from './../Entity/TrexItem';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TravelExpenseService } from '../travel-expense.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  itemForm: FormGroup;
  trexItemList: TrexItem[];
  trexItem : TrexItem
  isCreating: boolean = false;

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

  openForm(){
    this.isCreating = true;
  }

  createTrexItem(){
    const trexItem: TrexItem = this.itemForm.value;
    // trexItem.id = null;
    this.travelExpenseService.createTrexItem(trexItem).subscribe(travelItem => this.trexItemList.push(trexItem));
   }

   

}
