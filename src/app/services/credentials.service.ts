import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CredentialModel } from '../models/credential';
@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  URI_API = "http://localhost:4000/";

  constructor(
    private http: HttpClient
  ) { }
  createCredential(credential: CredentialModel){
    return this.http.post(this.URI_API + "createCredential", credential)
  }

  checkCredential(user: string){
    return this.http.get(this.URI_API + "getCredential/" + user)
  }
}
