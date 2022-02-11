import { TestBed } from '@angular/core/testing';

import { GetSourceDataService } from './get-source-data.service';

describe('GetSourceDataService', () => {
  let service: GetSourceDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSourceDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
