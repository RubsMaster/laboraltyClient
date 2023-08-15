import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { Observable } from 'rxjs';
import { UploadService } from "../../../services/uploads/upload.service";
import { Router, ActivatedRoute } from '@angular/router';

import { CredentialsService } from 'src/app/services/credentials.service';
import { sessionModel } from "../../../models/credential";

import { ConsultantsService } from "../../../services/accountant/consultants/consultants.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  // image preview and upload
  selectedImage: File | null = null;
  selectedFiles?: FileList;
  previewImageUrl: string | ArrayBuffer | null = './assets/images/default-profile.jpg';
  currentFile?: File;
  progress = 0;
  message = '';

  fileInfos?: Observable<any>;

  imageUrl: string = './assets/images/default-profile.jpg';

  actualUserInfo

  sessionString = localStorage.getItem('user');
  nameToShow: string = "default"
  idToUse: number = 0

  constructor(
    private uploadService: UploadService,
    private authsvc: CredentialsService,
    private consultantService: ConsultantsService
  ) {
    this.actualUserInfo = this.authsvc.getActualUserInfo();
      const name = this.actualUserInfo.name
   }
  ngOnInit(): void {
    if (this.sessionString) {
      const sessionObject = JSON.parse(this.sessionString);
      console.log(`esto tiene el objeto que inicio sesión: ${JSON.stringify(sessionObject)}`)

      this.nameToShow = sessionObject.foundRoleInfo.firstNameTitular
      if (this.nameToShow === undefined){
        this.nameToShow = sessionObject.foundRoleInfo.firstName
      }

      if (sessionObject.foundRoleInfo.imageName != undefined){
        this.imageUrl = sessionObject.foundRoleInfo.imageName        
      }

      this.idToUse = sessionObject.foundRoleInfo._id
    }
  }

  saveChanges(){
    this.upload()
    console.log(this.imageUrl)
    console.log(this.previewImageUrl)
    if (!this.idToUse){
      console.log(`No se encontró el ID de la sesión actual.`)
      return;
    }
    if (this.previewImageUrl === "./assets/images/default-profile.jpg"){
      return alert("no se eligio una foto para el logo")
    }
       
    this.consultantService.updateLogoImgName(this.idToUse, this.previewImageUrl).subscribe( data => {
      console.log(`Si se armó, esto es lo que contiene data: ${JSON.stringify(data)}`)
      this.ngOnInit()
    })     
  }

  upload(): void {
    this.progress = 0;
    console.log("Se manda llamar upload desde saveconsultant")
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

  
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    if (this.selectedFiles && this.selectedFiles.length > 0) {
      this.selectedImage = this.selectedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.previewImageUrl = reader.result;
      };
      reader.readAsDataURL(this.selectedImage);
      this.upload()
    }
  }

}
