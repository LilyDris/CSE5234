import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentContactComponent } from './payment-contact.component';

describe('PaymentContactComponent', () => {
  let component: PaymentContactComponent;
  let fixture: ComponentFixture<PaymentContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
