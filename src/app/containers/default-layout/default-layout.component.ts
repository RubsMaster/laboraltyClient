import { Component } from '@angular/core';

import { navItems } from './_nav';
import { navAccountant } from './_AccountantNav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {

  public navItems = navAccountant;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor() {}
}
