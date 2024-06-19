import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoServicioComponent } from './listar-tipo-servicio.component';

describe('ListarTipoServicioComponent', () => {
  let component: ListarTipoServicioComponent;
  let fixture: ComponentFixture<ListarTipoServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarTipoServicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarTipoServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
