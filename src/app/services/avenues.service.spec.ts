import { TestBed } from '@angular/core/testing';

import { AvenuesService } from './avenues.service';

describe('AvenuesService', () => {
  let service: AvenuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvenuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
