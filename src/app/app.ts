import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './common/sidebar/sidebar';
import { Header } from './common/header/header';

@Component({
  selector: 'app-root',
  imports: [Sidebar, Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('school-web-app');
}
