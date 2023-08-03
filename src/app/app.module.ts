import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule

import { CardService } from './Services/Cards.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { NavLateralComponent } from './nav-lateral/nav-lateral.component';
import { CardsComponent } from './cards/cards.component';
import { LogoComponent } from './logo/logo.component';
import { SessionComponent } from './session/session.component';
import { PanelComponent } from './panel/panel.component';
import { CloseSessionComponent } from './close-session/close-session.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';
import { CardComponent } from './card/card.component';
import { UserService } from './Services/User.service';
import { AuthService } from './Services/Auth.service';
import { OperationsComponent } from './operations/operations.component';
import { LoansComponent } from './loans/loans.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { PointsComponent } from './points/points.component';
import { HelpsComponent } from './helps/helps.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';
import { BalancesComponent } from './balances/balances.component';
import { TransaccionsComponent } from './transaccions/transaccions.component';
import { SetingsComponent } from './setings/setings.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { NewCardComponent } from './new-card/new-card.component';
import { CuotasComponent } from './cuotas/cuotas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    NavLateralComponent,
    CardsComponent,
    LogoComponent,
    SessionComponent,
    PanelComponent,
    CloseSessionComponent,
    ProfileComponent,
    ErrorComponent,
    CardComponent,
    OperationsComponent,
    LoansComponent,
    BenefitsComponent,
    InsuranceComponent,
    PointsComponent,
    HelpsComponent,
    IngresosComponent,
    EgresosComponent,
    BalancesComponent,
    TransaccionsComponent,
    SetingsComponent,
    NotificationsComponent,
    HamburgerComponent,
    NewCardComponent,
    CuotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CardService, UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
