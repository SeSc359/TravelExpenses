import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTravelExpenseComponent } from './create-travelexpense.component';

describe('CreateTrafficExpenseComponent', () => {
  let component: CreateTravelExpenseComponent;
  let fixture: ComponentFixture<CreateTravelExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTravelExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTravelExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
