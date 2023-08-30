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
    name: 'Empresas',
    url: '/companies',
    iconComponent: { name: 'cil-building'},
  },
  {
    name: 'Sucursales',
    url: '/branches',
    iconComponent: { name: 'cil-location-pin'},
  },
  {
    name: 'Perfiles de Puesto',
    url: '/jobProfile',
    iconComponent: { name: 'cil-user'},
  },
  {
    name: 'Jornadas Laborales',
    url: '/laborJourneys',
    iconComponent: { name: 'cil-clock'},
  },
  {
    name: 'Empleados',
    url: '/employees',
    iconComponent: { name: 'cil-people'},
  },
  {
    name: 'Sanciones y Despidos',
    url: '/sanctionsDismissals',
    iconComponent: { name: 'cil-clock'},
  },
  {
    name: 'Demandas Laborales',
    url: '/lawsuit',
    iconComponent: { name: 'cil-clock'},
  }
];

export const navConsultant: INavData[] = [
  {
    name: 'Dashboard',
    url: '/consultantDashboard',
    iconComponent: { name: 'cil-people'}
  },
];
