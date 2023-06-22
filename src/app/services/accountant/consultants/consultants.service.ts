import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ClientModel } from 'src/app/models/client';
import { ConsultantModel } from "../../../models/consultant";

@Injectable({
  providedIn: 'root'
})
export class ConsultantsService {

  URI_API = "http://localhost:4000/";

  constructor(
    private http: HttpClient
  ) { }

  createConsultant(consultant: ConsultantModel){
    return this.http.post(this.URI_API + "createConsultant", consultant)
  }
}
