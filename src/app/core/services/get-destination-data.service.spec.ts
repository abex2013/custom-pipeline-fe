import { TestBed } from '@angular/core/testing';

import { GetDestinationDataService } from './get-destination-data.service';

describe('GetDestinationDataService', () => {
  let service: GetDestinationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDestinationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
