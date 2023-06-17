import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-labor-file-sections',
  templateUrl: './labor-file-sections.component.html',
  styleUrls: ['./labor-file-sections.component.scss']
})
export class LaborFileSectionsComponent implements OnInit {
  createLaborFiles: FormGroup;

  laborFile: string;
  fileType: string;
  constructor(
    private _router: Router,
    public formBuilder: FormBuilder,
    private aRouter: ActivatedRoute
  ) { 
    this.createLaborFiles = this.formBuilder.group({
      laborFile: ["", Validators.required],
      fileType: ["", Validators.required]
    })
    this.laborFile= 'Escriba el nombre de la sección'
    this.fileType= 'Tipo de sección'
  }

  ngOnInit(): void {
  }

}
