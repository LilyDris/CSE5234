import { TestBed } from '@angular/core/testing';

import { ProductCrudService } from './product-crud.service';

describe('ProductCrudService', () => {
  let service: ProductCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
