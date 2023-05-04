import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaborFileSectionsRoutingModule } from './labor-file-sections-routing.module';
import { LaborFileSectionsComponent } from './labor-file-sections.component';

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

import { FormsRoutingModule } from '../../forms/forms-routing.module';

@NgModule({
  declarations: [
    LaborFileSectionsComponent
  ],
  imports: [
    CommonModule,
    LaborFileSectionsRoutingModule,
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
    ListGroupModule
  ]
})
export class LaborFileSectionsModule { }
