import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
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
import { UploadService } from "../../../services/uploads/upload.service";

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

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';

  fileInfos?: Observable<any>;

  imageUrl: string = './assets/images/default-profile.jpg';

  constructor(
    private _router: Router,
    public formBuilder: FormBuilder,
    private aRouter: ActivatedRoute,
    private credService: CredentialsService,
    private consultantService: ConsultantsService,
    private uploadService: UploadService	
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
    this.createConsultantForm.reset();
    //this.fileInfos = this.uploadService.getFiles();
  }

  saveConsultant(){
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
            role: "CONSULTANT",
            relatedId: data._id
          } 
          this.credService.createCredential(newCred).subscribe(data => {
            this.ngOnInit()
          })          
        }, error => {
          console.log(error)
        })
      }
    })
     
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.uploadService.upload(this.currentFile).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.imageUrl = event.body.filename;
              this.imageUrl = `http://localhost:4000/getFile/${event.body.filename}`;
              this.fileInfos = this.uploadService.getFiles();
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }

            this.currentFile = undefined;
          }
        });
      }

      this.selectedFiles = undefined;
    }
  }

}
