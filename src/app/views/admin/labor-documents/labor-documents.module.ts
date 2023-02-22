import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaborDocumentsRoutingModule } from './labor-documents-routing.module';
import { LaborDocumentsComponent } from './labor-documents.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';


import {
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule
} from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';

import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  SharedModule
} from '@coreui/angular';

import {NgxPaginationModule} from 'ngx-pagination';

import { DocsComponentsModule } from '@docs-components/docs-components.module';

import { FormsRoutingModule } from '../../forms/forms-routing.module';


@NgModule({
  declarations: [
    LaborDocumentsComponent
  ],
  imports: [
    CommonModule,
    LaborDocumentsRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    CommonModule,
    FormsRoutingModule,
    DocsComponentsModule,
    CardModule,
    FormModule,
    GridModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    DropdownModule,
    SharedModule,
    ListGroupModule,
    CommonModule,
    // DashboardRoutingModule,
    CardModule,
    NavModule,
    IconModule,
    TabsModule,
    CommonModule,
    GridModule,
    ProgressModule,
    ReactiveFormsModule,
    ButtonModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    ChartjsModule,
    TableModule,
    FormsRoutingModule,
    DocsComponentsModule,
    CardModule,
    FormModule,
    GridModule,
    ButtonModule,
    ReactiveFormsModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    DropdownModule,
    SharedModule,
    ListGroupModule,
    NgxPaginationModule
  ]
})
export class LaborDocumentsModule { 
  
}
