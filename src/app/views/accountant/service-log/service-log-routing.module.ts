import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceLogComponent } from './service-log.component';

const routes: Routes = [{ path: '', component: ServiceLogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceLogRoutingModule { }
