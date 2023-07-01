import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { CredentialModel, authModel, sessionModel } from '../models/credential';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Roles } from '../models/credential';

const helper = new JwtHelperService;

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private role = new BehaviorSubject<Roles | null>(null);
  
  URI_API = "http://localhost:4000/";

  constructor(
    private http: HttpClient
  ) {
    this.checkToken();  
   }

  get isLogged(): Observable<boolean>{
    return this.loggedIn.asObservable();    
  }

  get isAdmin$(): Observable<string | null>{
    return this.role.asObservable();
  }
  
  createCredential(credential: CredentialModel){
    return this.http.post(this.URI_API + "createCredential", credential)
  }

  checkCredential(user: string){
    return this.http.get(this.URI_API + "getCredential/" + user)
  }

  //Recibimios el user 
  login(authData: CredentialModel ): Observable<sessionModel | void>{
    const url = this.URI_API + "auth/login";

    return this.http
    .post<sessionModel>(url, authData)
    .pipe(
      map((res: sessionModel) => {
        // Guardar el token en el almacenamiento local
        this.saveLocalStorage(res);
        
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
    localStorage.removeItem('user');
    this.loggedIn.next(false);  
  };


  private checkToken():void {
    const userItem = localStorage.getItem('user');
    if (userItem === null) {
      return;
    }
    const user = JSON.parse(userItem) || null; 
    if(user){
      const isExpired =  helper.isTokenExpired(user.token);
      if(isExpired){
        this.logout();
      }else{
        this.loggedIn.next(true);
        this.role.next(user.role);
      }
    }
  };


  
  private saveLocalStorage(user: sessionModel):void{
    // localStorage.setItem('token', token);
    const {userId, message, ... rest} = user;
    localStorage.setItem('User', JSON.stringify(rest));
    console.log(user) ;

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
