import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/adminDashboard',
    iconComponent: { name: 'cil-home'}
  },
  {
    name: 'Usuarios',
    url: '/users',
    iconComponent: { name: 'cil-people' }
  },
  {
    name: 'Documentos Laborales',
    url: '/laborDocuments',
    iconComponent: { name: 'cilAlignCenter'}
  },  
  {
    name: 'Administradores',
    url: '/adminForm',
    iconComponent: { name: 'cil-Settings'},
    class: 'last-nav-item'
  }   
];
