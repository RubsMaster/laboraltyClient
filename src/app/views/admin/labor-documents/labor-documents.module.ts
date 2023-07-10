import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaborDocumentsRoutingModule } from './labor-documents-routing.module';
import { LaborDocumentsComponent } from './labor-documents.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';

import { QuillModule } from "ngx-quill";


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
    LaborDocumentsRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsRoutingModule,
    DocsComponentsModule,
    CardModule,
    FormModule,
    ButtonModule,
    FormsModule,
    ButtonGroupModule,
    DropdownModule,
    SharedModule,
    ListGroupModule,
    NavModule,
    IconModule,
    TabsModule,
    ProgressModule,
    ChartjsModule,
    TableModule,
    DocsComponentsModule,
    GridModule,
    NgxPaginationModule,
    QuillModule
  ]
})
export class LaborDocumentsModule { 
  
}
