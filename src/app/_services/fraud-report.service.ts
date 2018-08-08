import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Report } from '../_models/report.model';
import { HttpClient} from '@angular/common/http';

const userApiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class FraudReportService {

  constructor( private  httpClient:  HttpClient) { }

  getReports() {
    return this.httpClient.get<Report[]>(userApiUrl);
  }

}
