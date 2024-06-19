import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarServicioComponent } from './agregar-editar-servicio.component';

describe('AgregarEditarServicioComponent', () => {
  let component: AgregarEditarServicioComponent;
  let fixture: ComponentFixture<AgregarEditarServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarEditarServicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarEditarServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
