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
  content: string  = "";
  identifier = ''
  title: string = "";

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
  }

  ngOnInit(): void {
    this._route.queryParams.subscribe(params => {
      const isMoral = params['isMoral'] === 'true';
      this.getDoc(isMoral);
    });
  }

  onChangedEditor(event: any): void {
    if (event.html) {
      this.htmlContent = event.html;
    }
  }  

  getDoc(isMoral: boolean) {
    const id = this._route.snapshot.paramMap.get('id');
    this.DocumentsService.getDoc(id).subscribe(data => {
      this.documento = data;
      this.content = data.text;
      this.title = data.name + (isMoral ? ' | moral' : '');
    });
  }

  saveEdit() {
     this.DocumentsService.editText(this.documento._id, this.content).subscribe(data => {       
     });
     this._router.navigate(['/', 'laborDocuments']);
  }



  showContent() {
    console.log(this.htmlContent);
  }

}
