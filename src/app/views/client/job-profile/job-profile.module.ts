import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobProfileRoutingModule } from './job-profile-routing.module';
import { JobProfileComponent } from './job-profile.component';


@NgModule({
  declarations: [
    JobProfileComponent
  ],
  imports: [
    CommonModule,
    JobProfileRoutingModule
  ]
})
export class JobProfileModule { }
