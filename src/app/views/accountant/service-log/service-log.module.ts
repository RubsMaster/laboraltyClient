import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceLogRoutingModule } from './service-log-routing.module';
import { ServiceLogComponent } from './service-log.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  SharedModule,
  TableModule
} from '@coreui/angular';

import { DocsComponentsModule } from '@docs-components/docs-components.module';

import { FormsRoutingModule } from '../../forms/forms-routing.module';
import { NgxPaginationModule } from "ngx-pagination";

import { IconModule } from '@coreui/icons-angular';
import { ToastModule } from '@coreui/angular';


@NgModule({
  declarations: [
    ServiceLogComponent
  ],
  imports: [
    CommonModule,
    ServiceLogRoutingModule,
    CommonModule,
    FormsRoutingModule,
    DocsComponentsModule,
    CardModule,
    GridModule,
    ButtonModule,
    ReactiveFormsModule,
    FormModule,
    ButtonGroupModule,
    DropdownModule,
    SharedModule,
    ListGroupModule,
    TableModule,
    NgxPaginationModule,
    IconModule
  ]
})
export class ServiceLogModule { }

