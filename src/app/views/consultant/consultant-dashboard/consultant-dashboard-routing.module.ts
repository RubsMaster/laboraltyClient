import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultantDashboardComponent } from './consultant-dashboard.component';

const routes: Routes = [{ path: '', component: ConsultantDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultantDashboardRoutingModule { }
