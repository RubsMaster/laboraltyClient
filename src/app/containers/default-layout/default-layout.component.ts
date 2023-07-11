import { Component } from '@angular/core';

import { navAdmin, navAccountant, navClient, navConsultant  } from './_nav';
// import { navAccountant } from './_AccountantNav';
import { CredentialsService } from 'src/app/services/credentials.service';
import { INavData } from '@coreui/angular';
import { Roles } from 'src/app/models/credential'; // ajusta la ruta según donde esté definido tu tipo
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {

 
  public navItems: INavData[] = [];

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor(private authsvc: CredentialsService,
    private router: Router){ }

  ngOnInit() {
    this.authsvc.role$.subscribe((userRole: Roles | null) => {
      switch(userRole) {
        case 'ADMIN':
          this.navItems = navAdmin;
          break;
        case 'ACCOUNTANT':
          this.navItems = navAccountant;
          break;
        case 'CLIENT':
          // Asume que tienes navClient y navConsultant disponibles
          this.navItems = navClient;
          break;
        case 'CONSULTANT':
          this.navItems = navConsultant;
          break;
        default:
          // Manejo de una role desconocida o sin role, puedes redirigir al usuario al login
          // o establecer los items del nav a un estado vacío.
          this.router.navigate(["/login"])
          // this.navItems = [];
          break;
      }
    });
  }
  

  // public perfectScrollbarConfig = {
  //   suppressScrollX: true,
  // };
}
