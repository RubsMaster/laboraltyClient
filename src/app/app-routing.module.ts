import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import * as path from 'path';
import { UsersComponent } from './views/admin/users/users.component';

const routes: Routes = [
  {
    path: "",
    component: DefaultLayoutComponent,
    data: {
      title: "Home",
    },
    children: [
      { path: 'text',
       loadChildren: () => 
          import('./views/admin/text/text.module').then(
            m => m.TextModule) 
      },
      {
        path: "adminDashboard",
        loadChildren: () =>
          import("./views/admin/admin-dashboard/admin-dashboard.module").then(
            (m) => m.AdminDashboardModule
          ),
      },
      { path: "textEditor/:id",
        loadChildren: () => 
          import('./views/admin/text-editor/text-editor.module').then(
            (m) => m.TextEditorModule) 
      },
      {
        path: "employees",
        loadChildren: () =>
          import("./views/employees/employees.module").then(
            (m) => m.EmployeesModule
          ),
      },
      {
        path: "documents",
        loadChildren: () =>
          import("./views/documents/documents.module").then(
            (m) => m.DocumentsModule
          ),
      },
      {
        path: "dashboard",
        loadChildren: () =>
          import("./views/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: "theme",
        loadChildren: () =>
          import("./views/theme/theme.module").then((m) => m.ThemeModule),
      },
      {
        path: "base",
        loadChildren: () =>
          import("./views/base/base.module").then((m) => m.BaseModule),
      },
      {
        path: "buttons",
        loadChildren: () =>
          import("./views/buttons/buttons.module").then((m) => m.ButtonsModule),
      },
      {
        path: "forms",
        loadChildren: () =>
          import("./views/forms/forms.module").then((m) => m.CoreUIFormsModule),
      },
      {
        path: "charts",
        loadChildren: () =>
          import("./views/charts/charts.module").then((m) => m.ChartsModule),
      },
      {
        path: "icons",
        loadChildren: () =>
          import("./views/icons/icons.module").then((m) => m.IconsModule),
      },
      {
        path: "notifications",
        loadChildren: () =>
          import("./views/notifications/notifications.module").then(
            (m) => m.NotificationsModule
          ),
      },
      {
        path: "widgets",
        loadChildren: () =>
          import("./views/widgets/widgets.module").then((m) => m.WidgetsModule),
      },
      {
        path: "pages",
        loadChildren: () =>
          import("./views/pages/pages.module").then((m) => m.PagesModule),
      },
      {
        path: "add-edit-Employees",
        loadChildren: () =>
          import(
            "./components/add-edit-employees/add-edit-employees.module"
          ).then((m) => m.AddEditEmployeesModule),
      },
      {
        path: "laborDocuments",
        loadChildren: () =>
          import("./views/admin/labor-documents/labor-documents.module").then(
            (m) => m.LaborDocumentsModule
          ),
      },
      {
        path: "companies",
        loadChildren: () =>
          import("./views/admin/companies/companies.module").then(
            (m) => m.CompaniesModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./views/admin/users/users.module').then(
            m => m.UsersModule)
      },
      {
        path: "edit-user/:id",
        component: UsersComponent,
        data: {
          title: "Editar usuario",
        },
      },
    ],
  },
  {
    path: "404",
    component: Page404Component,
    data: {
      title: "Page 404",
    },
  },
 
  {
    path: "500",
    component: Page500Component,
    data: {
      title: "Page 500",
    },
  },
  {
    path: "login",
    component: LoginComponent,
    data: {
      title: "Login Page",
    },
  },
  {
    path: "register",
    component: RegisterComponent,
    data: {
      title: "Register Page",
    },
  },
  
  { path: "**", redirectTo: "adminDashboard" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
