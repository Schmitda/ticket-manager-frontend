import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {TicketOverviewComponent} from './ticket-overview/ticket-overview.component';
import {myRoutes} from './app.routing';
import {RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AddEditTicketComponent } from './add-edit-ticket/add-edit-ticket.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {CoreModule} from './modules/core.module';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './modules/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { OverviewUserComponent } from './overview-user/overview-user.component';
import { StringToBrPipe } from './string-to-br.pipe';
import { PhonePipe } from './phone.pipe';
import { RandomNumberPipe } from './random-number.pipe';
import { ConvertLinkPipe } from './convert-link.pipe';
import { MessageComponent } from './messages/message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TicketOverviewComponent,
    DashboardComponent,
    LoginComponent,
    AddEditTicketComponent,
    ViewTicketComponent,
    PageNotFoundComponent,
    AddEditUserComponent,
    ViewUserComponent,
    OverviewUserComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    myRoutes,
    SharedModule,
    CoreModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
