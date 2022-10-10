import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductContactComponent } from './product-contact.component';

describe('ProductContactComponent', () => {
  let component: ProductContactComponent;
  let fixture: ComponentFixture<ProductContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
