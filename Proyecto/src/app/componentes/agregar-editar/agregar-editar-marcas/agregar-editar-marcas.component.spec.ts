import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarMarcasComponent } from './agregar-editar-marcas.component';

describe('AgregarEditarMarcasComponent', () => {
  let component: AgregarEditarMarcasComponent;
  let fixture: ComponentFixture<AgregarEditarMarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarEditarMarcasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarEditarMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
