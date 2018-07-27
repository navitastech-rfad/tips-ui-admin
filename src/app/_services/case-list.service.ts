import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Case } from '../_models/case.model';

@Injectable({
  providedIn: 'root'
})
export class CaseListService {
  API_URL  =  '../assets/data.json';
  constructor(
    private  httpClient:  HttpClient,
    // private authenticationService: AuthenticationService
  ) {
  }

  getCases() {
    return this.httpClient.get<Case[]>(this.API_URL);
  }

  getCasesById(id: number) {
    return this.httpClient.get<Case>(this.API_URL + '/' + id);
  }
}
