import { Component } from '@angular/core';
import { Header } from '../common/header/header';
import { Sidebar } from '../common/sidebar/sidebar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [Header, Sidebar, RouterModule],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {}
