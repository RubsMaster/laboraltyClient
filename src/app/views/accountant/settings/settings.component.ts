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

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';

  fileInfos?: Observable<any>;

  imageUrl: string = './assets/images/default-profile.jpg';

  constructor(
    private uploadService: UploadService
  ) {
    
   }
  ngOnInit(): void {
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

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

}
