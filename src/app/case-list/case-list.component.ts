import { Component, OnInit } from '@angular/core';
import { CaseListService } from '../_services/case-list.service';
import { Case } from '../_models/case.model';
<<<<<<< HEAD
=======
import { CASES } from './mock-cases';
>>>>>>> master
// import { MatTableDataSource } from '@angular/material';
 // import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.css']
})
export class CaseListComponent implements  OnInit  {
<<<<<<< HEAD

  private  cases:  Array<Case> = [];
=======
  cases: Case[];  //<-Use the mock json data @Tim
  
  //private  cases:  Array<Case> = [];
>>>>>>> master
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
<<<<<<< HEAD
}

=======
>>>>>>> master
}

}