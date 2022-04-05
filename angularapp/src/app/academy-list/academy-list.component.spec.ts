import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyListComponent } from './academy-list.component';

describe('AcademyListComponent', () => {
  let component: AcademyListComponent;
  let fixture: ComponentFixture<AcademyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
