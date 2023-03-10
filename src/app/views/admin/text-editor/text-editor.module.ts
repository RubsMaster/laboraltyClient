import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextEditorRoutingModule } from './text-editor-routing.module';
import { TextEditorComponent } from './text-editor.component';

import { FormsModule } from '@angular/forms';

import { QuillModule } from "ngx-quill";

import {
  GridModule,
  ButtonModule,
  CardModule
} from '@coreui/angular';


@NgModule({
  declarations: [
    TextEditorComponent
  ],
  imports: [
    CommonModule,
    TextEditorRoutingModule,
    QuillModule,
    GridModule,
    ButtonModule,
    CardModule,
    FormsModule
  ]
})
export class TextEditorModule { }
