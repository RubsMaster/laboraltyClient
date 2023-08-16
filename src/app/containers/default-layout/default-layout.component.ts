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
  imageUrl: string = '';
  brandFull: any;
 
  sessionString = localStorage.getItem('user');

  public navItems: INavData[] = [];

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor(private authsvc: CredentialsService,
    private router: Router){ }

  ngOnInit() {
    if (this.sessionString) {
      const sessionObject = JSON.parse(this.sessionString);
      
      this.imageUrl = sessionObject.foundRoleInfo.logoImgName
    }

    this.authsvc.role$.subscribe((userRole: Roles | null) => {
      switch(userRole) {
        case 'Admin':
          this.navItems = navAdmin;
          break;
        case 'Accountant':
          this.navItems = navAccountant;
          break;
        case 'Client':
          // Asume que tienes navClient y navConsultant disponibles
          this.navItems = navClient;
          break;
        case 'Consultant':
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


    // Construir la URL completa de la imagen aquí
    this.brandFull = {
      src: `http://localhost:4000/getFile/${this.imageUrl}`, // Utiliza las comillas invertidas para interpolación
      width: 200,
      height: 46,
      alt: 'CoreUI Logo',
    };
  }
  

  // public perfectScrollbarConfig = {
  //   suppressScrollX: true,
  // };
}
