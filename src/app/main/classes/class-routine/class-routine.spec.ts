import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassRoutine } from './class-routine';

describe('ClassRoutine', () => {
  let component: ClassRoutine;
  let fixture: ComponentFixture<ClassRoutine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassRoutine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassRoutine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
