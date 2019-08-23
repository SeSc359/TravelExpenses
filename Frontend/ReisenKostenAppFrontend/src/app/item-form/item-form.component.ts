
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
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
  Items: FormArray;
 
  ItemList: Item[];
  Item : Item
  isCreating: boolean = false;

  files: File[];
  file: File;
  error: string ="Not Funded"

  constructor(private fb:FormBuilder,private travelExpenseService: TravelExpenseService) { }
  
  openForm(){
    this.isCreating = true;
  }
 
  ngOnInit() {
   // this.itemForm = this.fb.group({
  //   id: [''],
  //   date: [''],
  //   description: [''],      
  //   amount: [''],      
   
  // });
  this.itemForm = this.fb.group({
    Items: this.fb.array([ this.createItem() ])
  });
}

createItem(): FormGroup {
  return this.fb.group({
    date: [''],
    description: [''],      
    amount: [''],
  });
}

handleAddItem() {
  this.Items = this.itemForm.get('Items') as FormArray;
  this.Items.push(this.createItem());
}

// handleRemoveItem(i:number) {
//   this.Items = this.itemForm.get('Items') as FormArray;
//   this.Items.removeAt(i);
// }

  //  createItem(){
  //   const Item: Item = this.itemForm.value;
  //   Item.id = null;
  //   this.travelExpenseService.createItem(Item).subscribe(Item => this.ItemList.push(Item));
  //  }
  
  FileSelect(){
  this.travelExpenseService.onFileSelected(event);
}
 
   uploadFileToActivity() {
     this.travelExpenseService.onUpload();   
 }

handleSubmit(event: Event) {
  // if (!this.itemForm.valid) {
  //   console.warn("Form invalid");
  //   return;
  // }
  const Item: Item = this.itemForm.value;
  Item.id = null;
  this.travelExpenseService.submit(Item);
 
}



   

}
