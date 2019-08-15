import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastTravelExpenseListComponent } from './past-travelexpenses.component';

describe('TrafficListComponent', () => {
  let component: PastTravelExpenseListComponent;
  let fixture: ComponentFixture<PastTravelExpenseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastTravelExpenseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastTravelExpenseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
