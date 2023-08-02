import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
