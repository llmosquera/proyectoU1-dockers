import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarTrenComponent } from './guardar-tren.component';

describe('GuardarTrenComponent', () => {
  let component: GuardarTrenComponent;
  let fixture: ComponentFixture<GuardarTrenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardarTrenComponent]
    });
    fixture = TestBed.createComponent(GuardarTrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
