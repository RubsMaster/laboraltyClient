import { Component, OnInit } from '@angular/core';
import {
  ToolbarService,
  LinkService,
  ImageService,
  HtmlEditorService
} from "@syncfusion/ej2-angular-richtexteditor";

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss'],  
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class TextEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
