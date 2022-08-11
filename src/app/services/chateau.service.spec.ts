import { TestBed } from '@angular/core/testing';

import { ChateauService } from './chateau.service';

describe('ChateauService', () => {
  let service: ChateauService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChateauService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
