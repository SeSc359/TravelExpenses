
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TravelExpenseService } from '../travel-expense.service';
import { Item } from '../Entity/Item';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  itemForm: FormGroup;
  ItemList: Item[];
  Item : Item
  isCreating: boolean = false;
  
  
  files: File[];
  file: File;
  error: string ="Not Funded"

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

   createItem(){
    const Item: Item = this.itemForm.value;
    Item.id = null;
    this.travelExpenseService.createItem(Item).subscribe(Item => this.ItemList.push(Item));
   }
   
  FileSelect(){
  this.travelExpenseService.onFileSelected(event);
}
 
   uploadFileToActivity() {
     this.travelExpenseService.onUpload();
    
 }



   

}
