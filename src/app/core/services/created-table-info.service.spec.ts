import { TestBed } from '@angular/core/testing';

import { CreatedTableInfoService } from './created-table-info.service';

describe('CreatedTableInfoService', () => {
  let service: CreatedTableInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatedTableInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
