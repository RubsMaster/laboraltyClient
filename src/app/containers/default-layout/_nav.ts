import { INavData } from '@coreui/angular';

export const navAdmin: INavData[] = [
  {
    name: 'Dashboard',
    url: '/adminDashboard',
    iconComponent: { name: 'cil-home'}
  },
  {
    name: 'Usuarios',
    url: '/users',
    iconComponent: { name: 'cil-people' }
  },{
    name: 'Documentos Laborales',
    url:'/laborDocuments',
    iconComponent: { name: 'cil-file' }
  }
];

export const navAccountant: INavData[] = [
  {
    name: 'Configuraciones',
    url: '/settings',
    iconComponent: { name: 'cil-settings'}
  },
  // {
  //   name: 'Expediente laboral',
  //   url: '/labor-file-sections',
  //   iconComponent: { name: 'cil-Paperclip' }
  // },
  {
    name: 'Bitácoras de servicio',
    url: '/service-log',
    iconComponent: { name: 'cil-notes'}
  },
  {
    name: 'Consultores',
    url: '/consultants',
    iconComponent: { name: 'cil-people'}
  },
  {
    name: 'Clientes',
    url: '/clients',
    iconComponent: { name: 'cil-user'}
  },
];

export const navClient: INavData[] = [
  {
    name: 'Dashboard',
    url: '/clients',
    iconComponent: { name: 'cil-user'}
  },
  {
    name: 'este es un test mdf',
    url: '/consultants',
    iconComponent: { name: 'cil-people'}
  },
];

export const navConsultant: INavData[] = [
  {
    name: 'Consultores',
    url: '/consultants',
    iconComponent: { name: 'cil-people'}
  },
  {
    name: 'Clientes',
    url: '/clients',
    iconComponent: { name: 'cil-user'}
  },
  {
    name: 'este es un test mdf',
    url: '/consultants',
    iconComponent: { name: 'cil-people'}
  },
];
