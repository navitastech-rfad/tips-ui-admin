import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AuthenticationService } from '../_services/authentication.service';
import { User } from '../_models/index';

const userApiUrl = environment.userApiUrl;

@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }

    getCases(): Observable<User[]> {
        // add authorization header with jwt token
        const headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        const options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('../assets/data.json', options)
            .map((response: Response) => response.json()._embedded.persons);
    }
    createUser(newUser: any): Observable<User> {
        return this.http.post(userApiUrl + 'api/persons/sign-up', newUser)
            .map((response: Response) => response.json());
    }
}
