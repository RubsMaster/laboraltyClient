import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";


import { laborDocuments } from "../../../models/laborDocuments";
import { LaborDocumentsService } from "../../../services/labor-documents/labor-documents.service";

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
  @ViewChild('editorSpecific') editor: any;
  public content = ''
  public identifier = ''

  ListDocs: laborDocuments[] = [];

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
    ],
  };


  public htmlContent: any;
  public documento: any;

  uniqueName: string = "";
  uniqueType: string = "";
  uniqueName1: string = "";
  uniqueType1: string = "";
  uniqueName2: string = "";
  uniqueType2: string = "";
  uniqueName3: string = "";
  uniqueType3: string = "";
  uniqueName4: string = "";
  uniqueType4: string = "";
  uniqueName5: string = "";
  uniqueType5: string = "";

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private DocumentsService: LaborDocumentsService,
  ) {
    this.uniqueName = this.documento.uniqueName
    this.uniqueType = this.documento.uniqueType
    this.uniqueName1 = this.documento.uniqueName1
    this.uniqueType1 = this.documento.uniqueType1
    this.uniqueName2 = this.documento.uniqueName2
    this.uniqueType2 = this.documento.uniqueType2
    this.uniqueName3 = this.documento.uniqueName3
    this.uniqueType3 = this.documento.uniqueType3
    this.uniqueName4 = this.documento.uniqueName4
    this.uniqueType4 = this.documento.uniqueType4
    this.uniqueName5 = this.documento.uniqueName5
    this.uniqueType5 = this.documento.uniqueType5
   }

  ngOnInit(): void {
  }

  onChangedEditor(event: any): void {
    if (event.html) {
      this.htmlContent = event.html;
    }
  }
  getInfoFromDoc() {
    var index: any;
    this.DocumentsService.getDocs().subscribe(data => {
      data.reverse();
      index = this._route.snapshot.paramMap.get('id');
      this.documento = data[index];
      this.content = this.documento.text;
    });
  }
  saveEdit() {
    this.DocumentsService.editText(this.documento.name, this.content).subscribe(data => {
      console.log(data);
    });
    this._router.navigate(['/', 'laborDocuments']);
  }
  showContent() {
    console.log(this.htmlContent);
  }
}
