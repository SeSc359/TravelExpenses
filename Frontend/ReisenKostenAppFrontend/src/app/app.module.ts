import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { CreateTravelExpenseComponent } from './create-travelexpense/create-travelexpense.component';
import { PastTravelExpensesComponent } from './past-travelexpenses/past-travelexpenses.component';

import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    CreateTravelExpenseComponent,
    PastTravelExpensesComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
