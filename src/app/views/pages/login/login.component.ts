import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
// import Validation from './utils/validation';
// import { AuthService } from "../../../services/auth/auth.service";
import { ActivatedRoute, Router } from '@angular/router';
import { AdminModel } from 'src/app/models/admin';
import { CredentialModel } from 'src/app/models/credential';
import { first } from 'rxjs/operators';
import { CredentialsService } from 'src/app/services/credentials.service';
import { Subscription } from 'rxjs';
import { cilLowVision } from '@coreui/icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  icons = {
    cilLowVision
  };

  hide = true;
  isAdmin = false;
  isLogged = false;
  private subscription: Subscription = new Subscription;
  loginForm!: FormGroup

  username: string = ''
  password: string = ''


  constructor(
    private authSvc: CredentialsService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    // const authdata ={
    //   user: "Terreneitor",
    //   password: "123456"
    // }
    // this.authSvc.login(authdata).subscribe((res) => (console.log(res)))

    this.subscription.add(
      this.authSvc.isLogged.subscribe((res) => (this.isLogged = res))
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // onLogin(): void {
  //   if (this.loginForm.invalid) {
  //     return;
  //   }
  
  //   // obtener los datos del formulario
  //   const username: string = this.loginForm.get('username')?.value;
  //   const password: string = this.loginForm.get('password')?.value;
  
  //   if (this.isAdmin) {
  //     // si el usuario es admin, usamos CredentialModel
  //     const credentialData: CredentialModel = {
  //       user: username,
  //       password: password,
  //       role: 'ADMIN', // este valor debería provenir de alguna parte, no estar codificado
  //     };
  
  //     // iniciar sesión con loginWithCredentialModel y manejar la respuesta
  //     this.subscription.add(
  //       this.authSvc.loginWithCredentialModel(credentialData).subscribe(res => {
  //         if (res) {
  //           console.log(res);
  //           this.router.navigate(['']);
  //         }
  //       })
  //     );
  //   } else {
  //     // si el usuario no es admin, usamos authModel
  //     const authData: CredentialModel = {
  //       user: username,
  //       password: password,
  //     };
  
  //     // iniciar sesión con loginWithAuthModel y manejar la respuesta
  //     this.subscription.add(
  //       this.authSvc.loginWithAuthModel(authData).subscribe(res => {
  //         if (res) {
  //           console.log(res);
  //           this.router.navigate(['']);
  //         }
  //       })
  //     );
  //   }
  // }
  

  onLogin(): void {
    if (this.loginForm.invalid) {
      return;
    }
    const auth = {
      user: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value
    }

    //nos suscribimos al servicio de login  
    this.subscription.add(
      this.authSvc.login(auth).subscribe(res => {
        if (res) {
          console.log(res);
          this.router.navigate(['/dashboard']);
        }
      })
    )

  }

  getErrorMessage(field: string): string {
    let message = "";
    const controlErrors: ValidationErrors | null | undefined = this.loginForm.get(field)?.errors;
    if (controlErrors) {
      if (controlErrors['required']) {
        message = 'Ingrese sus credenciales';
      }
    }
    return message;
  }


  isValidField(field: string): boolean {
    let fieldControl = this.loginForm.get(field) || false;
    return fieldControl && (fieldControl.touched || fieldControl.dirty) && !fieldControl.valid;
  }

}
