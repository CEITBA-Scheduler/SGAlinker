import { TestBed } from '@angular/core/testing';

import { LinkerService } from './linker.service';

describe('LinkerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinkerService = TestBed.get(LinkerService);
    expect(service).toBeTruthy();
  });
});
