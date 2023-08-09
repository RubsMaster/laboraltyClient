import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";

import { Router, ActivatedRoute } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { ClientModel } from "../../../models/client";
import { ClientsService } from "../../../services/accountant/clients/clients.service";

import { CredentialsService } from "../../../services/credentials.service";
import { CredentialModel } from 'src/app/models/credential';

import { ConsultantModel } from 'src/app/models/consultant';
import { ConsultantsService } from "../../../services/accountant/consultants/consultants.service";
import { sessionModel } from "../../../models/credential";

import { ConsultantsModule } from '../consultants/consultants.module';
import { error } from 'console';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})

export class ClientsComponent implements OnInit {
  // Form
  createClientForm: FormGroup;

  Title = 'Crear Cliente'
  
  userExists: boolean = false;

  // Arrays to display
  clientList: ClientModel[] = [];
  consultantList: ConsultantModel[] = [];

  // Variables to display
  businessName: string = "Razón Social"
  taxRegime: string = "Régimen fiscal"
  RFC: string = "RFC"
  street: string = "Calle"
  outdoorNumber: string = "Número exterior"
  innerNumber: string = "Número interior (Opcional)"
  zipCode: string = "Código postal"
  suburb: string = "Colonia"
  CFDI: string = "CFDI"
  inChargeName: string = "Nombre"
  jobTitle: string = "Puesto"
  phoneNumber: string = "Teléfono"
  extension: string = "Ext. (Opcional)"
  email: string = "Correo electrónico"
  totalRFC: string = "RFC asignados"
  totalEmployees: string = "Empleados asigndados"
  userAssigned: string = "Usuario"
  passwordAssigned: string = "Contraseña"
  consultantAssigned: string = "Consultor asignado"

  //spagination 
  paginationId = 'clientPagination';
  p1: number = 1;
  itemsPerPage:number = 5;
  currentPage = 1;

  sessionString = localStorage.getItem('user');
  sessionID = ""

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientsService,
    private credService: CredentialsService,
    private consultantService : ConsultantsService
  ) { 

    this.createClientForm = this.formBuilder.group({
      businessName: ["", Validators.required],
      taxRegime: new FormControl("", [Validators.required]),
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
      extension: new FormControl(""),
      email: new FormControl("", [Validators.required, Validators.email]),
      totalRFC: new FormControl("", [Validators.required]),
      totalEmployees: new FormControl("", [Validators.required]),
      userAssigned: new FormControl("", [Validators.required]),
      passwordAssigned: new FormControl("", [Validators.required]),
      consultantAssigned:new FormControl("", [Validators.required])
    });
  
  }

  ngOnInit(): void {
    this.getAllClients()
    this.getAllConsultants()
    if (this.sessionString) {
      const sessionObject = JSON.parse(this.sessionString);
      this.sessionID = sessionObject.foundRoleInfo._id
    }
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
      passwordAssigned: this.createClientForm.get('passwordAssigned')?.value,
      createdAt:"",
      createdBy:this.sessionID,
      assignedTo: this.createClientForm.get('consultantAssigned')?.value
    }
    const user = this.createClientForm.get('userAssigned')
    
    this.credService.checkCredential(user?.value).subscribe(data => {
      if (data){
        return alert("El usuario ya existe, elija otro nombre")
      } else {
        this.clientService.createClient(client).subscribe((data:any) => {
          const newCred: CredentialModel = {
            user: client.userAssigned,
            password: client.passwordAssigned,
            role: "Client",
            relatedId: data._id
          } 
          this.credService.createCredential(newCred).subscribe(data => {
            this.createClientForm.reset()
            this.ngOnInit()
          })
          
        }, error => {
          console.log(error)
        })
      }
    })
     
  }

  getAllConsultants () {
    this.consultantService.getAllConsultants().subscribe(
      (data: any) => {
        this.consultantList = data as ConsultantModel[];

        // Filtrar los resultados que cumplan la condición
      this.consultantList = this.consultantList.filter(
        (consultant) => consultant.createdBy === this.sessionID
      );

        this.consultantList.reverse()
      },
      error => {
        console.log(error)
      }
    )
  }

  getAllClients() {
    this.clientService.getAllClients().subscribe(
      (data: any) => {
        this.clientList = data as ClientModel[]; // Asignar los datos al arreglo clientList

        // Asignar el nombre del consultor a cada cliente
        // this.clientList.forEach(client => {
        //   const assignedToConsultant = this.consultantList.find(consultant => consultant._id === +client.assignedTo);

        //   if (assignedToConsultant) {
        //     client.assignedTo = assignedToConsultant.firstName; // Asignar el nombre del consultor al cliente
        //   }
        // });
        this.clientList = this.clientList.filter(
          (consultant) => consultant.createdAt === this.sessionID
        );

        this.clientList.reverse();
      },
      error => {
        console.log(error);
      }
    );
  }




}
// pito