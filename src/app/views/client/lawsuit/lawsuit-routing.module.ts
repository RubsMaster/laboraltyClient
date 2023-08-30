import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LawsuitComponent } from './lawsuit.component';

const routes: Routes = [{ path: '', component: LawsuitComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LawsuitRoutingModule { }
