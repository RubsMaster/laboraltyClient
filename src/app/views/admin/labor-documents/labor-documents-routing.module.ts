import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaborDocumentsComponent } from './labor-documents.component';

const routes: Routes = [{ path: '', component: LaborDocumentsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaborDocumentsRoutingModule { }
