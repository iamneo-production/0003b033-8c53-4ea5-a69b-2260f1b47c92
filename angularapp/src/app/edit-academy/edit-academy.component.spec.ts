import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAcademyComponent } from './edit-academy.component';

describe('EditAcademyComponent', () => {
  let component: EditAcademyComponent;
  let fixture: ComponentFixture<EditAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAcademyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
