import { TestBed } from '@angular/core/testing';

import { PaySalaryService } from './pay-salary.service';

describe('PaySalaryService', () => {
  let service: PaySalaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaySalaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
