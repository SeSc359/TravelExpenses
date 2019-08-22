import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ngfModule, ngf } from "angular-file"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { CreateTravelExpenseComponent } from './create-travelexpense/create-travelexpense.component';
import { PastTravelExpensesComponent } from './past-travelexpenses/past-travelexpenses.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { UploaderAttachmentComponent } from './uploader-attachment/uploader-attachment.component';


@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    CreateTravelExpenseComponent,
    PastTravelExpensesComponent,
    HomeComponent,
    ItemFormComponent,
    UploaderAttachmentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ngfModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
