import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { AdminModel, AdminResponse } from "../../models/admin";
import { JwtHelperService } from "@auth0/angular-jwt";
import { HttpClient } from '@angular/common/http';

const helper = new JwtHelperService;

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  // private userSubject: BehaviorSubject<AdminModel | null>;
  // public user: Observable<AdminModel | null>;

  URI_API = "http://localhost:4000";


  constructor(private http: HttpClient) { 
    this.checkToken();
    // this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    // this.user = this.userSubject.asObservable();
  }

  get isLogged(): Observable<boolean>{
    return this.loggedIn.asObservable();    
  }


  logIn(authData: AdminModel): Observable<AdminResponse | void> {
    // Construir la URL para el endpoint de autenticación
    const url = this.URI_API + "/auth/login";

    return this.http.post<AdminResponse>(url, authData)
      .pipe(
        map((res: AdminResponse) => {
          // Guardar el token en el almacenamiento local
          this.saveToken(res.token);
          
          // Emitir un evento para indicar que el usuario ha iniciado sesión
          this.loggedIn.next(true);
                    
          // Devolver la respuesta del servidor
          return res;
        }),
        catchError((err) => {
          // Imprimir el URL completo en caso de error
          console.error("Error en la solicitud. URL completo:", url);
          
          // Manejar el error
          return this.handlerError(err);
        })
      );
  }
  




  logout():void{
    localStorage.removeItem('token');
    this.loggedIn.next(false);  
  };

  private checkToken():void{
    const userToken = localStorage.getItem('token');
    const isExpired =  helper.isTokenExpired(userToken);
    console.log('isExpired->', isExpired);
    isExpired ? this.logout() : this.loggedIn.next(true);
  };
  
  private saveToken(token:string):void{
    localStorage.setItem('token', token);
  };

  private handlerError(err: { message: any }): Observable<never> {
    let errorMessage = 'An error occurred retrieving data';
    if (err) {
      errorMessage = `Error: code ${err.message}`;
      window.alert(errorMessage);
    }
    return throwError(errorMessage);
  }
  
}
