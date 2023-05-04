import { Component, OnInit } from '@angular/core';

import { AdminModel } from "../../../../models/admin"

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss']
})
export class AdminFormComponent implements OnInit {

  constructor() { }
  ListAdmins: AdminModel[] = [];
  ngOnInit(): void {
  }

}
