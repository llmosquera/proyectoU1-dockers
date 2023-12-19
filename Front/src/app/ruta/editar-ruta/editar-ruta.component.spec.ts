import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRutaComponent } from './editar-ruta.component';

describe('EditarRutaComponent', () => {
  let component: EditarRutaComponent;
  let fixture: ComponentFixture<EditarRutaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarRutaComponent]
    });
    fixture = TestBed.createComponent(EditarRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
