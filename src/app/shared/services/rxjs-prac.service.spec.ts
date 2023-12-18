import { TestBed } from '@angular/core/testing';

import { RxjsPracService } from './rxjs-prac.service';

describe('RxjsPracService', () => {
  let service: RxjsPracService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxjsPracService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
