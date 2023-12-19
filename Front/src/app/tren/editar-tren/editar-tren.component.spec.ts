import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTrenComponent } from './editar-tren.component';

describe('EditarTrenComponent', () => {
  let component: EditarTrenComponent;
  let fixture: ComponentFixture<EditarTrenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarTrenComponent]
    });
    fixture = TestBed.createComponent(EditarTrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
