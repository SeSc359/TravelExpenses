import { TrexItem } from './../Entity/TrexItem';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TravelExpenseServiceService } from '../travel-expense-service.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  itemForm: FormGroup;
  trexItemList: TrexItem[];

  constructor(private fb:FormBuilder,private travelExpenseService: TravelExpenseServiceService) { }
  ngOnInit() {

    this.itemForm = this.fb.group({
      id: [''],
      date: [''],
      description: [''],      
      amount: [''],      
      status: ['false']
    })

  }

  createTrexItem(){
    const trexItem: TrexItem = this.itemForm.value;
    trexItem.id = null;
    this.travelExpenseService.createTrexItem(trexItem).subscribe(travelItem => this.trexItemList.push(trexItem));
   }

}
