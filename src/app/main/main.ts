import { Component } from '@angular/core';
import { Header } from '../common/header/header';
import { Sidebar } from '../common/sidebar/sidebar';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [Header, Sidebar, CommonModule, RouterModule],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {}
