import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAcademyComponent } from './user-academy.component';

describe('UserAcademyComponent', () => {
  let component: UserAcademyComponent;
  let fixture: ComponentFixture<UserAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAcademyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
