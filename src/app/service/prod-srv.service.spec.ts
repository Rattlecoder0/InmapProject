import { TestBed } from '@angular/core/testing';

import { ProdSrvService } from './prod-srv.service';

describe('ProdSrvService', () => {
  let service: ProdSrvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdSrvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
