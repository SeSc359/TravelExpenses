import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ngfModule, ngf} from "angular-file"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { CreateTravelExpenseComponent, MY_FORMATS } from './create-travelexpense/create-travelexpense.component';
import { PastTravelExpensesComponent } from './past-travelexpenses/past-travelexpenses.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ItemFormComponent } from './item-form/item-form.component';
import {MatDatepickerModule, MatMonthView} from '@angular/material/datepicker';

import { TravelExpensesDetailComponent } from './travel-expenses-detail/travel-expenses-detail.component';
import { MatNativeDateModule, DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MomentDateModule, MomentDateAdapter} from '@angular/material-moment-adapter';

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    CreateTravelExpenseComponent,
    PastTravelExpensesComponent,
    HomeComponent, 
    ItemFormComponent,
    TravelExpensesDetailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ngfModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MomentDateModule
  ],
  providers: [ {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
  {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},],
  bootstrap: [AppComponent]
})
export class AppModule { }
