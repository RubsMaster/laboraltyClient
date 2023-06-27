import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import Validation from './utils/validation';
// import { AuthService } from "../../../services/auth/auth.service";
import { ActivatedRoute, Router } from '@angular/router';
import { AdminModel } from 'src/app/models/admin';
import { authModel } from 'src/app/models/credential';
import { first } from 'rxjs/operators';
import { CredentialsService } from 'src/app/services/credentials.service';

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
    private authSvc: CredentialsService, 
    private fb: FormBuilder,
    private router: Router
  ) { 
    this.loginForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required) 
    })
  }

  ngOnInit(): void{
    // const userData = {
    //   username: 'admin',
    //   password: '123456'
    // };
    // this.authSvc.login(userData).subscribe((res) => console.log("login")); 
  }

  onLogin(): void{
    const auth = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value
    }
    //nos suscribimos al servicio de login 
    this.authSvc.login(auth).subscribe( res => {
      if(res){
        console.log(res);
        this.router.navigate(['']);
      }
    })
  }
}
