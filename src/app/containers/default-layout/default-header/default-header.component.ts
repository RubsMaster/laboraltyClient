import { Component, Input, OnInit  } from '@angular/core';
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
export class DefaultHeaderComponent extends HeaderComponent implements OnInit {
  imageUrl: string = './assets/images/default-profile.jpg';
  userID: string | null = '';
  sessionInfo: sessionModel | null = null;

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(
    private classToggler: ClassToggleService,
    private authsvc: CredentialsService) {
      super();
      const sessionString = localStorage.getItem('user');
    if (sessionString) {
      this.sessionInfo = JSON.parse(sessionString);
    }
  }

  ngOnInit() {
    const sessionString = localStorage.getItem('user');
    if (sessionString) {
      this.sessionInfo = JSON.parse(sessionString);
    }
  }

  logout() {
    this.authsvc.logout();
  }

}
