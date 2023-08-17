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
    url: '/clients',
    iconComponent: { name: 'cil-building'},
  },
  {
    name: 'Sucursales',
    url: '/consultants',
    iconComponent: { name: 'cil-location-pin'},
  },
  {
    name: 'Perfiles de Puesto',
    url: '/consultants',
    iconComponent: { name: 'cil-user'},
  },
  {
    name: 'Jornadas Laborales',
    url: '/consultants',
    iconComponent: { name: 'cil-clock'},
  },
  {
    name: 'Empleados',
    url: '/consultants',
    iconComponent: { name: 'cil-people'},
  },
  {
    name: 'Sanciones y Despidos',
    url: '/consultants',
    iconComponent: { name: 'cil-ban'},
  },
  {
    name: 'Demandas Laborales',
    url: '/consultants',
    iconComponent: { name: 'cil-gavel'},
  }
];

export const navConsultant: INavData[] = [
  {
    name: 'Dashboard',
    url: '/consultantDashboard',
    iconComponent: { name: 'cil-people'}
  },
];
