import { TestBed } from '@angular/core/testing';

import { IcategoriasAdaprterService } from './icategorias-adaprter.service';

describe('IcategoriasAdaprterService', () => {
  let service: IcategoriasAdaprterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IcategoriasAdaprterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
