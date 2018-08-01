import { Component, OnInit } from '@angular/core';
import { CaseListService } from '../_services/case-list.service';
import { CaseDetailServiceService } from '../_services/case-detail-service.service';
import { Case } from '../_models/case.model';
import { Router, NavigationExtras } from '@angular/router';


// import { MatTableDataSource } from '@angular/material';
// import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.css']
})
export class CaseListComponent implements OnInit {

  private cases: Array<Case> = [];
  case: Case;
  constructor(private caseListService: CaseListService,
    private router: Router,
    private caseDetailServiceService: CaseDetailServiceService) { }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  ngOnInit() {
    this.getCases();
  }

  public getCases() {
    this.caseListService.getCases().subscribe((data: Array<Case>) => {
      this.cases = data;
      console.log(data);
    });
  }

  goToCaseDetails(event: any, myCase: Case) {
    this.caseDetailServiceService.case = myCase;
    this.router.navigate(['/casedetails']);
  }

}




