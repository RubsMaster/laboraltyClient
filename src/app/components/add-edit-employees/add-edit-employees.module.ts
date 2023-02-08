import { AddEditEmployeesRoutingModule } from './add-edit-employees-routing.module';
import { AddEditEmployeesComponent } from './add-edit-employees.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

import { FormsRoutingModule } from '../../views/forms/forms-routing.module';
import { RangesComponent } from '../../views/forms/ranges/ranges.component';
import { FloatingLabelsComponent } from '../../views/forms/floating-labels/floating-labels.component';
import { FormControlsComponent } from '../../views/forms/form-controls/form-controls.component';
import { SelectComponent } from '../../views/forms/select/select.component';
import { ChecksRadiosComponent } from '../../views/forms/checks-radios/checks-radios.component';
import { InputGroupsComponent } from '../../views/forms/input-groups/input-groups.component';
import { LayoutComponent } from '../../views/forms/layout/layout.component';
import { ValidationComponent } from '../../views/forms/validation/validation.component';

@NgModule({
  declarations: [
    AddEditEmployeesComponent,
    ],
  imports: [
    CommonModule,
    AddEditEmployeesRoutingModule,
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
    ListGroupModule
  ]
})
export class AddEditEmployeesModule { }
