import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsContentComponent } from './patients-content.component';

describe('PatientsContentComponent', () => {
  let component: PatientsContentComponent;
  let fixture: ComponentFixture<PatientsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientsContentComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PatientsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
