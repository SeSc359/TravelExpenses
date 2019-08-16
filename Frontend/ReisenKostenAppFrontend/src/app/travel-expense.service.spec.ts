import { TestBed } from '@angular/core/testing';

import { TravelExpenseService } from './travel-expense.service';

describe('TravelExpenseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TravelExpenseService = TestBed.get(TravelExpenseService);
    expect(service).toBeTruthy();
  });
});
