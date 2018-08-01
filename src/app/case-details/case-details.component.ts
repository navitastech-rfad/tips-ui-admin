import { Component, OnInit } from '@angular/core';
import { CaseDetailServiceService } from '../_services/case-detail-service.service';
import { Case } from '../_models/case.model';


@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.css']
})
export class CaseDetailsComponent implements OnInit {
  case: Case;
  constructor(private caseDetailServiceService: CaseDetailServiceService) { }

  ngOnInit() {
    this.case = this.caseDetailServiceService.case;
  }

}
