import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarTiposervicioComponent } from './agregar-editar-tiposervicio.component';

describe('AgregarEditarTiposervicioComponent', () => {
  let component: AgregarEditarTiposervicioComponent;
  let fixture: ComponentFixture<AgregarEditarTiposervicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarEditarTiposervicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarEditarTiposervicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
