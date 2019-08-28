import { Component, OnInit } from '@angular/core';

import { EmailService } from '../email.service';
import { Item } from '../Entity/Item';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class EmailComponent implements OnInit {

  ngOnInit() {
  }

  travelExpense :TravelExpense = new TravelExpense();
  item: Item = new Item();

  constructor(private emailService :EmailService) { }

  Email() {
    this.emailService.Email(this.travelExpense).subscribe();
    this.emailService.Email(this.item).subscribe();
  }

 


}