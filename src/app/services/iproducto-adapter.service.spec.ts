import { TestBed } from '@angular/core/testing';

import { IproductoAdapterService } from './iproducto-adapter.service';

describe('IproductoAdapterService', () => {
  let service: IproductoAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IproductoAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
