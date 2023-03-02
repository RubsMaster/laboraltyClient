import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";


import { laborDocuments } from "../../../models/laborDocuments";
import { LaborDocumentsService } from "../../../services/labor-documents/labor-documents.service";

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {
  @ViewChild('editorSpecific') editor: any;
  content = ''
  identifier = ''

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
    ]
  };

  public htmlContent: any;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private DocumentsService: LaborDocumentsService,
  ) { }

  ngOnInit(): void {
    this.getDocs();
  }

  onChangedEditor(event: any): void {
    if (event.html) {
        this.htmlContent = event.html;
      }
  }

  getDocs() {
    this.DocumentsService.getDocs().subscribe(data => {
      this.ListDocs = data.reverse();      
      
    })
  }

  showContent(){
    console.log(this.htmlContent);
  }

}
