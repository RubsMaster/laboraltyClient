import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from "@angular/forms";
// import Validation from './utils/validation';
// import { AuthService } from "../../../services/auth/auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AdminModel } from "src/app/models/admin";
import { CredentialModel } from "src/app/models/credential";
import { first } from "rxjs/operators";
import { CredentialsService } from "src/app/services/credentials.service";
import { Subscription } from "rxjs";
import { cilLowVision } from "@coreui/icons";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  icons = {
    cilLowVision,
  };

  hide = true;
  isAdmin = false;
  isLogged = false;
  private subscription: Subscription = new Subscription();
  loginForm!: FormGroup;

  username: string = "";
  password: string = "";

  constructor(
    private authSvc: CredentialsService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    });
  }

  ngOnInit(): void {
    this.subscription.add(
      this.authSvc.isLogged.subscribe((res) => (this.isLogged = res))
    );
  }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }

  onLogin(): void {
    if (this.loginForm.invalid) {
      console.log("no jalo");
      return;
    }
    const auth = {
      user: this.loginForm.get("username")?.value,
      password: this.loginForm.get("password")?.value,
    };
    console.log("auth" + JSON.stringify(auth))
    //nos suscribimos al servicio de login
    this.subscription.add(
      this.authSvc.login(auth).subscribe((res) => {
        if (res) {
          console.log(res);
          if (res.role === "ADMIN") {
            console.log(res.role);
            this.router.navigate(["/adminDashboard"]);
          } else if (res.role === "ACCOUNTANT") {
            console.log(res.role);
            this.router.navigateByUrl("/clients").then();
          }
        }
      })
    );
  }

  getErrorMessage(field: string): string {
    let message = "";
    const controlErrors: ValidationErrors | null | undefined =
      this.loginForm.get(field)?.errors;
    if (controlErrors) {
      if (controlErrors["required"]) {
        message = "Ingrese sus credenciales";
      }
    }
    return message;
  }

  isValidField(field: string): boolean {
    let fieldControl = this.loginForm.get(field) || false;
    return (
      fieldControl &&
      (fieldControl.touched || fieldControl.dirty) &&
      !fieldControl.valid
    );
  }
}
