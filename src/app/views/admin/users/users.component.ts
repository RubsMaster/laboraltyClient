import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormBuilder,
  FormGroup,
  FormArray,
  Validators
} from "@angular/forms";

import { UserModel } from "../../../models/user";
import { UsersService } from "../../../services/users/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  createUserForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private userService: UsersService
  ) {
    this.createUserForm = this.formBuilder.group({
      firstNameTitular: new FormControl("", Validators.required),
      lastNameTitular: [""],
      businessName: [""],
      RFC: [""],
      email: new FormControl("", [Validators.required, Validators.email]),
      mobilePhoneNumber: new FormControl("", [
        Validators.required,
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),
      ]),
      officePhoneNumber: new FormControl("", [
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),
      ]),
      street: new FormControl("", [Validators.required]),
      innerNumber: new FormControl("", [
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),
      ]),
      outdoorNumber: new FormControl("", [Validators.required]),
      postalCode: new FormControl("", [Validators.required, Validators.maxLength(10)]),
      suburb: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
      state: new FormControl("", [Validators.required]),
      totalEmployees: new FormControl("", [Validators.required]),
      totalRFC: new FormControl("", [Validators.required]),
      monthlyDebt: new FormControl("", [Validators.required]),
      userAssigned: new FormControl("", [Validators.required]),
      passwordAssigned: new FormControl("", [Validators.required]),
    });
  }

  UserArray: UserModel[] = [];

  ngOnInit(): void {
    this.createUserForm.reset();
  }

  saveUser() {
    const user: UserModel = {
      businessName: this.createUserForm.get('businessName')?.value,
      RFC: this.createUserForm.get('RFC')?.value,
      firstNameTitular: this.createUserForm.get('firstNameTitular')?.value,
      lastNameTitular: this.createUserForm.get('lastNameTitular')?.value,
      email: this.createUserForm.get('email')?.value,
      street: this.createUserForm.get('street')?.value,
      innerNumber: this.createUserForm.get('innerNumber')?.value,
      outdoorNumber: this.createUserForm.get('outdoorNumber')?.value,
      zipCode: this.createUserForm.get('postalCode')?.value,
      suburb: this.createUserForm.get('suburb')?.value,
      city: this.createUserForm.get('city')?.value,
      state: this.createUserForm.get('state')?.value,
      officePhoneNumber: this.createUserForm.get('officePhoneNumber')?.value,
      mobilePhoneNumber: this.createUserForm.get('mobilePhoneNumber')?.value,
      totalEmployees: this.createUserForm.get('totalEmployees')?.value,
      totalRFC: this.createUserForm.get('totalRFC')?.value,
      monthlyDebt: this.createUserForm.get('monthlyDebt')?.value,
      userAssigned: this.createUserForm.get('userAssigned')?.value,
      passwordAssigned: this.createUserForm.get('passwordAssigned')?.value
    }

    this.userService.createUser(user).subscribe(data => {
      this.ngOnInit()
    }, error => {
      console.log(error)
    })

  }

}
