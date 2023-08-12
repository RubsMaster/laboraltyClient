import { Component, OnInit } from '@angular/core';

import { ClientModel } from "../../../models/client";
import { ClientsService } from "../../../services/accountant/clients/clients.service";

import { ConsultantModel } from 'src/app/models/consultant';
import { ConsultantsService } from "../../../services/accountant/consultants/consultants.service";

import { formatDistanceToNowStrict } from "date-fns";
import { es } from "date-fns/locale"; // Importa el locale en español

import { cilPenNib, cilUserPlus, cilNotes } from "@coreui/icons";

@Component({
  selector: 'app-consultant-dashboard',
  templateUrl: './consultant-dashboard.component.html',
  styleUrls: ['./consultant-dashboard.component.scss']
})
export class ConsultantDashboardComponent implements OnInit {
  //pagination 
  paginationId = 'consultantDashboardPagination';
  p1: number = 1;
  itemsPerPage:number = 5;
  currentPage = 1;

  clientList: ClientModel[] = [];
  consultantList: ConsultantModel[] = [];

  sessionString = localStorage.getItem('user');
  sessionID = ""

  icons = {
    cilPenNib,
    cilUserPlus,
    cilNotes
  };
  constructor(
    private clientService: ClientsService
  ) { }

  ngOnInit(): void {
    this.getAllClients()
    if (this.sessionString) {
      const sessionObject = JSON.parse(this.sessionString);
      this.sessionID = sessionObject.foundRoleInfo._id
    }
  }
  getAllClients() {
    this.clientService.getAllClients().subscribe(
      (data: any) => {
        this.clientList = data as ClientModel[]; // Asignar los datos al arreglo clientList

        this.clientList = this.clientList.filter(
          (consultant) => consultant.assignedTo === this.sessionID
        );

        this.clientList.reverse();
      },
      error => {
        console.log(error);
      }
    );
  }
  getFormattedDate(date: string): string {
    const formattedDate = formatDistanceToNowStrict(new Date(date), {locale:es, addSuffix: true });
    return formattedDate;
  }
}
