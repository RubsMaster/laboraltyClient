import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import {AuthService} from "../../../services/auth/auth.service";

import { CredentialsService } from 'src/app/services/credentials.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {
  imageUrl: string = './assets/images/default-profile.jpg';

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(
    private classToggler: ClassToggleService,
    private authService: AuthService
    ,
    private authsvc: CredentialsService) {

    super();
  }

  getUserInfo(){
    return this.authService
  }

  logout() {
    this.authsvc.logout();
  }
  


}
