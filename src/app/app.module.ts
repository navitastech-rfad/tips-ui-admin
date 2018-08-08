import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './_guards';
import {
  MatDialogModule, MatCardModule, MatButtonModule,
  MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule,
  MatOptionModule, MatSelectModule
} from '@angular/material';
import { DatePipe } from '@angular/common';

import {
  ReactiveFormsModule
} from '@angular/forms';

// used to create fake backend

// import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AlertComponent } from './_directives';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatExpansionModule } from '@angular/material/expansion';
// import { MatIconModule } from '@angular/material/icon';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
// import { MatTooltipModule } from '@angular/material/tooltip';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { FakeBackendInterceptor, fakeBackendProvider} from './_helpers/fake-backend';

import { UserService } from './_services/user.service';
import { AuthenticationService } from './_services/authentication.service';
import { ConferenceRoomService } from './_services/conference-room.service';
import { AlertService } from './_services/alert.service';
import { ReserveConferenceRoomService } from './_services/reserve-conference-room.service';
import { CaseDetailServiceService } from './_services/case-detail-service.service';

// import { AuthGuard } from './_guards/index';
import { PanelComponent } from './panel/panel.component';
import { CaseListComponent } from './case-list/case-list.component';
import { CaseDetailsComponent } from './case-details/case-details.component';
<<<<<<< HEAD
import { initializer} from './app-init';
=======
import { FraudReportsComponent } from './fraud-reports/fraud-reports.component';
>>>>>>> 16179748748a4a9e08808a28cce4c9d0a87850ba
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
    CaseListComponent,
    AlertComponent,
    CaseDetailsComponent,
    FraudReportsComponent

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
    HttpClientModule,
    KeycloakAngularModule,
    MatDialogModule,
    // MatExpansionModule,
    MatFormFieldModule,
    // MatIconModule,
    MatInputModule,
    // MatRadioModule,
    // MatSnackBarModule,
    MatTableModule,
    // MatTooltipModule,
    MatSelectModule,
    MatDatepickerModule
  ],
  entryComponents: [
    // NewUserModalComponent,
    // ReserveConferenceRoomComponent
  ],
  providers: [
    AuthGuard,
    AuthenticationService,  // providers used to create fake backend
    UserService,
    AlertService,
    ConferenceRoomService,
    ReserveConferenceRoomService,
    CaseDetailServiceService,
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor,   multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: APP_INITIALIZER,   useFactory: initializer,    multi: true,  deps: [KeycloakService] },
    FakeBackendInterceptor,
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
