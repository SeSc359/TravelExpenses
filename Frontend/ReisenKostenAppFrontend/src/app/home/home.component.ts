import { Router } from '@angular/router';
import { User } from './../Entity/User';
import { TravelExpenseService } from './../travel-expense.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private travelExpenseService: TravelExpenseService, private router: Router) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      id: [''],
      name: [''],
      staffNumber: [''],
      email: [''],
    })
  }

  userSubmit() {
    const user: User = this.userForm.value;
    user.id = null;
    this.travelExpenseService.createUser(user).subscribe(user => { 
      this.router.navigate([`/expenses/create`]); 
    });

  }

}
