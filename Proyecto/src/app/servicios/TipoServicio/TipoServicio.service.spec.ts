import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tipoServicioService } from './TipoServicio.service';


describe('tipousuarioService', () => {
  let service: tipoServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(tipoServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
