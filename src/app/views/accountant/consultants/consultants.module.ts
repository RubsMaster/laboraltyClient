import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultantsRoutingModule } from './consultants-routing.module';
import { ConsultantsComponent } from './consultants.component';


@NgModule({
  declarations: [
    ConsultantsComponent
  ],
  imports: [
    CommonModule,
    ConsultantsRoutingModule
  ]
})
export class ConsultantsModule { }
