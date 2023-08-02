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
  cardColor = "dark"

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
  consultantAssigned: string;
  
  userExists: boolean = false;

  clientList: ClientModel[] = [];
  consultantList: ConsultantModel[] = [];

  //pagination 
  paginationId = 'clientPagination';
  p1: number = 1;
  itemsPerPage:number = 5;
  currentPage = 1;
  sessionInfo: sessionModel = this.credService.actualUserInfo

  constructor(
    private _router: Router,
    public formBuilder: FormBuilder,
    private aRouter: ActivatedRoute,
    private clientService: ClientsService,
    private credService: CredentialsService,
    private consultantService : ConsultantsService
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
      extension: new FormControl(""),
      taxRegime: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      totalRFC: new FormControl("", [Validators.required]),
      totalEmployees: new FormControl("", [Validators.required]),
      userAssigned: new FormControl("", [Validators.required]),
      passwordAssigned: new FormControl("", [Validators.required]),
      consultantAssigned:new FormControl("", [Validators.required])
    });


    //Inicializando las variables

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
    this.extension= 'Ext. (Opcional)';
    this.email=  'Correo electrónico';
    this.totalRFC=  'RFC asignados';
    this.totalEmployees=  'Empleados asignados';
    this.userAssigned='Usuario'
    this.passwordAssigned='Contraseña'
    this.consultantAssigned='Consultor asignado'
  }

  ngOnInit(): void {
    this.getAllClients()
    this.getAllConsultants()
    this.sessionInfo = this.credService.getActualUserInfo()
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
      assignedTo: this.sessionInfo.relatedId
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
        (consultant) => consultant.createdBy === this.sessionInfo.relatedId
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
        this.clientList.forEach(client => {
          const assignedToConsultant = this.consultantList.find(consultant => consultant._id === +client.assignedTo);

          if (assignedToConsultant) {
            client.assignedTo = assignedToConsultant.firstName; // Asignar el nombre del consultor al cliente
          }
        });

        this.clientList.reverse();
      },
      error => {
        console.log(error);
      }
    );
  }




}
