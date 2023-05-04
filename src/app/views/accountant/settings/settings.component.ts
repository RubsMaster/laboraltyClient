import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { UserModel } from "../../../models/user";
import { UsersService } from "../../../services/users/users.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(
    private userService: UsersService
  ) {
    
   }
  ListUsers: UserModel[] = [];
  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe( data => {
      this.ListUsers = data.reverse();
    })
  }
}
