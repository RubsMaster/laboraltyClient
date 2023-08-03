import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ClientModel } from 'src/app/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  URI_API = "http://localhost:4000/";

  constructor(
    private http: HttpClient
  ) { }

  createClient(client: ClientModel){
    return this.http.post(this.URI_API + "createClient", client)
  }

  getAllClients(){
    return this.http.get(this.URI_API+"getAllClients")
  }

}
