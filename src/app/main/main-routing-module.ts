import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModule } from './main-module';
import { Main } from './main';

const routes: Routes = [
  {
    path: '',
    component: Main,
    children: [
      {
        path: '',
        loadChildren: () => import('./dashboard/dashboard-module').then((m) => m.DashboardModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
