import { INavData } from '@coreui/angular';

export const navAccountant: INavData[] = [
  {
    name: 'Configuraciones',
    url: '/settings',
    iconComponent: { name: 'cil-settings'}
  },
  {
    name: 'Expediente laboral',
    url: '/users',
    iconComponent: { name: 'cil-file' }
  },
  {
    name: 'Bitácoras de servicio',
    url: '/laborDocuments',
    iconComponent: { name: 'cil-notes'}
  },
  {
    name: 'Consultores',
    url: '/laborDocuments',
    iconComponent: { name: 'cil-people'}
  },
  {
    name: 'Clientes',
    url: '/laborDocuments',
    iconComponent: { name: 'cil-user'}
  }
];
