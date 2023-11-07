import { TestBed } from '@angular/core/testing';

import { ScostosService } from './scostos.service';

describe('ScostosService', () => {
  let service: ScostosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScostosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
