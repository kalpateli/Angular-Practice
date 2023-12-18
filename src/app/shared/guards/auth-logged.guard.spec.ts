import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authLogged } from './auth-logged.guard';

describe('authLogged', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authLogged(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
