import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";

import { Router, ActivatedRoute } from '@angular/router';

import { ConsultantsService } from '../../../services/accountant/consultants/consultants.service';
import { ConsultantModel } from "../../../models/consultant";
import { CredentialsService } from "../../../services/credentials.service";
import { CredentialModel } from 'src/app/models/credential';

import { title } from 'process';
import { last } from 'rxjs';



@Component({
  selector: 'app-consultants',
  templateUrl: './consultants.component.html',
  styleUrls: ['./consultants.component.scss']
})
export class ConsultantsComponent implements OnInit {

  createConsultantForm: FormGroup;

  Title: string;
  jobTitle: string;
  firstName: string;
  middleName: string;
  lastName: string;
  officePhonenumber: string;
  mobilePhonenumber: string;
  userAssigned: string;
  passwordAssigned: string;

  constructor(
    private _router: Router,
    public formBuilder: FormBuilder,
    private aRouter: ActivatedRoute,
    private credService: CredentialsService,
    private consultantService: ConsultantsService
  ) {

    this.createConsultantForm = this.formBuilder.group({
      jobTitle: ["", Validators.required],
      firstName: ["", Validators.required],
      middleName: ["", Validators.required],
      lastName: ["", Validators.required],
      officePhonenumber: ["", Validators.required],
      mobilePhonenumber: ["", Validators.required],
      userAssigned: ["", Validators.required],
      passwordAssigned: ["", Validators.required],
    })
    this.Title='Crear consultor'
    this.jobTitle='Puesto'
    this.firstName='Nombre(s)'
    this.middleName='Apellido paterno'
    this.lastName='Apellido materno'
    this.officePhonenumber='Teléfono de oficina'
    this.mobilePhonenumber='Teléfono móvil'
    this.userAssigned='Nombre de usuario'
    this.passwordAssigned='Contraseña'

   }

  ngOnInit(): void {
  }


  saveClient(){
    const consultant: ConsultantModel = {
      jobTitle: this.createConsultantForm.get('jobTitle')?.value,
      firstName: this.createConsultantForm.get('firstName')?.value,
      middleName: this.createConsultantForm.get('middleName')?.value,
      lastName: this.createConsultantForm.get('lastName')?.value,
      officePhonenumber: this.createConsultantForm.get('officePhonenumber')?.value,
      mobilePhonenumber: this.createConsultantForm.get('mobilePhonenumber')?.value,
      userAssigned: this.createConsultantForm.get('userAssigned')?.value,
      passwordAssigned: this.createConsultantForm.get('passwordAssigned')?.value,
    }

    const user = this.createConsultantForm.get('userAssigned')
    
    this.credService.checkCredential(user?.value).subscribe(data => {
      if (data){
        return alert("El usuario ya existe, elija otro nombre")
      } else {
        this.consultantService.createConsultant(consultant).subscribe((data:any) => {
          const newCred: CredentialModel = {
            user: consultant.userAssigned,
            password: consultant.passwordAssigned,
            rol: "CONSULTANT",
            relatedId: data._id
          } 
          console.log("related id: " + data._id)
          this.credService.createCredential(newCred).subscribe(data => {
            
            this.ngOnInit()
          })
          
        }, error => {
          console.log(error)
        })
      }
    })
     
  }

}
