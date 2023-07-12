import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import {AuthService} from "../../../services/auth/auth.service";

import { CredentialsService } from 'src/app/services/credentials.service';
import { sessionModel } from "../../../models/credential";
import { json } from 'stream/consumers';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {
  imageUrl: string = './assets/images/default-profile.jpg';
  userID: string | null = '';
  actualUserInfo: sessionModel

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(
    private classToggler: ClassToggleService,
    private authsvc: CredentialsService) {
      super();
      this.actualUserInfo = this.authsvc.getActualUserInfo();
      const name = this.actualUserInfo.name
      console.log("actual user: " + JSON.stringify(this.actualUserInfo))
  }


  
  logout() {
    this.authsvc.logout();

  }

  getSessionInfo(){

  }
  


}
