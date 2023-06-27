import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { CredentialModel, authModel, sessionModel } from '../models/credential';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService;

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  
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

  //Recibimios el user 
  login(authData: authModel ): Observable<sessionModel | void>{
    const url = this.URI_API + "auth/login";

    return this.http
    .post<sessionModel>(url, authData)
    .pipe(
      map((res: sessionModel) => {
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
    if (err && err.message) {
      errorMessage = `Error: code ${err.message}`;
      window.alert(errorMessage);
    }
    return throwError(errorMessage);
  }


}
