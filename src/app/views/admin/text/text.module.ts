import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextRoutingModule } from './text-routing.module';
import { TextComponent } from './text.component';

import { FormsModule } from '@angular/forms';

import { QuillModule } from "ngx-quill";

import {
  GridModule,
  ButtonModule,
  CardModule
} from '@coreui/angular';


@NgModule({
  declarations: [
    TextComponent
  ],
  imports: [
    CommonModule,
    TextRoutingModule,
    QuillModule,
    GridModule,
    ButtonModule,
    CardModule,
    FormsModule
  ]
})
export class TextModule { }
