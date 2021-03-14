import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherBaseComponent } from './other-base.component';

describe('OtherBaseComponent', () => {
  let component: OtherBaseComponent;
  let fixture: ComponentFixture<OtherBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
