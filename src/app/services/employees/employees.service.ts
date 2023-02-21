import { Injectable } from '@angular/core';
  import { HttpClient } from "@angular/common/http";
  import { Observable } from 'rxjs';

import { EmployeesModel } from "../../models/employees";


@Injectable({
  providedIn: "root",
})
export class EmployeesService {
  URI_API = "http://localhost:4000/";
  
  constructor(
    private http: HttpClient
  ) {}

  getEmployees():Observable<EmployeesModel[]> {
    const allEmployees = this.http.get<EmployeesModel[]>(this.URI_API+'getAllEmployees');
    return allEmployees;
  }

  deleteEmployee(idEmployee: number):Observable<void>{
    return this.http.delete<void>(this.URI_API+"/"+idEmployee) 
  }
}
