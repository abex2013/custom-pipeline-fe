import { TestBed } from '@angular/core/testing';

import { ChangeStepsIndexService } from './change-steps-index.service';

describe('ChangeStepsIndexService', () => {
  let service: ChangeStepsIndexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeStepsIndexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
