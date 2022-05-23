import { TestBed } from '@angular/core/testing';

import { IsedesAdapterService } from './isedes-adapter.service';

describe('IsedesAdapterService', () => {
  let service: IsedesAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsedesAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
