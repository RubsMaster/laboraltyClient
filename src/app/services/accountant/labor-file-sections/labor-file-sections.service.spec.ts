import { TestBed } from '@angular/core/testing';

import { LaborFileSectionsService } from './labor-file-sections.service';

describe('LaborFileSectionsService', () => {
  let service: LaborFileSectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaborFileSectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
