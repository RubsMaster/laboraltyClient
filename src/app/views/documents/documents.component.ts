import { Component, OnInit } from '@angular/core';

interface IProgressBar {
  color: string;
  status: string;
}

interface IDoc3{
  document: string;
  qualification: string;
  enrollmentDate: string;
  validity: string;
  versionControl: string;
  status: string;
  disable: string;
  
}

interface IDoc2{
  document: string;
  qualification: string;
  enrollmentDate: string;
  validity: string;
  versionControl: string;
  status: string;
  disable: string;
}

interface IDoc {
  document: string;
  qualification: string;
  enrollmentDate: string;
  validity: string;
  versionControl: string;
  status: string;
  disable: string;
}

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  constructor() { }
  public progressColor = 'success'

  public progressBar: IProgressBar[] = [
    {
      color: 'success',
      status: 'success'
    }
  ]

  public documents3: IDoc3[] = [
    {
      document: 'R Acta de Administrativa de Hechos.',
      qualification: '0',
      enrollmentDate: '27/12/2022',
      validity: 'Indefinida',
      versionControl: 'Control de versiones',
      status: 'Pendiente',
      disable: 'string'
    },
    {
      document: 'R Acta Administrativa de Sanción.',
      qualification: '0',
      enrollmentDate: '27/12/2022',
      validity: 'Indefinida',
      versionControl: 'Control de versiones',
      status: 'Pendiente',
      disable: 'string'
    }
  ]

  public documents2: IDoc2[] = [
    {
      document: 'R Reporte de faltante de herramienta.',
      qualification: '0',
      enrollmentDate: '27/12/2022',
      validity: 'Indefinida',
      versionControl: 'Control de versiones',
      status: 'Pendiente',
      disable: 'string'
    },
    {
      document: 'R Resguardo de herramienta.',
      qualification: '0',
      enrollmentDate: '27/12/2022',
      validity: 'Indefinida',
      versionControl: 'Control de versiones',
      status: 'Pendiente',
      disable: 'string'
    },
    {
      document: 'R Solicitud de préstamo.',
      qualification: '0',
      enrollmentDate: '27/12/2022',
      validity: 'Indefinida',
      versionControl: 'Control de versiones',
      status: 'Pendiente',
      disable: 'string'
    }
  ]

  public documents: IDoc[] = [
    {
      document: 'Contrato individual de trabajo por tiempo indeterminado',
      qualification: '0',
      enrollmentDate: '27/12/2022',
      validity: 'Indefinida',
      versionControl: 'Control de versiones',
      status: 'Pendiente',
      disable: 'string'
    },
    {
      document: 'Carta de adhesión al protocolo para la atención en casos de violencia.',
      qualification: '0',
      enrollmentDate: '27/12/2022',
      validity: 'Indefinida',
      versionControl: 'Control de versiones',
      status: 'Pendiente',
      disable: 'string'
    },
    {
      document: 'Carta de adhesión al protocolo para la prevención y atención del acoso sexual.',
      qualification: '0',
      enrollmentDate: '27/12/2022',
      validity: 'Indefinida',
      versionControl: 'Control de versiones',
      status: 'Pendiente',
      disable: 'string'
    }
  ]

  ngOnInit(): void {
  }

}
