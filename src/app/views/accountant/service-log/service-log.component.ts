import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-log',
  templateUrl: './service-log.component.html',
  styleUrls: ['./service-log.component.scss']
})
export class ServiceLogComponent implements OnInit {
  serviceLogForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.serviceLogForm = this.formBuilder.group({
      serviceLogName: new FormControl('', Validators.required),
      serviceLogType: new FormControl('', Validators.required)
    })
   }

  ngOnInit(): void {
  }


  saveService() {
  //   const doc: laborDocuments = {
  //     serviceLogName: this.serviceLogForm.get('name')?.value,
  //     serviceLogType: this.serviceLogForm.get('type')?.value
  //   }
  //   this.DocumentsService.createDoc(doc).subscribe(data => {
  //     console.log("Se guardo el documento: " + doc)
  //     this.ngOnInit();
  //     this.content = '';
  //   }, error => {
  //     console.log(error)
  //   });

 }


}
