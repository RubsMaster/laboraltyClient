import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormBuilder,
  FormGroup,
  FormArray,
  Validators
} from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';

import { UserModel } from "../../../models/user";
import { UsersService } from "../../../services/users/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  createUserForm: FormGroup;

  Title = 'Crear Usuario';
  id: string | null;
  firstNameTitular: string;
  lastNameTitular: string;
  businessName: string;
  RFC: string;
  email: string;
  mobilePhoneNumber: string;
  officePhoneNumber: string;
  street: string;
  innerNumber: string;
  outdoorNumber: string;
  zipCode: string;
  suburb: string;
  city: string;
  state: string;
  totalEmployees: string;
  totalRFC: string;
  monthlyDebt: string;
  userAssigned: string;
  passwordAssigned: string;

  constructor(
    private _router: Router,
    public formBuilder: FormBuilder,
    private aRouter: ActivatedRoute,
    private userService: UsersService
  ) {
    this.createUserForm = this.formBuilder.group({
      firstNameTitular: new FormControl("", Validators.required),
      lastNameTitular: ["", Validators.required],
      businessName: ["", Validators.required],
      RFC: ["", Validators.required],
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
      zipCode: new FormControl("", [Validators.required, Validators.maxLength(10)]),
      suburb: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
      state: new FormControl("", [Validators.required]),
      totalEmployees: new FormControl("", [Validators.required]),
      totalRFC: new FormControl("", [Validators.required]),
      monthlyDebt: new FormControl("", [Validators.required]),
      userAssigned: new FormControl("", [Validators.required]),
      passwordAssigned: new FormControl("", [Validators.required]),
    });
    this.id = this.aRouter.snapshot.paramMap.get('id')
    this.firstNameTitular = ''
    this.lastNameTitular = ''
    this.businessName = ''
    this.RFC = ''
    this.email = ''
    this.mobilePhoneNumber = ''
    this.officePhoneNumber = ''
    this.street = ''
    this.innerNumber = ''
    this.outdoorNumber = ''
    this.zipCode = ''
    this.suburb = ''
    this.city = ''
    this.state = ''
    this.totalEmployees = ''
    this.totalRFC = ''
    this.monthlyDebt = ''
    this.userAssigned = ''
    this.passwordAssigned = ''

  
  }

  UserArray: UserModel[] = [];

  ngOnInit(): void {
    if (this.id !== null) {
      this.Title = 'Editar Usuario';
      this.userService
      this.userService.getUser(this.id).subscribe(data => {
        this.firstNameTitular = data.firstNameTitular
        this.lastNameTitular = data.lastNameTitular
        this.businessName = data.businessName
        this.RFC = data.RFC
        this.email = data.email
        this.mobilePhoneNumber = data.mobilePhoneNumber
        this.officePhoneNumber = data.officePhoneNumber
        this.street = data.street
        this.innerNumber = data.innerNumber
        this.outdoorNumber = data.outdoorNumber
        this.zipCode = data.zipCode
        this.suburb = data.suburb
        this.city = data.city
        this.state = data.state
        this.totalEmployees = data.totalEmployees
        this.totalRFC = data.totalRFC
        this.monthlyDebt = data.monthlyDebt
        this.userAssigned = data.userAssigned
        this.passwordAssigned = data.passwordAssigned
      })
    } else {
      this.firstNameTitular = 'Nombre(s)'
      this.lastNameTitular = 'Apellidos'
      this.businessName = 'Razón Social'
      this.RFC = 'RFC'
      this.email = 'Email'
      this.mobilePhoneNumber = 'Teléfono móvil'
      this.officePhoneNumber = 'Teléfono de oficina'
      this.street = 'Calle'
      this.innerNumber = 'Número interior'
      this.outdoorNumber = 'Número exterior'
      this.zipCode = 'Número interior'
      this.suburb = 'Colonia'
      this.city = 'Seleccione ciudad'
      this.state = 'Estado'
      this.totalEmployees = 'Empleados Asignables'
      this.totalRFC = 'RFC asignables'
      this.monthlyDebt = 'Deuda mensual'
      this.userAssigned = 'Nombre de usuario'
      this.passwordAssigned = 'Contraseña'
    }
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
      zipCode: this.createUserForm.get('zipCode')?.value,
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

  updateUser() {
    const id = this.id ?? '';

    const updatedUser: UserModel = {
      businessName: this.createUserForm.get('businessName')?.value ?? '',
      RFC: this.createUserForm.get('RFC')?.value ?? '',
      firstNameTitular: this.createUserForm.get('firstNameTitular')?.value ?? '',
      lastNameTitular: this.createUserForm.get('lastNameTitular')?.value ?? '',
      email: this.createUserForm.get('email')?.value ?? '',
      street: this.createUserForm.get('street')?.value ?? '',
      innerNumber: this.createUserForm.get('innerNumber')?.value ?? '',
      outdoorNumber: this.createUserForm.get('outdoorNumber')?.value ?? '',
      zipCode: this.createUserForm.get('zipCode')?.value ?? '',
      suburb: this.createUserForm.get('suburb')?.value ?? '',
      city: this.createUserForm.get('city')?.value ?? '',
      state: this.createUserForm.get('state')?.value ?? '',
      totalEmployees: this.createUserForm.get('totalEmployees')?.value ?? 0,
      totalRFC: this.createUserForm.get('totalRFC')?.value ?? 0,
      monthlyDebt: this.createUserForm.get('monthlyDebt')?.value ?? 0,
      userAssigned: this.createUserForm.get('userAssigned')?.value ?? '',
      passwordAssigned: this.createUserForm.get('passwordAssigned')?.value ?? '',
      mobilePhoneNumber: this.createUserForm.get('mobilePhoneNumber')?.value ?? '',
      officePhoneNumber: this.createUserForm.get('officePhoneNumber')?.value ?? ''
    };    

    this.userService.updateUser(id, updatedUser).subscribe(
      (user) => {
        this._router.navigate(['/', 'adminDashboard']);
        console.log("actualizado", user)
        // Agrega aquí cualquier otra acción que desees realizar después de actualizar el usuario.
      },
      (error) => {
        console.log(error);
        // Agrega aquí cualquier acción que desees realizar en caso de que se produzca un error.
      }
    );
  }

  



}
