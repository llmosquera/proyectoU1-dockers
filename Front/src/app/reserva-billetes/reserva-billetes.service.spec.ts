import { TestBed } from '@angular/core/testing';

import { ReservaBilletesService } from './reserva-billetes.service';

describe('ReservaBilletesService', () => {
  let service: ReservaBilletesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservaBilletesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
