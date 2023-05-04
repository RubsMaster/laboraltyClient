import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-log',
  templateUrl: './service-log.component.html',
  styleUrls: ['./service-log.component.scss']
})
export class ServiceLogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
