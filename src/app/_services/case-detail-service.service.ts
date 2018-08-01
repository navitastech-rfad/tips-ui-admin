import { Injectable } from '@angular/core';
import { Case } from '../_models/case.model';


@Injectable({
  providedIn: 'root'
})
export class CaseDetailServiceService {

  constructor() { }
  public case: Case;

}
