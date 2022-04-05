import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAcademyComponent } from './add-academy.component';

describe('AddAcademyComponent', () => {
  let component: AddAcademyComponent;
  let fixture: ComponentFixture<AddAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAcademyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
