import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { tasks } from "../../../models/tasks";
import { ServiceLog } from "../../../models/serviceLog";
import { ServiceLogService } from "../../../services/accountant/service-log/service-log.service";

@Component({
  selector: 'app-service-log',
  templateUrl: './service-log.component.html',
  styleUrls: ['./service-log.component.scss']
})

export class ServiceLogComponent implements OnInit {
  serviceLogForm: FormGroup;

   taskList: tasks[] = []

  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceLogService
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
      name: taskNameParameter,
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
    
     const serviceLog: ServiceLog = {
       serviceLogName: this.serviceLogForm.get('serviceLogName')?.value,
       serviceLogType: this.serviceLogForm.get('serviceLogType')?.value,
       tasks: this.taskList
     }
     this.service.createServiceLog(serviceLog).subscribe(data => {
      console.log("esto es lo que se creó: " + JSON.stringify(data))
     })
 }


}
