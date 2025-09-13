import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Main } from './main';
import { Students } from './lists/students/students';
import { AddStudent } from '../student/add-student/add-student';
import { Promotion } from '../student/promotion/promotion';
import { Parents } from './lists/parents/parents';

const routes: Routes = [
  {
    path: '',
    component: Main,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard-module').then((m) => m.DashboardModule),
      },
      {
        path: 'all-students',
        component: Students,
      },
      {
        path: 'add-student',
        component: AddStudent,
      },
      {
        path: 'promotion-students',
        component: Promotion,
      },
      {
        path: 'all-parents',
        component: Parents,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
