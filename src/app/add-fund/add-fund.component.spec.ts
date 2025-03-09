import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFundComponent } from './add-fund.component';

describe('AddFundComponent', () => {
  let component: AddFundComponent;
  let fixture: ComponentFixture<AddFundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddFundComponent]
    });
    fixture = TestBed.createComponent(AddFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
