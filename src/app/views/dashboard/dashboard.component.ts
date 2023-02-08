import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

// models
import { EmployeesModel } from "../../models/employees";

// services
import { EmployeesService } from "../../services/employees/employees.service";


import { DashboardChartsData, IChartProps } from './dashboard-charts-data';


@Component({
  templateUrl: 'dashboard.component.html',  
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(
    private chartsData: DashboardChartsData,
    private employeeService: EmployeesService
    ) {
  }

  public users: EmployeesModel[] = [
    {
      idEmployee: 1,
      name: 'Ruben Soto',
      business: 'DevCUU',
      branch: 'Central',
      job: 'Desarrollador Full-stack jr',
      department: 'Desarrollo',
      antiquity: 'Menos 1 mes',
      laborCompliance: '87',

      employmentFile: 'string',
      actions: 'string',

      avatar: './assets/img/avatars/1.jpg',
      status: 'success',
      color: 'success'
    },
    {
      idEmployee: 2,
      name: 'Hugo Lujan',
      business: 'DevCUU',
      branch: 'Central',
      job: 'Desarrollador Full-stack jr',
      department: 'Desarrollo',
      antiquity: 'Menos 1 mes',
      laborCompliance: '34',

      employmentFile: 'string',
      actions: 'string',

      avatar: './assets/img/avatars/2.jpg',
      status: 'warning',
      color: 'warning'
    },
    {
      idEmployee: 3,
      name: 'Ruben Loya',
      business: 'RALL',
      branch: 'Secundaria',
      job: 'Supervisor',
      department: 'Ventas',
      antiquity: '7 meses',
      laborCompliance: '55',

      employmentFile: 'string',
      actions: 'string',

      avatar: './assets/img/avatars/4.jpg',
      status: 'success',
      color: 'success'
    }
  ];



  
  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month')
  });

  ngOnInit(): void {
    this.initCharts();
  }

  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }
}
