import { ComponentFixture, TestBed } from '@angular/core/testing';

import { facturaService } from './factura.service';


describe('facturaService', () => {
  let service: facturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(facturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
