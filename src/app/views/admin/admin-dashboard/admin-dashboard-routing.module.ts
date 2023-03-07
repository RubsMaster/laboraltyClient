import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from '../users/users.component';
import { AdminDashboardComponent } from './admin-dashboard.component';

const routes: Routes = [{ path: '', component: AdminDashboardComponent },
{path: 'edit-user', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }

