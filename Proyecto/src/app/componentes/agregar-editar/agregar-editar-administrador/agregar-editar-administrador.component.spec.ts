import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarAdministradorComponent } from './agregar-editar-administrador.component';

describe('AgregarEditarAdministradorComponent', () => {
  let component: AgregarEditarAdministradorComponent;
  let fixture: ComponentFixture<AgregarEditarAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarEditarAdministradorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarEditarAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
