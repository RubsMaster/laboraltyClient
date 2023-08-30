import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LawsuitRoutingModule } from './lawsuit-routing.module';
import { LawsuitComponent } from './lawsuit.component';


@NgModule({
  declarations: [
    LawsuitComponent
  ],
  imports: [
    CommonModule,
    LawsuitRoutingModule
  ]
})
export class LawsuitModule { }
