import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarFacturaComponent } from './agregar-editar-factura.component';

describe('AgregarEditarFacturaComponent', () => {
  let component: AgregarEditarFacturaComponent;
  let fixture: ComponentFixture<AgregarEditarFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarEditarFacturaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarEditarFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

