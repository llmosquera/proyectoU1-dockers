import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaBilletesComponent } from './reserva-billetes.component';

describe('ReservaBilletesComponent', () => {
  let component: ReservaBilletesComponent;
  let fixture: ComponentFixture<ReservaBilletesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservaBilletesComponent]
    });
    fixture = TestBed.createComponent(ReservaBilletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
