import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ConferenceRoomService } from '../_services/conference-room.service'
import { AuthenticationService } from '../_services/authentication.service'
import { HttpModule } from '@angular/http';
import { PanelComponent } from './panel.component';
import { Subject } from 'rxjs/Subject';

describe('PanelComponent', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;
  let compiled: any;
  let router: Router;
  let mockRoute: any = {snapshot: {}};
  mockRoute.parent= {params:new Subject<any>()}
  mockRoute.params= new Subject<any>();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelComponent ],
      imports: [RouterModule,RouterTestingModule,HttpModule],
      providers: [ConferenceRoomService,AuthenticationService,{provide: ActivatedRoute, useValue: mockRoute}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
    router = TestBed.get(Router);
  });


 it('should hava property id to be a number', fakeAsync(()=> {
   mockRoute.params.next({id: 1})
   expect(typeof(component.id)).toEqual('number');
   expect(component.id).toEqual(1);
 }));

 it('should have a property today to be a number', fakeAsync(()=> {
   expect(typeof(component.today)).toEqual('number');
 }));

 it('should have a property today should be equal to todays date', fakeAsync(()=> {
   expect(component.today).toBeLessThanOrEqual(Date.now());
 }));


 it("should set reserve_hide to false if not on panels page", fakeAsync(()=>{
   router.navigate([''])
   expect(component.reserve_hide).toBeDefined();
   expect(component.reserve_hide).toBeFalsy();
 }));



});
