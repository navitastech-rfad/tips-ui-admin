import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Location, LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let router: Router;
  let location: Location;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [RouterModule, RouterTestingModule],
      providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }, { provide: APP_BASE_HREF, useValue: '/my/app' }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
  });

  it('should have title as ODOS Demo App', fakeAsync(() => {
    expect(component.title).toEqual('ODOS Demo App');
  }));

  it('should have property nav_hide', async(() => {
    expect(component.nav_hide).toBeUndefined();
  }));

  it('should set nav_hide to false if not on panels page', fakeAsync(() => {
    router.navigate(['']);
    expect(component.nav_hide).toBeDefined();
    expect(component.nav_hide).toBeFalsy();
  }));




});
