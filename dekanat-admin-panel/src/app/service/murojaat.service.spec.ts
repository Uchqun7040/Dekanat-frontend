import { TestBed } from '@angular/core/testing';

import { MurojaatService } from './murojaat.service';

describe('MurojaatService', () => {
  let service: MurojaatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MurojaatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
