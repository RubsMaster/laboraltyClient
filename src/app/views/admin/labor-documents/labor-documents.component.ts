  import { Component, OnInit } from '@angular/core';
import { FormControl, AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

import { laborDocuments } from "../../../models/laborDocuments";
import { LaborDocumentsService } from "../../../services/labor-documents/labor-documents.service";

@Component({
  selector: 'app-labor-documents',
  templateUrl: './labor-documents.component.html',
  styleUrls: ['./labor-documents.component.scss']
})
export class LaborDocumentsComponent implements OnInit {

  laborDocumentForm!: FormGroup;
  p:number = 1;
  itemsPerPage:number = 8;
  totalDocs:any;
  docName = new FormControl('', Validators.required);

  idDoc: string="";
  name: string="";
  type: string="";
  isAvailable: boolean=false;
  isImmediate: boolean=false;
  uniqueFields:  boolean=false;

  constructor(
    private DocumentsService: LaborDocumentsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.laborDocumentForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      isMandatory: [''],
      isImmediate: [''],
      uniqueFields: ['']
    });
  }
  

  ListDocs: laborDocuments[] = [];
  isDisplayed: boolean = false;

  ngOnInit(): void {
    this.getDocs();
    this.laborDocumentForm.reset();
  }

  getDocs() {
    this.DocumentsService.getDocs().subscribe(data => {
      this.ListDocs = data.reverse();
      this.totalDocs = data.length;
    })
  }

  saveDoc() {
    const doc: laborDocuments = {
      name: this.laborDocumentForm.get('name')?.value,
      type: this.laborDocumentForm.get('type')?.value,
      isAvailable: this.laborDocumentForm.get('isMandatory')?.value,
      isImmediate: this.laborDocumentForm.get('isImmediate')?.value,
      uniqueFields: this.laborDocumentForm.get('uniqueFields')?.value,
    }

    this.DocumentsService.createDoc(doc).subscribe(data => {
      this.ngOnInit();
    }, error => {
      console.log(error)
    })

  }

  showUniqueFields(event:any){
  
    if(event.target.checked==true){
      this.isDisplayed = true;
    }
    else{
      this.isDisplayed = false;
    }
    // Add other stuff
  }

  setUpdate(data: any)
  {
   this.name = data.namme;
   this.type = data.type;
   this.isAvailable = data.isAvailable;
   this.isImmediate = data.isImmediate;
   this.uniqueFields = data.uniqueFields;

 
   this.idDoc = data.id;
   console.log('test')
  }

}

