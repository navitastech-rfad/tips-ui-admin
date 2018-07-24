import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, DoCheck {
  title = 'ODOS Demo App';
  nav_hide: boolean;
  role: string;
  constructor(private location: Location, private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (this.location.path().includes('/panels/')) {
        this.nav_hide = true;
      } else if (this.location.path().includes('/login')) {
        this.nav_hide = true;
      } else {
        this.nav_hide = false;
      }
      // console.log(this.location.path(),this.nav_hide)
    });
  }
  ngDoCheck() {
    if (localStorage.getItem('currentUser')) {
      const current_user_data = JSON.parse(localStorage.getItem('currentUser'));
      this.role = current_user_data.role;
      // console.log(this.role);
    } else {
      this.role = 'None';
    }
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
