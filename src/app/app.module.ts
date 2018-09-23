import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './templates/home/home.component';
import { ProspectusComponent } from './templates/prospectus/prospectus.component';
import { LoginComponent } from './templates/login/login.component';
import { RegoDetailsComponent } from './templates/rego-details/rego-details.component';
import { ApplicationComponent } from './templates/application/application.component';
import { ConfirmationComponent } from './templates/confirmation/confirmation.component';
import { FinishComponent } from './templates/finish/finish.component';
import { EligibilityNoticeComponent } from './templates/eligibility-notice/eligibility-notice.component';

import { HeaderComponent } from './childtemplates/header/header.component';
import { FooterComponent } from './childtemplates/footer/footer.component';

import { ContactComponent } from './dialogs/contact/contact.component';
import { PrivacypolicyComponent } from './dialogs/privacypolicy/privacypolicy.component';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';

import { ScheduleComponent } from './tabs/schedule/schedule.component';
import { DatesComponent } from './tabs/dates/dates.component';
import { DetailsComponent } from './tabs/details/details.component';

// import { ContactComponent } from './modal/contact/contact.component';
// import { PrivacypolicyComponent } from './modal/privacypolicy/privacypolicy.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProspectusComponent,
    LoginComponent,
    RegoDetailsComponent,
    ApplicationComponent,
    ConfirmationComponent,
    FinishComponent,
    EligibilityNoticeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    PrivacypolicyComponent,
    ScheduleComponent,
    DatesComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
