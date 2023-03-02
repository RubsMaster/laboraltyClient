import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

//service
import { UsersService } from "../../../services/users/users.service";

// models
import { UserModel } from "../../../models/user";

import { DashboardChartsData, IChartProps } from '../../dashboard/dashboard-charts-data';



@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  
  p:number = 1;
  itemsPerPage:number = 8;

  constructor(
    private userService: UsersService,
    private chartsData: DashboardChartsData
  ) {
  }

  ListUsers: UserModel[] = [];

  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month')
  });

  ngOnInit(): void {
    this.getAllUsers();
  }

  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }  

  getAllUsers() {
    this.userService.getAllUsers().subscribe( data => {
      this.ListUsers = data.reverse();
      console.log(this.ListUsers);
    })
  }

}
