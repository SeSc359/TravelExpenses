import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastTravelExpensesComponent } from './past-travelexpenses.component';

describe('TrafficListComponent', () => {
  let component: PastTravelExpensesComponent;
  let fixture: ComponentFixture<PastTravelExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastTravelExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastTravelExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
