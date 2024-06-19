import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaUsuariComponent } from './vista-usuari.component';

describe('VistaUsuariComponent', () => {
  let component: VistaUsuariComponent;
  let fixture: ComponentFixture<VistaUsuariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VistaUsuariComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaUsuariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
