import { TestBed } from '@angular/core/testing';

import { DocuemntoService } from './TipoDocumento.service';

describe('ProductoService', () => {
  let service: DocuemntoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocuemntoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
