import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import Validation from './utils/validation';
import { AuthService } from "../../../services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService) { }

  ngOnInit(): void{
    const adminData = {
      userName: 'admin',
      password: 'admin'
    };
    this.authService.login(adminData).subscribe((res) => console.log('login'));
  }

}
