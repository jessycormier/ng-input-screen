import { TestBed } from '@angular/core/testing';

import { NgInputScreenService } from './ng-input-screen.service';

describe('NgInputScreenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgInputScreenService = TestBed.get(NgInputScreenService);
    expect(service).toBeTruthy();
  });
});
