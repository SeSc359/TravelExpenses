import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficListComponent } from './traffic-list.component';

describe('TrafficListComponent', () => {
  let component: TrafficListComponent;
  let fixture: ComponentFixture<TrafficListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
