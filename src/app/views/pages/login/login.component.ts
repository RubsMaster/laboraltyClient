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
export class LoginComponent implements OnInit {

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
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      return;
    }
    const auth = {
      user: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value
    }

    // Mapeo de roles a rutas
    const roleRoutes: { [role: string]: string } = {
      'ADMIN': '/adminDashboard',
      'ACCOUNTANT': '/settings',
      'CONSULTANT': '/consultants',
      'CLIENT': '/clients'
    };

    // Suscribirse al servicio de login
    this.subscription.add(
      this.authSvc.login(auth).subscribe(res => {
        if (res) {
          const route = roleRoutes[res.role];
          if (route) {
            this.router.navigate([route]);
          } else {
            console.log('Ups');
            return;
          }
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
