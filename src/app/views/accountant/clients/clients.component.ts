import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";

import { Router, ActivatedRoute } from '@angular/router';

import { ClientModel } from "../../../models/client";
import { ClientsService } from "../../../services/accountant/clients/clients.service";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  createClientForm: FormGroup;

  Title = 'Crear Cliente'
  businessName: string;
  taxRegime: string;
  RFC: string;
  street: string;
  outdoorNumber: string;
  innerNumber: string;
  zipCode: string;
  suburb: string;
  CFDI: string;
  inChargeName: string;
  jobTitle: string;
  phoneNumber: string;
  extension: string;
  email: string;
  totalRFC: string;
  totalEmployees: string;
  userAssigned: string;
  passwordAssigned: string;
  

  constructor(
    private _router: Router,
    public formBuilder: FormBuilder,
    private aRouter: ActivatedRoute,
    private clientService: ClientsService
  ) { 

    this.createClientForm = this.formBuilder.group({
      businessName: ["", Validators.required],
      RFC: ["", Validators.required],
      street: new FormControl("", [Validators.required]),
      outdoorNumber: new FormControl("", [Validators.required]),
      innerNumber: new FormControl(""),
      zipCode: new FormControl("", [Validators.required, Validators.maxLength(10)]),
      suburb: new FormControl("", [Validators.required]),
      CFDI: new FormControl("", [Validators.required]),
      inChargeName: new FormControl("", [Validators.required]),
      jobTitle: new FormControl("", [Validators.required]),
      phoneNumber: new FormControl("", [Validators.required]),
      extension: new FormControl("", [Validators.required]),
      taxRegime: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      totalRFC: new FormControl("", [Validators.required]),
      totalEmployees: new FormControl("", [Validators.required]),
      userAssigned: new FormControl("", [Validators.required]),
      passwordAssigned: new FormControl("", [Validators.required]),
    });


    //Inicializando las variables

    this.businessName= '';
    this.taxRegime= '';
    this.RFC= '';
    this.street= '';
    this.outdoorNumber= '';
    this.innerNumber= '';
    this.zipCode= '';
    this.suburb= '';
    this.CFDI= '';
    this.inChargeName= '';
    this.jobTitle= '';
    this.phoneNumber= '';
    this.extension= '';
    this.email=  '';
    this.totalRFC = '';
    this.totalEmployees= ''
    this.userAssigned=''
    this.passwordAssigned=''
  }

  ngOnInit(): void {
    this.businessName= 'Razón Social';
    this.taxRegime= 'Regimen Fiscal';
    this.RFC= 'RFC';
    this.street= 'Calle';
    this.outdoorNumber= 'Número exterior';
    this.innerNumber= 'Número interior';
    this.zipCode= 'Código postal';
    this.suburb= 'Colonia';
    this.CFDI= 'CFDI';
    this.inChargeName= 'Nombre';
    this.jobTitle= 'Puesto';
    this.phoneNumber= 'Teléfono';
    this.extension= 'Extensión';
    this.email=  'Correo electrónico';
    this.totalRFC=  'RFC asignados';
    this.totalEmployees=  'Empleados asignados';
    this.userAssigned='Usuario'
    this.passwordAssigned='Contraseña'
  }

  saveClient(){
    const client: ClientModel = {
      businessName: this.createClientForm.get('businessName')?.value,
      taxRegime: this.createClientForm.get('taxRegime')?.value,
      RFC: this.createClientForm.get('RFC')?.value,
      street: this.createClientForm.get('street')?.value,
      outdoorNumber: this.createClientForm.get('outdoorNumber')?.value,
      innerNumber: this.createClientForm.get('innerNumber')?.value,
      zipCode: this.createClientForm.get('zipCode')?.value,
      suburb: this.createClientForm.get('suburb')?.value,
      CFDI: this.createClientForm.get('CFDI')?.value,
      inChargeName: this.createClientForm.get('inChargeName')?.value,
      jobTitle: this.createClientForm.get('jobTitle')?.value,
      phoneNumber: this.createClientForm.get('phoneNumber')?.value,
      extension: this.createClientForm.get('extension')?.value,
      email: this.createClientForm.get('email')?.value,
      totalRFC: this.createClientForm.get('totalRFC')?.value,
      totalEmployees: this.createClientForm.get('totalEmployees')?.value,
      userAssigned: this.createClientForm.get('userAssigned')?.value,
      passwordAssigned: this.createClientForm.get('passwordAssigned')?.value
    }

    this.clientService.createClient(client).subscribe(data => {
      this.ngOnInit()
    }, error => {
      console.log(error)
    })
  }


}
