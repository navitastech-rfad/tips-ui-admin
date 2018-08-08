import { TestBed, inject } from '@angular/core/testing';

import { FraudReportService } from './fraud-report.service';

describe('FraudReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FraudReportService]
    });
  });

  it('should be created', inject([FraudReportService], (service: FraudReportService) => {
    expect(service).toBeTruthy();
  }));
});
