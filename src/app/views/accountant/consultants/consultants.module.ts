import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultantsRoutingModule } from './consultants-routing.module';
import { ConsultantsComponent } from './consultants.component';

import { MomentModule } from 'ngx-moment';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from "ngx-pagination";

import {
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  ProgressModule,
  SharedModule,
  TableModule
} from '@coreui/angular';

@NgModule({
  declarations: [
    ConsultantsComponent
  ],
  imports: [
    AvatarModule,
    CommonModule,
    ConsultantsRoutingModule,
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
    ProgressModule,
    TableModule,
    MomentModule,
    NgxPaginationModule
  ]
})
export class ConsultantsModule { }
