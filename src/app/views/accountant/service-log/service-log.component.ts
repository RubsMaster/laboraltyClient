import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { tasks } from "../../../models/tasks";

@Component({
  selector: 'app-service-log',
  templateUrl: './service-log.component.html',
  styleUrls: ['./service-log.component.scss']
})

export class ServiceLogComponent implements OnInit {
  serviceLogForm: FormGroup;

   taskList: tasks[] = []

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.serviceLogForm = this.formBuilder.group({
      serviceLogName: new FormControl('', Validators.required),
      serviceLogType: new FormControl('', Validators.required),
      taskName: new FormControl('', Validators.required)
    })
   }

  ngOnInit(): void {
  }

  addTaskToList(taskNameParameter: string){
    const task: tasks = {
      taskName: taskNameParameter,
      completed: false
    }
     this.taskList.push(task)
  }

  deleteTask(name: string, index: number){
    if (index >= 0 && index < this.taskList.length) {
      this.taskList.splice(index, 1);
    }
  }

  saveService() {
  //   const doc: laborDocuments = {
  //     serviceLogName: this.serviceLogForm.get('name')?.value,
  //     serviceLogType: this.serviceLogForm.get('type')?.value
  //   }
  //   this.DocumentsService.createDoc(doc).subscribe(data => {
  //     console.log("Se guardo el documento: " + doc)
  //     this.ngOnInit();
  //     this.content = '';
  //   }, error => {
  //     console.log(error)
  //   });

 }


}
