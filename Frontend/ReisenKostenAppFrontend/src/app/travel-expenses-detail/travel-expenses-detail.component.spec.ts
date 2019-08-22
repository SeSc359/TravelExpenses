import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelExpensesDetailComponent } from './travel-expenses-detail.component';

describe('TravelExpensesDetailComponent', () => {
  let component: TravelExpensesDetailComponent;
  let fixture: ComponentFixture<TravelExpensesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelExpensesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelExpensesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
