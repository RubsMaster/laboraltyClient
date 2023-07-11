import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { CredentialModel, authModel, sessionModel } from '../models/credential';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Roles } from '../models/credential';
import { Router } from '@angular/router';

const helper = new JwtHelperService;

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private role = new BehaviorSubject<Roles | null>(null);
  private relatedId = new BehaviorSubject<string | null>(null);

  
  URI_API = "http://localhost:4000/";

  constructor(
    private http: HttpClient,
    private router: Router,

  ) {
    this.checkToken();  
   }

  get isLogged(): Observable<boolean>{
    return this.loggedIn.asObservable();    
  }

  
  createCredential(credential: CredentialModel){
    return this.http.post(this.URI_API + "createCredential", credential)
  }

  checkCredential(user: string){
    return this.http.get(this.URI_API + "getCredential/" + user)
  }

 
  get role$(): Observable<Roles | null> {
    // console.log(this.role.value)
    return this.role.asObservable();
  }

  get relatedId$(): Observable<string | null> {
    return this.relatedId.asObservable();
  }
  

  login(authData: authModel): Observable<sessionModel | void>{
    const url = this.URI_API + "auth/login";
    return this.http
    .post<sessionModel>(url, authData)
    .pipe(
      map((res: sessionModel) => {
        this.saveLocalStorage(res);
        // console.log(res)
        this.loggedIn.next(true);
        return res;
      }),
      catchError((err) => {
        console.error("Error en la solicitud. URL completo:", url);
        return this.handlerError(err);
      })
    );
  }
  
  logout():void{
    localStorage.removeItem('user');
    this.loggedIn.next(false);  
    this.router.navigate(['/login'])
  };


  private checkToken():void {
    const userItem = localStorage.getItem('user');
    if (userItem === null) {
      return;
    }
    const user = JSON.parse(userItem); 
    if(user){
      const isExpired =  helper.isTokenExpired(user.token);
      if(isExpired){
        this.logout();
      }else{
        this.loggedIn.next(true);
        // console.log(user.role)
        this.role.next(user.role);
      }
    }
  };

  // private saveLocalStorage(user: sessionModel):void{
  //   // localStorage.setItem('token', token);
  //   console.log(user) ;
  //   const {userId, message, ... rest} = user;
  //   localStorage.setItem('user', JSON.stringify(rest));

  // };

  private saveLocalStorage(user: sessionModel):void{
    const {relatedId, message, ... rest} = user;
    // console.log(user);s
    localStorage.setItem('user', JSON.stringify(rest));
    // console.log(user.role)
    this.role.next(user.role);  // actualizar BehaviorSubject role
    this.relatedId.next(user.relatedId); // actualizar BehaviorSubject relatedId

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
