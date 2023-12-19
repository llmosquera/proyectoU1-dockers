import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarRutaComponent } from './guardar-ruta.component';

describe('GuardarRutaComponent', () => {
  let component: GuardarRutaComponent;
  let fixture: ComponentFixture<GuardarRutaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardarRutaComponent]
    });
    fixture = TestBed.createComponent(GuardarRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
