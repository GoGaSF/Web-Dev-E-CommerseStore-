import { TestBed } from '@angular/core/testing';

import { MenProductServiceService } from './men-product-service.service';

describe('MenProductServiceService', () => {
  let service: MenProductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenProductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
