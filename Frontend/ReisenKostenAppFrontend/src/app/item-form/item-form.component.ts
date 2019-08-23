<<<<<<< HEAD
import { TrexItem } from './../Entity/TrexItem';
=======
import { Item } from '../Entity/Item';
import { TravelExpenseService } from './../travel-expense.service';


>>>>>>> features_lukas
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

<<<<<<< HEAD
  createTrexItem(){
    const trexItem: TrexItem = this.itemForm.value;
    // trexItem.id = null;
    this.travelExpenseService.createTrexItem(trexItem).subscribe(travelItem => this.trexItemList.push(trexItem));
=======
  createItem(){
    const Item: Item = this.itemForm.value;
    Item.id = null;
    this.travelExpenseService.createItem(Item).subscribe(Item => this.ItemList.push(Item));
>>>>>>> features_lukas
   }
   files: File[];
  
   file: File;
  
   error: string
 
   
 
   handleFileInput(files: FileList) {
      this.file = files.item(0);
  }
 
   uploadFileToActivity() {
     
    this.travelExpenseService.createAttachment(this.file).subscribe((response) => {
       console.log('response', response)
     }, error => {
       console.log(error);
     });
 }

   

}
