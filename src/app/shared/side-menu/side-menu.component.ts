import { Component } from '@angular/core';

import { routes } from '../../app.routes';
import { Route, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  menuItems: Route[] = routes.map(route => route.children ?? []).flat().filter(route => route && route.path).filter(route => !route.path?.includes(':'));

  constructor() { }
}
