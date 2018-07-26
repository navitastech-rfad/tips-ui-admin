import { Component, OnInit } from '@angular/core';
// import { MatTableDataSource } from '@angular/material';
 // import { DataSource } from '@angular/cdk/table';

export interface CaseList {
  caseId: number;
  firstName: string;
  lastName: string;
  address: string;
  assigneeId: number;
  closedStatus: boolean;
}

const CASE_DATA: CaseList[] = [
  {
    caseId: 10001,
    firstName: 'Michael',
    lastName: 'Jordan',
    address: '101 Devon Street, Chicago IL 12334',
    assigneeId: 101,
    closedStatus: true
  },
  {
    caseId: 10002,
    firstName: 'LeBron',
    lastName: ' James',
    address: '101 Devon Street, Chicago IL 12334',
    assigneeId: 101,
    closedStatus: true
  },
  {
    caseId: 10003,
    firstName: 'Kevin',
    lastName: '  Durant',
    address: '101 Devon Street, Chicago IL 12334',
    assigneeId: 102,
    closedStatus: true
  },
  {
    caseId: 10004,
    firstName: 'Stephen',
    lastName: '  Curry',
    address: '101 Devon Street, Chicago IL 12334',
    assigneeId: 102,
    closedStatus: true
  },
  {
    caseId: 10005,
    firstName: 'Kobe',
    lastName: '  Bryant',
    address: '101 Devon Street, Chicago IL 12334',
    assigneeId: 102,
    closedStatus: true
  },
  {
    caseId: 10006,
    firstName: 'Chris',
    lastName: '  Paul',
    address: '101 Devon Street, Chicago IL 12334',
    assigneeId: 103,
    closedStatus: true
  },
  {
    caseId: 10007,
    firstName: 'Larry',
    lastName: '  Bird',
    address: '101 Devon Street, Chicago IL 12334',
    assigneeId: 103,
    closedStatus: true
  }
];


@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.css']
})
export class CaseListComponent  {

  constructor() { }

  displayedColumns: string[] = [ 'caseId', 'firstName', 'lastName', 'address', 'assigneeId'];
  dataSource = CASE_DATA;

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

}
