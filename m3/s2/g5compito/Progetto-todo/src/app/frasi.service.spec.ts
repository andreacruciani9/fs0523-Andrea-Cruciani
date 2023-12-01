import { TestBed } from '@angular/core/testing';

import { FrasiService } from './frasi.service';

describe('FrasiService', () => {
  let service: FrasiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrasiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
