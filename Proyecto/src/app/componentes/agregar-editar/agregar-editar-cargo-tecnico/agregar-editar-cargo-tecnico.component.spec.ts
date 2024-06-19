import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarCargoTecnicoComponent } from './agregar-editar-cargo-tecnico.component';

describe('AgregarEditarCargoTecnicoComponent', () => {
  let component: AgregarEditarCargoTecnicoComponent;
  let fixture: ComponentFixture<AgregarEditarCargoTecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarEditarCargoTecnicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarEditarCargoTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
