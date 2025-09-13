import { Component } from '@angular/core';
import { Admin } from './admin/admin';
import { Teacher } from './teacher/teacher';
import { Student } from './student/student';
import { Parent } from './parent/parent';

@Component({
  selector: 'app-dashboard',
  imports: [Admin, Teacher, Student, Parent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  userType: any = 'admin';
}
