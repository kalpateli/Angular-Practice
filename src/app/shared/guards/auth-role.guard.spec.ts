import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { authRoleGuard } from './auth-role.guard';

describe('authRoleGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authRoleGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
