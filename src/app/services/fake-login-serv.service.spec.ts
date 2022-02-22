import { TestBed } from '@angular/core/testing';

import { FakeLoginServService } from './fake-login-serv.service';

describe('FakeLoginServService', () => {
  let service: FakeLoginServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeLoginServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
