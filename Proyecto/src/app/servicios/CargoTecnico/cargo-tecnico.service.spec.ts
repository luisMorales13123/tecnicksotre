import { TestBed } from '@angular/core/testing';

import { CargoTecnicoService } from './cargo-tecnico.service';

describe('CargoTecnicoService', () => {
  let service: CargoTecnicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargoTecnicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
