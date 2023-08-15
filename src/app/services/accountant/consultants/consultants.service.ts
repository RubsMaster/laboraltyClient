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

  getAllConsultants(){
    return this.http.get(this.URI_API + "getAllConsultants")
  }

  getConsultaltById(id: number | undefined){
    return this.http.get(this.URI_API + "getConsultant/" + id)
  }

  updateLogoImgName(id: number | undefined, logoImgName: string | ArrayBuffer | null): Observable<any> {
    const body = { logoImgName: logoImgName }; 
    console.log(`esto llega al servicio, id: ${id}, url de la imagen: ${body.logoImgName}`)
    return this.http.patch(`${this.URI_API}updateLogoImg/${id}`, body);
  }

}
