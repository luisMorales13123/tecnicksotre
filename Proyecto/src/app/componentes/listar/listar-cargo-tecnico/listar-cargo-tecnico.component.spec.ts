import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCargoTecnicoComponent } from './listar-cargo-tecnico.component';

describe('ListarCargoTecnicoComponent', () => {
  let component: ListarCargoTecnicoComponent;
  let fixture: ComponentFixture<ListarCargoTecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarCargoTecnicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarCargoTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
