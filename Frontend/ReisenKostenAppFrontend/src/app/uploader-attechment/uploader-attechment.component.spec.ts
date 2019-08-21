import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaderAttechmentComponent } from './uploader-attechment.component';

describe('UploaderAttechmentComponent', () => {
  let component: UploaderAttechmentComponent;
  let fixture: ComponentFixture<UploaderAttechmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploaderAttechmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaderAttechmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
