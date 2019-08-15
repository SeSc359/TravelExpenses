
import { CreateTrafficExpenseComponent } from './create-traffic-expense/create-traffic-expense.component';
import { TrafficListComponent } from './traffic-list/traffic-list.component';
import { StatusComponent } from './status/status.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo:'status',pathMatch:'full'},
  { path: 'status', component: StatusComponent },
  { path: 'create', component: CreateTrafficExpenseComponent},
  { path: 'expenselist', component: TrafficListComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
