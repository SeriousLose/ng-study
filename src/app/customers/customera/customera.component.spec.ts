import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeraComponent } from './customera.component';

describe('CustomeraComponent', () => {
  let component: CustomeraComponent;
  let fixture: ComponentFixture<CustomeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
