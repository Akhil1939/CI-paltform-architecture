import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { AdminModule } from './admin/admin.module';
import { VolunteerModule } from './volunteer/volunteer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AuthenticationModule,
    AdminModule,
    VolunteerModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
