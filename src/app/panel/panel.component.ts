import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { environment } from '../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { ConferenceRoomService } from '../_services/conference-room.service';
// import { ReserveConferenceRoomComponent } from '../reserve-conference-room/reserve-conference-room.component';
import { Reservation } from '../_models/reservation';
import { ConferenceRoom } from '../_models/conference-room.model';
import { Location } from '@angular/common';
import { ReserveConferenceRoomService } from '../_services/reserve-conference-room.service';
import * as moment from 'moment';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit, OnDestroy {
  public id: number;
  public sub: any;
  public Reservations: Reservation[];
  public newReservation: Reservation;  // for creating reservation
  public today: number = Date.now();
  public conferenceRooms: ConferenceRoom[];
  reserve_hide: boolean;
  public currentDay = moment().format('YYYY-MM-DD') + 'T00:00:00-00:00';
  public tommorrow = moment().add(1, 'days').format('YYYY-MM-DD') + 'T00:00:00-00:00';

  constructor(private route: ActivatedRoute,
    private conferenceRoomService: ConferenceRoomService,
    private location: Location,
    private router: Router,
    public dialog: MatDialog) {

    this.router.events.subscribe((val) => {
      if (this.location.path().includes('/panels/')) {
        this.reserve_hide = true;
      } else {
        this.reserve_hide = false;
      }
      // console.log(this.location.path(),this.reserve_hide)
    });

  }

  // openMakeReservationDialog(id, lastName) {
  //   const reserveConfRoomDialog = this.dialog.open(ReserveConferenceRoomComponent, {
  //     data: {
  //       confId: id,
  //       confLastName: lastName
  //     }
  //   });
  //   reserveConfRoomDialog.afterClosed()
  //     .subscribe(newReservation => {
  //       this.ngOnInit();
  //       if (newReservation) {
  //         this.newReservation = newReservation;

  //       } else {
  //         // User clicked 'Cancel' or clicked outside the dialog
  //       }
  //     });
  // }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
    });


    this.conferenceRoomService.getAllReservationsByDateRange(this.id, this.currentDay, this.tommorrow).subscribe(data => {
      this.Reservations = data;
    });

    this.conferenceRoomService.getConferenceRoomsbyid(this.id).subscribe((conferenceRooms: ConferenceRoom[]) => {
      this.conferenceRooms = conferenceRooms;
      // console.log("conferenceroom:",this.conferenceRooms)
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
