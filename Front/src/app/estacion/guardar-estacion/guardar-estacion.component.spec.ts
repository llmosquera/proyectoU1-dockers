import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarEstacionComponent } from './guardar-estacion.component';

describe('GuardarEstacionComponent', () => {
  let component: GuardarEstacionComponent;
  let fixture: ComponentFixture<GuardarEstacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardarEstacionComponent]
    });
    fixture = TestBed.createComponent(GuardarEstacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
