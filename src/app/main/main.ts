import { Component } from '@angular/core';
import { Header } from '../common/header/header';
import { Sidebar } from '../common/sidebar/sidebar';
import { RouterModule } from '@angular/router';
import { Spinner } from '../common/spinner/spinner';

@Component({
  selector: 'app-main',
  imports: [Spinner, Header, Sidebar, RouterModule],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {}
