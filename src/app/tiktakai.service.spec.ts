import { TestBed } from '@angular/core/testing';

import { TiktakaiService } from './tiktakai.service';

describe('TiktakaiService', () => {
  let service: TiktakaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiktakaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
