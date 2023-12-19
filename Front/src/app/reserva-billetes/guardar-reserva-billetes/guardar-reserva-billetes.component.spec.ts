import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarReservaBilletesComponent } from './guardar-reserva-billetes.component';

describe('GuardarReservaBilletesComponent', () => {
  let component: GuardarReservaBilletesComponent;
  let fixture: ComponentFixture<GuardarReservaBilletesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardarReservaBilletesComponent]
    });
    fixture = TestBed.createComponent(GuardarReservaBilletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
