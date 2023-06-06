import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import Validation from './utils/validation';
import { AuthService } from "../../../services/auth/auth.service";
import { Router } from '@angular/router';
import { AdminModel } from 'src/app/models/admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm =  this.fb.group({
    username: [''],
    password: ['']
  })


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
    this.authSvc.logIn(admin).subscribe(res => {
      if(res){
        this.router.navigate(['']);
      }
    })
  }

}
