import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarHorarioComponent } from './guardar-horario.component';

describe('GuardarHorarioComponent', () => {
  let component: GuardarHorarioComponent;
  let fixture: ComponentFixture<GuardarHorarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardarHorarioComponent]
    });
    fixture = TestBed.createComponent(GuardarHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
