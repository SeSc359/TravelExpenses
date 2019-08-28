import { UploadComponent } from './upload/upload.component';
import { HomeComponent } from './home/home.component';

import { CreateTravelExpenseComponent } from './create-travelexpense/create-travelexpense.component';
import { PastTravelExpensesComponent } from './past-travelexpenses/past-travelexpenses.component';
import { StatusComponent } from './status/status.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemFormComponent } from './item-form/item-form.component';
import { TravelExpensesDetailComponent } from './travel-expenses-detail/travel-expenses-detail.component';

const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'expenses/:expenseId/items', component: ItemFormComponent},
  { path: 'status', component: StatusComponent },
  { path: 'expenses/create', component: CreateTravelExpenseComponent},
  { path: 'expenselist', component: PastTravelExpensesComponent },
  { path: 'expenselist/:expenseId', component:TravelExpensesDetailComponent},
  { path: 'items/:itemId/attachment', component:UploadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
