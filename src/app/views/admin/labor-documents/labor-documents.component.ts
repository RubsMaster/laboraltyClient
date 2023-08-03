import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import Quill from 'quill';

// import Delta from "quill-delta";

import { laborDocuments } from "../../../models/laborDocuments";
import { LaborDocumentsService } from "../../../services/labor-documents/labor-documents.service";
import { Router } from '@angular/router';
import { created } from '@syncfusion/ej2-angular-richtexteditor';


@Component({
  selector: 'app-labor-documents',
  templateUrl: './labor-documents.component.html',
  styleUrls: ['./labor-documents.component.scss']
})
export class LaborDocumentsComponent implements OnInit {
  @ViewChild('editor') editor: any;
  content = ''

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
  uniqueName5: string="";
  uniqueType5: string="";

  ListDocs: laborDocuments[] = [];
  isDisplayed: boolean = false;

  // Quill container 

  constructor(
    private _router: Router,
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
      uniqueType4: [''],
      uniqueName5: [''],
      uniqueType5: ['']
    });


  }

  ngOnInit(): void {
    
    this.getDocs();
    this.laborDocumentForm.reset();
  }

  getDocs() {
    this.DocumentsService.getDocs().subscribe(data => {
      const documentosFiltrados: { [nombre: string]: laborDocuments } = {};
  
      for (const documento of data) {
        const nombre = documento.name;
  
        if (documentosFiltrados[nombre]) {
          if (documento.isMoral === true) {
            documentosFiltrados[nombre] = documento;
          }
        } else {
          documentosFiltrados[nombre] = documento;
        }
      }
  
      this.ListDocs = Object.values(documentosFiltrados).reverse();
    });
  }
  

  saveDoc() {
    const doc: laborDocuments = {
      name: this.laborDocumentForm.get('name')?.value,
      type: this.laborDocumentForm.get('type')?.value,
      isAvailable: this.laborDocumentForm.get('isMandatory')?.value,
      isImmediate: this.laborDocumentForm.get('isImmediate')?.value,
      isMoral:  false,
      uniqueFields: this.laborDocumentForm.get('uniqueFields')?.value,
      uniqueName: this.laborDocumentForm.get('uniqueName')?.value,
      uniqueType: this.laborDocumentForm.get('uniqueType')?.value,
      uniqueName1: this.laborDocumentForm.get('uniqueName1')?.value,
      uniqueType1: this.laborDocumentForm.get('uniqueType1')?.value,
      uniqueName2: this.laborDocumentForm.get('uniqueName2')?.value,
      uniqueType2: this.laborDocumentForm.get('uniqueType2')?.value,
      uniqueName3: this.laborDocumentForm.get('uniqueName3')?.value,
      uniqueType3: this.laborDocumentForm.get('uniqueType3')?.value,
      uniqueName4: this.laborDocumentForm.get('uniqueName4')?.value,
      uniqueType4: this.laborDocumentForm.get('uniqueType4')?.value,
      uniqueName5: this.laborDocumentForm.get('uniqueName5')?.value,
      uniqueType5: this.laborDocumentForm.get('uniqueType5')?.value,
      text: this.htmlContent,
    }
    this.DocumentsService.createDoc(doc).subscribe(data => {
      console.log("Se guardo el documento: " + doc)
      this.ngOnInit();
      this.content = '';
    }, error => {
      console.log(error)
    });
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
  
  redirectToEditor(idDoc: any, docName: any, isMoral: boolean) {
  let subscription = this.DocumentsService.getDocByName(docName, isMoral).subscribe(data => {
    if (data) {
      console.log("El documento ya existe");
      this._router.navigate([`/textEditor/${data._id}`], { queryParams: { isMoral: false } });
    } else {
      console.log("Se creó una copia");
      let resentDoc = this.DocumentsService.getDoc(idDoc).subscribe(data => {
        this.copyDocument(data);
      })
      
    }
    subscription.unsubscribe();
  });
}



  copyDocument(documento: laborDocuments) {
    const newDocument: laborDocuments = {
      name: documento.name, // agregar "_moral" al nombre del documento
      type: documento.type,
      isAvailable: documento.isAvailable,
      isImmediate: documento.isImmediate,
      uniqueFields: documento.uniqueFields,
      text: documento.text,
      uniqueName: documento.uniqueName,
      uniqueType: documento.uniqueType,
      uniqueName1: documento.uniqueName1,
      uniqueType1: documento.uniqueType1,
      uniqueName2: documento.uniqueName2,
      uniqueType2: documento.uniqueType2,
      uniqueName3: documento.uniqueName3,
      uniqueType3: documento.uniqueType3,
      uniqueName4: documento.uniqueName4,
      uniqueType4: documento.uniqueType4,
      uniqueName5: documento.uniqueName5,
      uniqueType5: documento.uniqueType5,
      isMoral: true // establecer isMoral en true
    };
  
     // guardar la copia en la base de datos
     this.DocumentsService.createDoc(newDocument).subscribe(response => {
      console.log("se crea y se redirecciona")
      this.DocumentsService.getDoc(response).subscribe(data => {
        this._router.navigate([`/textEditor/${data._id}`], { queryParams: { isMoral: true } });
      })
      
     });
  }
  

  

  onChangedEditor(event: any): void {
    if (event.html) {
        this.htmlContent = event.html;
      }
  }


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

}

