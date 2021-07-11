import { TestBed } from '@angular/core/testing';

import { MockAvenidasService } from './mock-avenidas.service';

describe('MockAvenidasService', () => {
  let service: MockAvenidasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockAvenidasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
