import { TestBed } from '@angular/core/testing';

import { TravelExpenseServiceService } from './travel-expense-service.service';

describe('TravelExpenseServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TravelExpenseServiceService = TestBed.get(TravelExpenseServiceService);
    expect(service).toBeTruthy();
  });
});
