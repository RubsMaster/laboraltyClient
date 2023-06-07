import { Component, OnInit } from '@angular/core';
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
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  
  constructor(
    private authSvc: AuthService, 
    private fb: FormBuilder,
    private router: Router,

  ) { }

 

  ngOnInit(): void{
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogIn(): void{
      //si el formulario es invalido retronna
    if (this.loginForm.invalid) {
      return;
    }
    //traemos la informacion del formulario y la guradamos en formcvalue
    const formValue: AdminModel = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
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
