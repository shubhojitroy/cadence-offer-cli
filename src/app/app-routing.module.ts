import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './templates/home/home.component';
import { ProspectusComponent } from './templates/prospectus/prospectus.component';
import { LoginComponent } from './templates/login/login.component';
import { RegoDetailsComponent } from './templates/rego-details/rego-details.component';
import { ApplicationComponent } from './templates/application/application.component';
import { ConfirmationComponent } from './templates/confirmation/confirmation.component';
import { FinishComponent } from './templates/finish/finish.component';
import { EligibilityNoticeComponent } from './templates/eligibility-notice/eligibility-notice.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'prospectus', component: ProspectusComponent },
  { path: 'login', component: LoginComponent },
  { path: 'rego-details', component: RegoDetailsComponent },
  { path: 'application', component: ApplicationComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'finish', component: FinishComponent },
  { path: 'eligibility-notice', component: EligibilityNoticeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
