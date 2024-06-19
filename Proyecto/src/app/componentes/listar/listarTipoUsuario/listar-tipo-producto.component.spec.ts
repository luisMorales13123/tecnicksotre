import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoProductoComponent } from './listar-tipo-producto.component';

describe('ListarTipoProductoComponent', () => {
  let component: ListarTipoProductoComponent;
  let fixture: ComponentFixture<ListarTipoProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarTipoProductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarTipoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
