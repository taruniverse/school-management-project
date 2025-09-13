import { Component, inject, OnInit } from '@angular/core';
import { DashboardRoutingModule } from '../../main/dashboard/dashboard-routing-module';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  imports: [DashboardRoutingModule, RouterModule, CommonModule],
})
export class Sidebar implements OnInit {
  router = inject(Router);
  currentPath: any;

  constructor() {
    this.currentPath = this.router.url.toString().split('/')[2];
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        map((event: NavigationEnd) => event.url)
      )
      .subscribe((url: string) => {
        this.currentPath = url.toString().split('/')[2];
      });
  }

  checkClass(event: any) {
    const checkAllSubdrop = document.querySelectorAll('.subdrop');
    if (checkAllSubdrop.length == 1) {
      checkAllSubdrop[0].classList.remove('subdrop');
      checkAllSubdrop[0].classList.remove('active');
    }
    if (!event.target.classList.value) {
      event.target.classList.add('subdrop');
      event.target.classList.add('active');
    }
  }
}
