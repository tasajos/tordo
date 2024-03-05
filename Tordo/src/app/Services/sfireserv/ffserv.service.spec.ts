import { TestBed } from '@angular/core/testing';

import { FfservService } from './ffserv.service';

describe('FfservService', () => {
  let service: FfservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FfservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
