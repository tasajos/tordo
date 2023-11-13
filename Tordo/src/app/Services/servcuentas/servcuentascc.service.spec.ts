import { TestBed } from '@angular/core/testing';

import { ServcuentasccService } from './servcuentascc.service';

describe('ServcuentasccService', () => {
  let service: ServcuentasccService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServcuentasccService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
