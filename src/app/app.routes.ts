import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component'),
      },
      {
        path: 'control-flow',
        title: 'Control Flow',
        loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component'),
      },
      {
        path: 'defer-options',
        title: 'Defer Options',
        loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component'),
      },
      {
        path: 'defer-views',
        title: 'Defer Views',
        loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component'),
      },
      {
        path: 'user-list',
        title: 'User List',
        loadComponent: () => import('./dashboard/pages/users/users.component'),
      },
      {
        path: 'user/:id',
        title: 'User View',
        loadComponent: () => import('./dashboard/pages/user/user.component'),
      },
      {
        path: 'view-transition',
        title: 'View transition',
        loadComponent: () => import('./dashboard/pages/view-transition/view-transition.component'),
      },
      {
        path: 'view-transition-2',
        title: 'View transition 2',
        loadComponent: () => import('./dashboard/pages/view-transition-2/view-transition.component'),
      },
      {
        path: 'inputs-outputs',
        title: 'Inputs Outputs',
        loadComponent: () => import('./dashboard/pages/input-output/input-output.component'),
      },
      {
        path: 'material',
        title: 'Angular Material',
        loadComponent: () => import('./dashboard/pages/material/material.component'),
      },
      {
        path: '**',
        redirectTo: 'control-flow',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    // redirectTo: '/dashboard',
    redirectTo: (route) => {
      console.log('route', route);

      return '/dashboard/material';
    },
    pathMatch: 'full',
  },
];
