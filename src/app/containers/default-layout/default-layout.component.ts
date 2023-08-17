import { Component } from '@angular/core';

import { navAdmin, navAccountant, navClient, navConsultant } from './_nav';
// import { navAccountant } from './_AccountantNav';
import { CredentialsService } from 'src/app/services/credentials.service';
import { UsersService } from "src/app/services/users/users.service";
import { INavData } from '@coreui/angular';
import { Roles } from 'src/app/models/credential'; // ajusta la ruta según donde esté definido tu tipo
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {
  fatherID: string = 'default';
  logoRoute: string = 'default';
  profilePictureRoute: string = 'default'

  brandFull: any;

  sessionString = localStorage.getItem('user');

  public navItems: INavData[] = [];

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor(
    private authsvc: CredentialsService,
    private router: Router,
    private accountantSvc: UsersService
  ) { }

  async ngOnInit() {
    if (this.sessionString) {
      const sessionObject = JSON.parse(this.sessionString);

      switch (sessionObject.role) {
        case "Admin":
          this.logoRoute = `assets/img/brand/laboralty.jpeg`;
          break;
        case "Accountant":
          this.logoRoute = `http://localhost:4000/getFile/${sessionObject.foundRoleInfo.logoImgName}`;
          break;
        case "Consultant":
          this.fatherID = sessionObject.foundRoleInfo.createdBy;
          try {
            const data = await this.accountantSvc.getAccountant(this.fatherID).toPromise();
            this.logoRoute = `http://localhost:4000/getFile/${data.logoImgName}`;
          } catch (error) {
            console.error("Error getting accountant data:", error);
          }
          break;
        case "Client":
          console.log(`assigned to: ${sessionObject.foundRoleInfo.assignedTo}`)
          // Agrega el código necesario para el caso "Client" si es necesario

          break;

        default:
          console.warn("Unknown role:", sessionObject.role);
          break;
      }


    }
    this.setEnvironment();
  }

  setEnvironment() {
    // Construir la URL completa de la imagen aquí
    this.brandFull = {
      src: this.logoRoute, // Utiliza las comillas invertidas para interpolación
      width: 200,
      height: 46,
      alt: 'Logo',
    };

    this.authsvc.role$.subscribe((userRole: Roles | null) => {
      switch (userRole) {
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
  }

}
