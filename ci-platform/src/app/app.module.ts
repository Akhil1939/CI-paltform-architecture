import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/account-management/login/login.component';
import { RegistrationComponent } from './components/account-management/registration/registration.component';
import { ResetPasswordComponent } from './components/account-management/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/account-management/forgot-password/forgot-password.component';
import { UserListComponent } from './components/admin/user/user-list/user-list.component';
import { UserUpsertComponent } from './components/admin/user/user-upsert/user-upsert.component';
import { SkillListComponent } from './components/admin/skill/skill-list/skill-list.component';
import { SkillUpsertComponent } from './components/admin/skill/skill-upsert/skill-upsert.component';
import { MissionListComponent } from './components/admin/mission/mission-list/mission-list.component';
import { MissionUpsertComponent } from './components/admin/mission/mission-upsert/mission-upsert.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AccountManagementLayoutComponent } from './layouts/account-management-layout/account-management-layout.component';
import { MissionListingLayoutComponent } from './layouts/mission-listing-layout/mission-listing-layout.component';
import { StoryListingLayoutComponent } from './layouts/story-listing-layout/story-listing-layout.component';

import { AddComponent } from './components/common/controlls/buttons/add/add.component';
import { UpdateIconComponent } from './components/common/controlls/buttons/update-icon/update-icon.component';
import { DeleteIconComponent } from './components/common/controlls/buttons/delete-icon/delete-icon.component';
import { AlertComponent } from './components/common/controlls/dialogs/alert/alert.component';
import { ConformationComponent } from './components/common/controlls/dialogs/conformation/conformation.component';
import { TextFieldComponent } from './components/common/controlls/forms/text-field/text-field.component';
import { EmailFieldComponent } from './components/common/controlls/forms/email-field/email-field.component';
import { PasswordFieldComponent } from './components/common/controlls/forms/password-field/password-field.component';
import { MissionListingComponent } from './components/volunteer/mission/mission-listing/mission-listing.component';
import { GridViewComponent } from './components/volunteer/mission/mission-listing/grid-view/grid-view.component';
import { ListViewComponent } from './components/volunteer/mission/mission-listing/list-view/list-view.component';
import { StoryListingComponent } from './components/volunteer/story/story-listing/story-listing.component';
import { MissionCardComponent } from './components/volunteer/mission/mission-listing/mission-card/mission-card.component';
import { StoryCardComponent } from './components/volunteer/story/story-listing/story-card/story-card.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HeaderComponent } from './components/common/header/header.component';
import { TimeSheetComponent } from './components/volunteer/time-sheet/time-sheet.component';
import { GoalbaseSheetComponent } from './components/volunteer/time-sheet/goalbase-sheet/goalbase-sheet.component';
import { TimebaseSheetComponent } from './components/volunteer/time-sheet/timebase-sheet/timebase-sheet.component';
import { UserProfileComponent } from './components/account-management/user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    UserListComponent,
    UserUpsertComponent,
    SkillListComponent,
    SkillUpsertComponent,
    MissionListComponent,
    MissionUpsertComponent,
    AdminLayoutComponent,
    AccountManagementLayoutComponent,
    MissionListingLayoutComponent,
    StoryListingLayoutComponent,
    AddComponent,
    UpdateIconComponent,
    DeleteIconComponent,
    AlertComponent,
    ConformationComponent,
    TextFieldComponent,
    EmailFieldComponent,
    PasswordFieldComponent,
    MissionListingComponent,
    GridViewComponent,
    ListViewComponent,
    StoryListingComponent,
    MissionCardComponent,
    StoryCardComponent,
    FooterComponent,
    HeaderComponent,
    TimeSheetComponent,
    GoalbaseSheetComponent,
    TimebaseSheetComponent,
    UserProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
