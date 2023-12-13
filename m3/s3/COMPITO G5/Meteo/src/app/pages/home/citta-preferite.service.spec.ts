import { TestBed } from '@angular/core/testing';

import { CittaPreferiteService } from './citta-preferite.service';

describe('CittaPreferiteService', () => {
  let service: CittaPreferiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CittaPreferiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
