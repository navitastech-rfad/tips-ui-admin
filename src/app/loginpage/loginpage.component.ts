import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../_services';
import { AuthenticationService } from '../_services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  moduleId: module.id,
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  model: any = {};
  loading = false;
  error = '';

  constructor(private router: Router,
    private authenticationService: AuthenticationService, private alertService: AlertService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
   .pipe(first())
      .subscribe( result => {
        if (!result.role || 0 === result.role.length) {
          console.log('%%%%%%%%%%: ' + JSON.stringify(result));

          this.error = 'Username or password is incorrect';
          this.loading = false;
        } else {
          console.log('************: ' + JSON.stringify(result));
          this.router.navigate(['/caselist']);
        }

      },
        error => {
          this.alertService.error('Login Failed!! Try again with correct Username/Password');
          this.loading = false;
        });
  }
}
