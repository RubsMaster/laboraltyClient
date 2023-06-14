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
  ) { 
    this.loginForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required) 
    })
  }

  // ngOnInit(): void{
  //   const userData = {
  //     username: 'admin',
  //     password: '123456'
  //   };
  //   this.authSvc.logIn(userData).subscribe((res) => console.log(res)); 
  // }

  onLogin(): void{
    const cred: AdminModel = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value
    }
    //nos suscribimos al servicio de login 
    this.authSvc.logIn(cred).subscribe( res => {
      if(res){
        console.log(res);
        this.router.navigate(['']);
      }
    })
  }
}
