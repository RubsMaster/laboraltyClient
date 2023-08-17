import { Component, Input, OnInit  } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import {AuthService} from "../../../services/auth/auth.service";

import { CredentialsService } from 'src/app/services/credentials.service';
import { sessionModel } from "../../../models/credential";
import { json } from 'stream/consumers';

import { ConsultantModel } from "../../../models/consultant";

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent implements OnInit {

  imageUrl: string = '';
  userID: string | null = '';

  sessionString = localStorage.getItem('user');

  nameToShow: string = "default"

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(
    private authsvc: CredentialsService) {
      super();
  }

  ngOnInit() {
    if (this.sessionString) {
      const sessionObject = JSON.parse(this.sessionString);
      this.nameToShow = sessionObject.foundRoleInfo.firstNameTitular
      
      if (this.nameToShow === undefined){
        this.nameToShow = sessionObject.foundRoleInfo.firstName
      }

      if (sessionObject.foundRoleInfo.imageName === undefined){
        this.imageUrl = "./assets/images/default-profile.jpg"  
      } else {
        this.imageUrl = `http://localhost:4000/getFile/${sessionObject.foundRoleInfo.imageName}`
      }
      
    }
  }

  logout() {
    this.authsvc.logout();
  }

}
