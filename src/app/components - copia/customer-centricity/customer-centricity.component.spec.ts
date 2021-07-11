import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCentricityComponent } from './customer-centricity.component';

describe('CustomerCentricityComponent', () => {
  let component: CustomerCentricityComponent;
  let fixture: ComponentFixture<CustomerCentricityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerCentricityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCentricityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
