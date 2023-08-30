import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaborJourneysRoutingModule } from './labor-journeys-routing.module';
import { LaborJourneysComponent } from './labor-journeys.component';


@NgModule({
  declarations: [
    LaborJourneysComponent
  ],
  imports: [
    CommonModule,
    LaborJourneysRoutingModule
  ]
})
export class LaborJourneysModule { }
