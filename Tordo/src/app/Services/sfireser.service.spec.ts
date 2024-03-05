import { TestBed } from '@angular/core/testing';

import { SfireserService } from './sfireser.service';

describe('SfireserService', () => {
  let service: SfireserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SfireserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
