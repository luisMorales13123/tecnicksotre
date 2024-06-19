import { ComponentFixture, TestBed } from '@angular/core/testing';

import { personaService } from './Persona.service';


describe('personaService', () => {
  let service: personaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(personaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
