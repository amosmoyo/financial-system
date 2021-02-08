import { TestBed } from '@angular/core/testing';

import { SecMainService } from './sec-main.service';

describe('SecMainService', () => {
  let service: SecMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
