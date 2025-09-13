import { Routes } from '@angular/router';
import { SignIn } from './sign-in/sign-in';
import { Maintenance } from './maintenance/maintenance';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/sign-in',
  },
  {
    path: 'sign-in',
    component: SignIn,
  },
  {
    path: 'school',
    pathMatch: 'full',
    redirectTo: 'school/dashboard',
  },
  {
    path: 'school',
    loadChildren: () => import('./main/main-module').then((m) => m.MainModule),
  },
  {
    path: 'under-maintenance',
    component: Maintenance,
  },
];
