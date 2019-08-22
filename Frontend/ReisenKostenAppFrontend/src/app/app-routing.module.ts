import { HomeComponent } from './home/home.component';

import { CreateTravelExpenseComponent } from './create-travelexpense/create-travelexpense.component';
import { PastTravelExpensesComponent } from './past-travelexpenses/past-travelexpenses.component';
import { StatusComponent } from './status/status.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemFormComponent } from './item-form/item-form.component';



const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'item', component: ItemFormComponent},
  { path: 'status', component: StatusComponent },
  { path: 'create', component: CreateTravelExpenseComponent},
  { path: 'expenselist', component: PastTravelExpensesComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
