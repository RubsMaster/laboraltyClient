import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConsultantDashboardRoutingModule } from './consultant-dashboard-routing.module';
import { ConsultantDashboardComponent } from './consultant-dashboard.component';

import { NgxPaginationModule } from "ngx-pagination";
import { MomentModule } from 'ngx-moment';

import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  SharedModule,
  AvatarModule,
  TableModule
} from '@coreui/angular';

@NgModule({
  declarations: [
    ConsultantDashboardComponent
  ],
  imports: [
    CommonModule,
    ConsultantDashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonGroupModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    FormModule,
    GridModule,
    ListGroupModule,
    SharedModule,
    AvatarModule,
    TableModule,
    NgxPaginationModule
  ]
})
export class ConsultantDashboardModule { }
