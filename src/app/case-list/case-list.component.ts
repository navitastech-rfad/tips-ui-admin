import { Component, OnInit } from '@angular/core';
import { CaseListService } from '../_services/case-list.service';
import { Case } from '../_models/case.model';
// import { MatTableDataSource } from '@angular/material';
 // import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.css']
})
export class CaseListComponent implements  OnInit  {

  private  cases:  Array<Case> = [];
  constructor(private caseListService:  CaseListService) { }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  ngOnInit() {
    this.getCases();
}

  public  getCases() {
    this.caseListService.getCases().subscribe((data:  Array<Case>) => {
        this.cases  =  data;
        console.log(data);
    });
}

}
