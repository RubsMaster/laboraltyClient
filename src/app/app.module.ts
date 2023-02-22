import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from "@angular/common/http";


// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import {
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
} from './containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule
} from '@coreui/angular';

import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';

import { IconModule, IconSetService } from '@coreui/icons-angular';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { DocsComponentsModule } from '@docs-components/docs-components.module';

import { FormsRoutingModule } from './views/forms/forms-routing.module';
import { RangesComponent } from './views/forms/ranges/ranges.component';
import { FloatingLabelsComponent } from './views/forms/floating-labels/floating-labels.component';
import { FormControlsComponent } from './views/forms/form-controls/form-controls.component';
import { SelectComponent } from './views/forms/select/select.component';
import { ChecksRadiosComponent } from './views/forms/checks-radios/checks-radios.component';
import { InputGroupsComponent } from './views/forms/input-groups/input-groups.component';
import { LayoutComponent } from './views/forms/layout/layout.component';
import { ValidationComponent } from './views/forms/validation/validation.component';




const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    CommonModule,
    FormsRoutingModule,
    DocsComponentsModule,
    CardModule,
    FormModule,
    GridModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    DropdownModule,
    SharedModule,
    ListGroupModule,
    RichTextEditorAllModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    IconSetService,
    Title
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
