import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { CaseListComponent } from './case-list/case-list.component';
import { AuthGuard } from './_guards';
import { CaseDetailsComponent } from './case-details/case-details.component';
import { FraudReportsComponent } from './fraud-reports/fraud-reports.component';
// import { AdminComponent } from './admin/admin.component';
// import { PanelComponent } from './panel/panel.component';
// import { ViewConferenceRoomsComponent} from './view-conference-rooms/view-conference-rooms.component';
// import { AdminRoomsComponent} from './admin-rooms/admin-rooms.component';
// import { ReportsComponent} from './reports/reports.component';


const routes: Routes = [
    { path: 'login', component: LoginpageComponent },
    { path: '', component: LoginpageComponent },

    // { path: 'caselist', component: CaseListComponent,  canActivate: [AuthGuard]},
    { path: 'caselist', component: CaseListComponent },
    { path: 'casedetails', component: CaseDetailsComponent },
    { path: 'fraudreports', component: FraudReportsComponent },


  // { path: '', component: ViewConferenceRoomsComponent, canActivate: [AuthGuard]},
  // { path: 'panels/:id', component: PanelComponent},
  // { path: 'rooms', component: ViewConferenceRoomsComponent, canActivate: [AuthGuard]},
  // { path: 'rooms/:id', component: PanelComponent, canActivate: [AuthGuard]},
  // { path: 'admin/rooms', component: AdminRoomsComponent, canActivate: [AuthGuard] },
  // { path: 'admin/users', component: AdminComponent, canActivate: [AuthGuard] },
  // { path: 'reports', component: ReportsComponent, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
