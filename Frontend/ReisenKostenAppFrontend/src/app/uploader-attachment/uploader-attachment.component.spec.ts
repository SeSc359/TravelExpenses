import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaderAttachmentComponent } from './uploader-attachment.component';

describe('UploaderAttechmentComponent', () => {
  let component: UploaderAttachmentComponent;
  let fixture: ComponentFixture<UploaderAttachmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploaderAttachmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaderAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
