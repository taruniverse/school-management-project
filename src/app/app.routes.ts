import { Routes } from '@angular/router';
import { SignIn } from './sign-in/sign-in';

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
];
