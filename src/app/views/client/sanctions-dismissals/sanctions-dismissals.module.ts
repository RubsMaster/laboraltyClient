import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SanctionsDismissalsRoutingModule } from './sanctions-dismissals-routing.module';
import { SanctionsDismissalsComponent } from './sanctions-dismissals.component';


@NgModule({
  declarations: [
    SanctionsDismissalsComponent
  ],
  imports: [
    CommonModule,
    SanctionsDismissalsRoutingModule
  ]
})
export class SanctionsDismissalsModule { }
