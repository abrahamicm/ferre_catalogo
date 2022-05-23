import { TestBed } from '@angular/core/testing';

import { SedesApiService } from './sedes-api.service';

describe('SedesApiService', () => {
  let service: SedesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SedesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
