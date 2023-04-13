import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaborFileSectionsRoutingModule } from './labor-file-sections-routing.module';
import { LaborFileSectionsComponent } from './labor-file-sections.component';


@NgModule({
  declarations: [
    LaborFileSectionsComponent
  ],
  imports: [
    CommonModule,
    LaborFileSectionsRoutingModule
  ]
})
export class LaborFileSectionsModule { }
