import { ActivatedRoute, Router } from '@angular/router';
import { TravelExpenseService } from './../travel-expense.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  sent: boolean = false;


  constructor(private travelExpenseService: TravelExpenseService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  sendMail(){    
    const exId = +this.route.snapshot.paramMap.get('expenseId');   
    this.travelExpenseService.sendWithAttachment(exId).subscribe(exId => { 
      this.router.navigate([`/expenselist/${exId}/`]); }
      );
    this.sent = true;
    }
}
