import { Component } from '@angular/core';
import { Breadcrumb } from '../../../common/breadcrumb/breadcrumb';
import { DashboardRoutingModule } from '../../dashboard/dashboard-routing-module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-students',
  imports: [Breadcrumb, DashboardRoutingModule, RouterModule],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {}
