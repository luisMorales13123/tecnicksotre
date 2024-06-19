import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarEquipoComponent } from './agregar-editar-equipo.component';

describe('AgregarEditarEquipoComponent', () => {
  let component: AgregarEditarEquipoComponent;
  let fixture: ComponentFixture<AgregarEditarEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarEditarEquipoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarEditarEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
