import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ServiceLog } from "../../../models/serviceLog";

@Injectable({
  providedIn: 'root'
})
export class ServiceLogService {

  URI_API = "http://localhost:4000/";

  constructor(
    private http: HttpClient
  ) { }

    createServiceLog(serviceLogParameter: ServiceLog){
      return this.http.post(this.URI_API + "createServiceLog", serviceLogParameter)
    }

    getAllServiceLogs(){
      return this.http.get(this.URI_API + "getAllServiceLogs")
    }
}
