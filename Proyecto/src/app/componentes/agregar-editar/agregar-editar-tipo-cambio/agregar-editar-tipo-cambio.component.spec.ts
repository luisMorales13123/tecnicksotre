import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarTipoCambioComponent } from './agregar-editar-tipo-cambio.component';

describe('AgregarEditarTipoCambioComponent', () => {
  let component: AgregarEditarTipoCambioComponent;
  let fixture: ComponentFixture<AgregarEditarTipoCambioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarEditarTipoCambioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarEditarTipoCambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
