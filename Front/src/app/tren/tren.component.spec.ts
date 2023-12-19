import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrenComponent } from './tren.component';

describe('TrenComponent', () => {
  let component: TrenComponent;
  let fixture: ComponentFixture<TrenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrenComponent]
    });
    fixture = TestBed.createComponent(TrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
