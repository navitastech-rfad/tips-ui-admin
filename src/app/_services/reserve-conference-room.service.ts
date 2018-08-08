import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AuthenticationService } from './authentication.service';
import { Reservation } from '../_models/reservation';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

const API_URL = environment.userApiUrl;


@Injectable()
export class ReserveConferenceRoomService {

  constructor(private http: Http,
    private authenticationService: AuthenticationService) { }


  createConference(reservation: Reservation) {
    const headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    const options = new RequestOptions({ headers: headers });
    const url = API_URL + 'api/data/reservations/';
    console.log('Creating Conference:--' + JSON.stringify(reservation));
    return this.http.post(url, reservation, options).subscribe(
      res => console.log('POST call in error', res.json()),
      (val) => {
        console.log('POST Reservation call successful value returned in body',
          val);
      },
      () => {
        console.log('The POST Reservation observable is now completed.');
      });
    //  .map(this.extractData)
    //  .catch(this.handleErrorObservable);
  }

  extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

}
