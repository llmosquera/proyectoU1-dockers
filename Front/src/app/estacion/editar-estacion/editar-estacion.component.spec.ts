import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEstacionComponent } from './editar-estacion.component';

describe('EditarEstacionComponent', () => {
  let component: EditarEstacionComponent;
  let fixture: ComponentFixture<EditarEstacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarEstacionComponent]
    });
    fixture = TestBed.createComponent(EditarEstacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
