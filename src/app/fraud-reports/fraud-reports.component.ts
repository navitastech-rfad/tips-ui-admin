import { Component, OnInit } from '@angular/core';
import { FraudReportService } from '../_services/fraud-report.service';
import { Router } from '@angular/router';
import { Report } from '../_models/report.model';
import { FraudReportDetailService } from '../_services/fraud-report-detail.service';

@Component({
  selector: 'app-fraud-reports',
  templateUrl: './fraud-reports.component.html',
  styleUrls: ['./fraud-reports.component.css']
})
export class FraudReportsComponent implements OnInit {

  private reports: Array<Report> = [];
  report: Report;
  constructor(private fraudReportService: FraudReportService,
    private router: Router,
    private fraudReportDetailServiceService: FraudReportDetailService) { }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  ngOnInit() {
    this.getReports();
  }

  public getReports() {
    this.fraudReportService.getReports().subscribe((data: Array<Report>) => {
      this.reports = data;
      console.log(this.reports);
    });
  }

  goToCaseDetails(event: any, myReport: Report) {
    // this.fraudReportDetailServiceService.report = myReport;
    this.router.navigate(['/casedetails']);
  }

}
