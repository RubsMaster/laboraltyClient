import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { laborDocuments } from "../../../models/laborDocuments";
import { LaborDocumentsService } from "../../../services/labor-documents/labor-documents.service";

@Component({
  selector: 'app-labor-documents',
  templateUrl: './labor-documents.component.html',
  styleUrls: ['./labor-documents.component.scss']
})
export class LaborDocumentsComponent implements OnInit {

  public modulesQuill = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ font: [] }],
      [{ color: [] }, { background: [] }],
      [{ size: ['small', false, 'large', 'huge'] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ align: [] }],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image', 'video'],
      ['clean'],
    ]
  };

  public htmlContent: any;

  laborDocumentForm!: FormGroup;
  p:number = 1;
  itemsPerPage:number = 8;
  totalDocs:any;
  docName = new FormControl('', Validators.required);

  idDoc: string="";
  name: string="";
  type: string="";
  text: string="";
  isAvailable: boolean=false;
  isImmediate: boolean=false;
  uniqueFields:  boolean=false;

  uniqueName: string="";
  uniqueType: string="";
  uniqueName1: string="";
  uniqueType1: string="";
  uniqueName2: string="";
  uniqueType2: string="";
  uniqueName3: string="";
  uniqueType3: string="";
  uniqueName4: string="";
  uniqueType4: string="";


  constructor(
    private DocumentsService: LaborDocumentsService,
    private formBuilder: FormBuilder
  ) {
    this.laborDocumentForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      isMandatory: [''],
      isImmediate: [''],
      uniqueFields: [''],
      uniqueName: [''],
      uniqueType: [''],
      uniqueName1: [''],
      uniqueType1: [''],
      uniqueName2: [''],
      uniqueType2: [''],
      uniqueName3: [''],
      uniqueType3: [''],
      uniqueName4: [''],
      uniqueType4: ['']
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
      text: this.htmlContent
    }

    this.DocumentsService.createDoc(doc).subscribe(data => {
      console.log(doc);
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

  onChangedEditor(event: any): void {
    if (event.html) {
        this.htmlContent = event.html;
      }
  }

}

