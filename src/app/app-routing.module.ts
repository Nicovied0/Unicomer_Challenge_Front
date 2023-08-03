import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './AuthGuard';
import { CardsComponent } from './cards/cards.component';
import { CloseSessionComponent } from './close-session/close-session.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';
import { OperationsComponent } from './operations/operations.component';
import { LoansComponent } from './loans/loans.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { PointsComponent } from './points/points.component';
import { HelpsComponent } from './helps/helps.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "cards", component: CardsComponent, canActivate: [AuthGuard] },
  { path: "closeSession", component: CloseSessionComponent, canActivate: [AuthGuard] },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
  { path: "operations", component: OperationsComponent, canActivate: [AuthGuard] },
  { path: "loans", component: LoansComponent, canActivate: [AuthGuard] },
  { path: "benefits", component: BenefitsComponent, canActivate: [AuthGuard] },
  { path: "insurance", component: InsuranceComponent, canActivate: [AuthGuard] },
  { path: "points", component: PointsComponent, canActivate: [AuthGuard] },
  { path: "help", component: HelpsComponent, canActivate: [AuthGuard] },


  { path: "**", component: ErrorComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
