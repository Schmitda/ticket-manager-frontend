import {RouterModule, Routes} from '@angular/router';
import {TicketOverviewComponent} from './ticket-overview/ticket-overview.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {AddEditTicketComponent} from './add-edit-ticket/add-edit-ticket.component';
import {ViewTicketComponent} from './view-ticket/view-ticket.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuard} from './services/AuthGuard';
import {AddEditUserComponent} from './add-edit-user/add-edit-user.component';
import {ViewUserComponent} from './view-user/view-user.component';
import {OverviewUserComponent} from './overview-user/overview-user.component';

const Routes: Routes = [
  {
    path: 'home',
    component: TicketOverviewComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'add',
    component: AddEditTicketComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit/:id',
    component: AddEditTicketComponent
  },
  {
    path: 'user/add',
    component: AddEditUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/edit/:id',
    component: AddEditUserComponent
  },
  {
    path: 'user/view/:id',
    component: ViewUserComponent
  },
  {
    path: 'user',
    component: OverviewUserComponent
  },
  {
    path: 'view/:id',
    component: ViewTicketComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];


// gegeben sei eine Appliaktion
// Tickets / Users / Adressen / Firmen
//

/**
 * /ticket/view/:id  --> Zeigt ein Element an
 * /ticket/add/ --> Zeigt ein Creator Form an
 * /ticket/edit/:id --> Zeigt ein Edit-Formular an
 * /ticket/ --> Zeigt alle Tickets an
 *
 * Wir würden vier Module erstellen
 * ticket.module.ts --> RouterModule.forChild()
 * user.module.ts --> RouterModule.forChild()
 * adress.module.ts --> RouterModule.forChild()
 * company.module.ts --> RouterModule.forChild()
 *
 *
 *
 *
 * @type {ModuleWithProviders}
 */
//
//
//


export const myRoutes = RouterModule.forRoot(Routes);
