import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryComponent } from './salary.component';

describe('SalaryComponent', () => {
  let component: SalaryComponent;
  let fixture: ComponentFixture<SalaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SalaryComponent]
    });
    fixture = TestBed.createComponent(SalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
