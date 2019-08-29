import { ActivatedRoute } from '@angular/router';
import { TravelExpenseService } from './../travel-expense.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  constructor(private travelExpenseService: TravelExpenseService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  sendMail(){    
    const exId = +this.route.snapshot.paramMap.get('expenseId');   
    this.travelExpenseService.sendWithAttachment(exId).subscribe();
}

}
