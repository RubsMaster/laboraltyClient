import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { UserModel } from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  URI_API = "http://localhost:4000/";

  constructor(
    private http: HttpClient
  ) { }

  createUser(user: UserModel): Observable<any> {
    return this.http.post(this.URI_API + "createUser", user)
  }

  updateUser(id: string, updates: any): Observable<UserModel> {
    return this.http.patch<UserModel>(
      `${this.URI_API}updateUser/${id}`, updates 
    )
  }

  getAllUsers(): Observable<UserModel []> {
    const resultJSON = this.http.get<UserModel[]>(
     this.URI_API + "getAllUsers" 
    );
    return resultJSON;
  }
  
  deleteUser(id: string): Observable<any>{
    return this.http.delete(this.URI_API + id)
  }

   getUser(id: string): Observable<any>{
    return this.http.get(this.URI_API + "getUser/" + id)
   }
}
