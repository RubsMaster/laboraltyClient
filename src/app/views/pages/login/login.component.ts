import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import Validation from './utils/validation';
import { AuthService } from "../../../services/auth/auth.service";
import { ActivatedRoute, Router } from '@angular/router';
import { AdminModel } from 'src/app/models/admin';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup

  username: string = ''
  password: string = ''


  constructor(
    private authSvc: AuthService, 
    private fb: FormBuilder,
    private router: Router
  ) { }

  // ngOnInit(): void{
  //   const userData = {
  //     username: 'admin',
  //     password: '123456'
  //   };
  //   this.authSvc.logIn(userData).subscribe((res) => console.log(res)); 
  // }

  onLogin(): void{
    const formValue = this.loginForm.value;
    const admin: AdminModel = {
      username: formValue.username || '',
      password: formValue.password || ''
    };
    //nos suscribimos al servicio de login 
    this.authSvc.logIn(formValue).subscribe( res => {
      if(res){
        console.log(res);
        this.router.navigate(['']);
      }
    })
  }
}
