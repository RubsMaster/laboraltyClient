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
  innerNumber: string;
  outdoorNumber: string;
  zipCode: string;
  suburb: string;
  CFDI: string;
  inChargeName: string;
  jobTitle: string;
  phoneNumber: string;
  extension: string;
  email: string;

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
      innerNumber: new FormControl(""),
      outdoorNumber: new FormControl("", [Validators.required]),
      zipCode: new FormControl("", [Validators.required, Validators.maxLength(10)]),
      suburb: new FormControl("", [Validators.required]),
      CFDI: new FormControl("", [Validators.required]),
      inChargeName: new FormControl("", [Validators.required]),
      jobTitle: new FormControl("", [Validators.required]),
      phoneNumber: new FormControl("", [Validators.required]),
      extension: new FormControl("", [Validators.required]),
      taxRegime: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email])
    });


    //Inicializando las variables

    this.businessName= '';
    this.taxRegime= '';
    this.RFC= '';
    this.street= '';
    this.innerNumber= '';
    this.outdoorNumber= '';
    this.zipCode= '';
    this.suburb= '';
    this.CFDI= '';
    this.inChargeName= '';
    this.jobTitle= '';
    this.phoneNumber= '';
    this.extension= '';
    this.email=  '';
  }

  ngOnInit(): void {
    this.businessName= 'Razón Social';
    this.taxRegime= 'Regimen Fiscal';
    this.RFC= 'RFC';
    this.street= 'Calle';
    this.innerNumber= 'Número interior';
    this.outdoorNumber= 'Número exterior';
    this.zipCode= 'Código postal';
    this.suburb= 'Colonia';
    this.CFDI= 'CFDI';
    this.inChargeName= 'Nombre';
    this.jobTitle= 'Puesto';
    this.phoneNumber= 'Teléfono';
    this.extension= 'Extensión';
    this.email=  'Correo electrónico';
  }

  saveClient(){
    const client: ClientModel = {
      businessName: this.createClientForm.get('businessName')?.value,
      taxRegime: this.createClientForm.get('taxRegime')?.value,
      RFC: this.createClientForm.get('RFC')?.value,
      street: this.createClientForm.get('street')?.value,
      innerNumber: this.createClientForm.get('innerNumber')?.value,
      outdoorNumber: this.createClientForm.get('outdoorNumber')?.value,
      zipCode: this.createClientForm.get('zipCode')?.value,
      suburb: this.createClientForm.get('suburb')?.value,
      CFDI: this.createClientForm.get('CFDI')?.value,
      inChargeName: this.createClientForm.get('inChargeName')?.value,
      jobTitle: this.createClientForm.get('jobTitle')?.value,
      phoneNumber: this.createClientForm.get('phoneNumber')?.value,
      extension: this.createClientForm.get('extension')?.value,
      email: this.createClientForm.get('email')?.value
    }

    this.clientService.createClient(client).subscribe(data => {
      this.ngOnInit()
    }, error => {
      console.log(error)
    })
  }


}
