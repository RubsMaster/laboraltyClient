import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaborFileSectionsComponent } from './labor-file-sections.component';

const routes: Routes = [{ path: '', component: LaborFileSectionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaborFileSectionsRoutingModule { }
