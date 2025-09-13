import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamAttendance } from './exam-attendance';

describe('ExamAttendance', () => {
  let component: ExamAttendance;
  let fixture: ComponentFixture<ExamAttendance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamAttendance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamAttendance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
