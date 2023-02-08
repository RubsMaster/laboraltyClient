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

import { DocsComponentsModule } from '@docs-components/docs-components.module';

import { FormsRoutingModule } from '../../forms/forms-routing.module';


import { RangesComponent } from '../../../views/forms/ranges/ranges.component';
import { FloatingLabelsComponent } from '../../../views/forms/floating-labels/floating-labels.component';
import { FormControlsComponent } from '../../../views/forms/form-controls/form-controls.component';
import { SelectComponent } from '../../../views/forms/select/select.component';
import { ChecksRadiosComponent } from '../../../views/forms/checks-radios/checks-radios.component';
import { InputGroupsComponent } from '../../../views/forms/input-groups/input-groups.component';
import { LayoutComponent } from '../../../views/forms/layout/layout.component';
import { ValidationComponent } from '../../../views/forms/validation/validation.component';


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
    ListGroupModule
  ]
})
export class LaborDocumentsModule { 
  
}
