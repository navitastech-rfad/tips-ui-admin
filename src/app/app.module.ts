import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatCardModule, MatButtonModule,
  MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule,
  MatOptionModule, MatSelectModule } from '@angular/material';
import { DatePipe } from '@angular/common';

import {
  ReactiveFormsModule
} from '@angular/forms';

// import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HttpModule } from '@angular/http';

// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatExpansionModule } from '@angular/material/expansion';
// import { MatIconModule } from '@angular/material/icon';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { MatTableModule } from '@angular/material/table';
// import { MatTooltipModule } from '@angular/material/tooltip';

import { UserService } from './_services/user.service';
import { AuthenticationService} from './_services/authentication.service';
import { ConferenceRoomService } from './_services/conference-room.service';
import { ReserveConferenceRoomService } from './_services/reserve-conference-room.service';

// import { AuthGuard } from './_guards/index';
import { PanelComponent } from './panel/panel.component';
// import { NewUserModalComponent } from './admin-modal/new-user-modal.component';
// import { ViewConferenceRoomsComponent } from './view-conference-rooms/view-conference-rooms.component';
// import { AdminRoomsComponent } from './admin-rooms/admin-rooms.component';
// import { ReportsComponent } from './reports/reports.component';
// import { ReserveConferenceRoomComponent } from './reserve-conference-room/reserve-conference-room.component';

@NgModule({
  declarations: [
    // AdminComponent,
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginpageComponent,
    PanelComponent,
    // NewUserModalComponent,
    // ViewConferenceRoomsComponent,
    // AdminRoomsComponent,
    // ReportsComponent,
    // ReserveConferenceRoomComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule, MatCardModule, MatButtonModule, MatDatepickerModule,
    MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule,
    MatNativeDateModule,
    HttpModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatCardModule,
    // MatCheckboxModule,
    MatDialogModule,
    // MatExpansionModule,
    MatFormFieldModule,
    // MatIconModule,
    MatInputModule,
    // MatRadioModule,
    // MatSnackBarModule,
    // MatTableModule,
    // MatTooltipModule,
    MatSelectModule,
    MatDatepickerModule
  ],
  entryComponents: [
    // NewUserModalComponent,
    // ReserveConferenceRoomComponent
  ],
  providers: [
        // AuthGuard,
        AuthenticationService,  // providers used to create fake backend
        UserService,
        ConferenceRoomService,
        ReserveConferenceRoomService,
        DatePipe
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
