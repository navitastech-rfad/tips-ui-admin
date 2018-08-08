import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


const userApiUrl = environment.KEYCLOAK_URL;

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private http: Http) {
        // set token if saved in local storage
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<any> {
        return this.http.post(userApiUrl + 'login', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                const token = response.json() && response.json().token;
                const role = response.json().role;
                const lastName = response.json().lastName;
                const firstName = response.json().firstName;
                const email = response.json().email;
                const userId = response.json().userId;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser',
                        JSON.stringify({ userId: userId ,
                            token: token,
                            firstName: firstName,
                            lastName: lastName,
                            email: email,
                            role: role }));

                    // return true to indicate successful login
                    return response.json();
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}
