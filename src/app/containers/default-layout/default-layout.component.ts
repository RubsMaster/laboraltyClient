import { Component } from '@angular/core';

import { navItems } from './_nav';
import { navAccountant } from './_AccountantNav';
import { CredentialsService } from 'src/app/services/credentials.service';
import { INavData } from '@coreui/angular';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {
  navData: INavData[] = [];


  constructor(private authsvc: CredentialsService){
   
  }

  // ngOnInit() {
  //   this.authsvc.getRole$.subscribe(role => {
  //     if (role === 'ACCOUNTANT') {
  //       this.navData = navAccountant;
  //     // } else if (role === 'ACCOUNTANT') {
  //     //   this.navData = navAccountant;
  //     // } // y así sucesivamente para los demás roles...
  //  } })}

  
  
  public navItems = navAccountant;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };
}
