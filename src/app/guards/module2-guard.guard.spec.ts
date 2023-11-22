import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { module2GuardGuard } from './module2-guard.guard';

describe('module2GuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => module2GuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
