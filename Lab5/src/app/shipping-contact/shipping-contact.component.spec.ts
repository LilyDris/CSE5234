import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingContactComponent } from './shipping-contact.component';

describe('ShippingContactComponent', () => {
  let component: ShippingContactComponent;
  let fixture: ComponentFixture<ShippingContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
