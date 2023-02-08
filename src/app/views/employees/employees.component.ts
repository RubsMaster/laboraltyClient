import { Component, OnInit } from '@angular/core';
import { EmployeesModel } from "../../models/employees";


// interface IUser {
//   idEmployee: number;
//   name: string;
//   business: string;
//   branch: string;
//   job: string;
//   department: string;
//   antiquity: string;
//   laborCompliance: string;
//   employmentFile: string;
//   actions: string;
//   avatar: string;
//   status: string;
//   color: string;
// }


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor(
    
   ) { }

  ngOnInit(): void {
  }
  getEmployees(){
    
  }

}
