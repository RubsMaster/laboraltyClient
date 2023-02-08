import { TestBed } from '@angular/core/testing';

import { LaborDocumentsService } from './labor-documents.service';

describe('LaborDocumentsService', () => {
  let service: LaborDocumentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaborDocumentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
