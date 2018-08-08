import { TestBed, inject } from '@angular/core/testing';

import { FraudReportDetailService } from './fraud-report-detail.service';

describe('FraudReportDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FraudReportDetailService]
    });
  });

  it('should be created', inject([FraudReportDetailService], (service: FraudReportDetailService) => {
    expect(service).toBeTruthy();
  }));
});
