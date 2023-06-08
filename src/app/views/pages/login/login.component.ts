import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    });

    
    
  }

   ngOnInit(): void{
    
   }

  onLogin(): void{
    const admin: AdminModel = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value
    };
    this.authSvc.logIn(admin).subscribe(res => {
      if(res){
        this.router.navigate(['']);
      }
    })
  }

}
