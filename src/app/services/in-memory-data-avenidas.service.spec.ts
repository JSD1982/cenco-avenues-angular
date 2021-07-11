import { TestBed } from '@angular/core/testing';

import { InMemoryDataAvenidasService } from './in-memory-data-avenidas.service';

describe('InMemoryDataAvenidasService', () => {
  let service: InMemoryDataAvenidasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryDataAvenidasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
