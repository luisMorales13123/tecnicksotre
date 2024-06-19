import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarTipoUsuarioComponent } from './agregar-editar-tipo-usuario.component';

describe('AgregarEditarTipoUsuarioComponent', () => {
  let component: AgregarEditarTipoUsuarioComponent;
  let fixture: ComponentFixture<AgregarEditarTipoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarEditarTipoUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarEditarTipoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
