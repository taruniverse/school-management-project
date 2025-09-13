import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassRoom } from './class-room';

describe('ClassRoom', () => {
  let component: ClassRoom;
  let fixture: ComponentFixture<ClassRoom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassRoom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassRoom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
