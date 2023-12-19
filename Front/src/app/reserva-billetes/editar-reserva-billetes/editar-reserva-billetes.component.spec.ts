import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarReservaBilletesComponent } from './editar-reserva-billetes.component';

describe('EditarReservaBilletesComponent', () => {
  let component: EditarReservaBilletesComponent;
  let fixture: ComponentFixture<EditarReservaBilletesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarReservaBilletesComponent]
    });
    fixture = TestBed.createComponent(EditarReservaBilletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
