import { TestBed, inject } from '@angular/core/testing';

import { CaseDetailServiceService } from './case-detail-service.service';

describe('CaseDetailServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaseDetailServiceService]
    });
  });

  it('should be created', inject([CaseDetailServiceService], (service: CaseDetailServiceService) => {
    expect(service).toBeTruthy();
  }));
});
