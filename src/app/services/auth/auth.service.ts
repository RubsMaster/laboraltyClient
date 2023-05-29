import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { AdminModel, adminResponse } from "../../models/admin";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URI_API = "http://localhost:4000/";


  constructor(private http:HttpClient) { }

  login(authData: AdminModel):Observable<adminResponse | void>{
    return this.http
    .post<adminResponse>(this.URI_API + "auth/login", authData)
    .pipe(
      map((res:adminResponse) => {
      console.log('Res=>', res);
      //save token()
    }),
    catchError((err) => this.handlerError(err))
    );
  }


  logout():void{};
  private readToken():void{};
  private saveToken():void{};

  private handlerError(err: { message: any; }): Observable<never> {
    let errorMessage = 'An error occurred retrieving data';
    if (err) {
      errorMessage = `Error: code ${err.message}`;
      window.alert(errorMessage);
    }
    return throwError(errorMessage);
  }
  
}
