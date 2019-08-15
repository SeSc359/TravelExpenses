import { HomeComponent } from './home/home.component';

import { CreateTravelExpenseComponent } from './create-travelexpense/create-travelexpense.component';
import { PastTravelExpenseListComponent } from './past-travelexpenses/past-travelexpenses.component';
import { StatusComponent } from './status/status.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'status', component: StatusComponent },
  { path: 'create', component: CreateTravelExpenseComponent},
  { path: 'expenselist', component: PastTravelExpenseListComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
