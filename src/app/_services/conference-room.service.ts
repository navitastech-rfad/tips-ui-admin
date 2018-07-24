import { environment } from '../environments/environment';
import { Reservation } from '../_models/reservation';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuthenticationService } from '../_services/authentication.service';

const API_URL = environment.apiUrl;

@Injectable()
export class ConferenceRoomService {

  constructor(private http: Http,
    private authenticationService: AuthenticationService) { }

  getConferenceRooms(): Observable<any> {
    const headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    const options = new RequestOptions({ headers: headers });
    const url = API_URL + 'api/data/conferenceRooms?sort=id';
    return this.http.get(url, options)
      .map((response: Response) => response.json());
  }

  getConferenceRoomsbyid(id: number): Observable<any> {
    const headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    const options = new RequestOptions({ headers: headers });
    const url = API_URL + 'api/data/conferenceRooms/' + id;
    return this.http.get(url, options)
      .map((response: Response) => response.json());
  }

  getConferenceRoomsbyAvailability(): Observable<any> {
    const headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    const options = new RequestOptions({ headers: headers });
    const url = API_URL + 'api/data/conferenceRooms/search/findAllByAvailabilityTrue';
    return this.http.get(url, options)
      .map((response: Response) => response.json());
  }
  public getAllReservations(id: number): Observable<any> {
    const url = API_URL + 'api/data/conferenceRooms/' + id + '/reservations';
    return this.http.get(url)
      .map((response: Response) => response.json()._embedded.reservations);
    // will use this.http.get()
  }

  public getAllReservationsByDateRange(roomId: any, startTime: any, stopTime: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('roomId', roomId);
    params = params.append('startTime', startTime);
    params = params.append('stopTime', stopTime);

    const url = API_URL + 'api/data/reservations/search/reservationsByRoomAndDateRange?' + params;
    return this.http.get(url)
      .map((response: Response) => response.json()._embedded.reservations);
    // will use this.http.get()
  }
}
