import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardChartsData, IChartProps } from "./admin-dashboard-charts-data";

import {
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
// import { DashboardRoutingModule } from '../../dashboard/dashboard-routing.module';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { WidgetsModule } from "../../widgets/widgets.module";
import { EmployeesModule } from "../../employees/employees.module";
import {NgxPaginationModule} from 'ngx-pagination';

interface IUser {
  idEmployee: number;
  name: string;
  business: string;
  branch: string;
  job: string;
  department: string;
  antiquity: string;
  laborCompliance: string;
  employmentFile: string;
  actions: string;
  avatar: string;
  status: string;
  color: string;
}

import {
  DropdownModule,
  ListGroupModule,
  SharedModule
} from '@coreui/angular';

import { DocsComponentsModule } from '@docs-components/docs-components.module';

import { FormsRoutingModule } from '../../../views/forms/forms-routing.module';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    
    
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    WidgetsModule,
    EmployeesModule,
    // DashboardRoutingModule,
    CardModule,
    NavModule,
    IconModule,
    TabsModule,
    CommonModule,
    GridModule,
    ProgressModule,
    ReactiveFormsModule,
    ButtonModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    ChartjsModule,
    AvatarModule,
    TableModule,
    WidgetsModule,
    CommonModule,
    FormsRoutingModule,
    DocsComponentsModule,
    CardModule,
    FormModule,
    GridModule,
    ButtonModule,
    ReactiveFormsModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    DropdownModule,
    SharedModule,
    ListGroupModule,
    NgxPaginationModule
  ]
})

export class AdminDashboardModule {}
