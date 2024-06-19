import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarDocumentoComponent } from './agregar-editar-documento.component';

describe('AgregarEditarDocumentoComponent', () => {
  let component: AgregarEditarDocumentoComponent;
  let fixture: ComponentFixture<AgregarEditarDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarEditarDocumentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarEditarDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
