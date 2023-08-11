import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DefaultLayoutComponent } from "./containers";
import { Page404Component } from "./views/pages/page404/page404.component";
import { Page500Component } from "./views/pages/page500/page500.component";
import { LoginComponent } from "./views/pages/login/login.component";
import { RegisterComponent } from "./views/pages/register/register.component";
import { CheckLoginGuard } from "./guards/check-login.guard";

const routes: Routes = [
  {
    path: "",
    component: DefaultLayoutComponent,
    data: {
      title: "Administrador",
    },
    children: [
      {
        path: "adminDashboard",
        loadChildren: () =>
          import("./views/admin/admin-dashboard/admin-dashboard.module").then(
            (m) => m.AdminDashboardModule
          ),
      },
      {
        path: "textEditor/:id",
        loadChildren: () =>
          import("./views/admin/text-editor/text-editor.module").then(
            (m) => m.TextEditorModule
          ),
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
        path: "users",
        loadChildren: () =>
          import("./views/admin/users/users.module").then((m) => m.UsersModule),
      },
      {
        path: "users/:id",
        loadChildren: () =>
          import("./views/admin/users/users.module").then((m) => m.UsersModule),
      },
      {
        path: "adminForm",
        loadChildren: () =>
          import(
            "./views/admin/admin-dashboard/admin-form/admin-form.module"
          ).then((m) => m.AdminFormModule),
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
    canActivate: [CheckLoginGuard],
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

  {
    path: "",
    component: DefaultLayoutComponent,
    data: {
      title: "Contador",
    },
    children: [
      {
        path: "labor-file-sections",
        loadChildren: () =>
          import(
            "./views/accountant/labor-file-sections/labor-file-sections.module"
          ).then((m) => m.LaborFileSectionsModule),
      },
      {
        path: "settings",
        loadChildren: () =>
          import("./views/accountant/settings/settings.module").then(
            (m) => m.SettingsModule
          ),
      },
      {
        path: "service-log",
        loadChildren: () =>
          import("./views/accountant/service-log/service-log.module").then(
            (m) => m.ServiceLogModule
          ),
      },
      {
        path: "clients",
        loadChildren: () =>
          import("./views/accountant/clients/clients.module").then(
            (m) => m.ClientsModule
          ),
      },
      {
        path: "consultants",
        loadChildren: () =>
          import("./views/accountant/consultants/consultants.module").then(
            (m) => m.ConsultantsModule
          ),
      },
    ],
  },
  {
    path: "",
    component: DefaultLayoutComponent,
    data: {
      title: "Consultor",
    },
    children: [
      {
        path: "consultantDashboard",
        loadChildren: () =>
          import(
            "./views/consultant/consultant-dashboard/consultant-dashboard.module"
          ).then((m) => m.ConsultantDashboardModule),
      },
    ],
  },

  { path: "**", redirectTo: "adminDashboard" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "top",
      anchorScrolling: "enabled",
      initialNavigation: "enabledBlocking",
      // relativeLinkResolution: 'legacy'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
