import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Widgets } from "../models/widgets";

@Injectable({
  providedIn: 'root'
})
export class WidgetsService {

  URL_API="http://localhost:3000/ping"

  

  constructor(
    private http: HttpClient
    ) { }


  getEmployees() {
    return this.http.get<Widgets>(this.URL_API)
  }


}
