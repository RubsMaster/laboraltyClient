import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminFormRoutingModule } from './admin-form-routing.module';
import { AdminFormComponent } from './admin-form.component';

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

import { FormsRoutingModule } from '../../../forms/forms-routing.module';

@NgModule({
  declarations: [
    AdminFormComponent
  ],
  imports: [
    CommonModule,
    AdminFormRoutingModule,
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
    ListGroupModule
  ]
})
export class AdminFormModule { }
