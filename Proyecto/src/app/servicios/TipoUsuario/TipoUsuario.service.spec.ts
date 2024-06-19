import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tipousuarioService } from './TipoUsuario.service';


describe('tipousuarioService', () => {
  let service: tipousuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(tipousuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
