import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditEmployeesComponent } from './add-edit-employees.component';

import { FloatingLabelsComponent } from '../../views/forms/floating-labels/floating-labels.component';
import { FormControlsComponent } from '../../views/forms/form-controls/form-controls.component';
import { InputGroupsComponent } from '../../views/forms/input-groups/input-groups.component';
import { RangesComponent } from '../../views/forms/ranges/ranges.component';
import { SelectComponent } from '../../views/forms/select/select.component';
import { ChecksRadiosComponent } from '../../views/forms/checks-radios/checks-radios.component';
import { LayoutComponent } from '../../views/forms/layout/layout.component';
import { ValidationComponent } from '../../views/forms/validation/validation.component';

const routes: Routes = [{ path: '', component: AddEditEmployeesComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEditEmployeesRoutingModule { }
