import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTrafficExpenseComponent } from './create-traffic-expense.component';

describe('CreateTrafficExpenseComponent', () => {
  let component: CreateTrafficExpenseComponent;
  let fixture: ComponentFixture<CreateTrafficExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTrafficExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTrafficExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
