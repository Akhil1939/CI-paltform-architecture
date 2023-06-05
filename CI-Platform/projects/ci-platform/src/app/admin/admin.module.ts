import { UserListComponent } from './components/user/user-list/user-list.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { UserUpsertComponent } from './components/user/user-upsert/user-upsert.component';
import { MissionListComponent } from './components/mission/mission-list/mission-list.component';
import { MissionUpsertComponent } from './components/mission/mission-upsert/mission-upsert.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SkillListComponent } from './components/skills/skill-list/skill-list.component';
import { SkillUpsertComponent } from './components/skills/skill-upsert/skill-upsert.component';
import { ConformationDialogComponent } from './components/dialogs/conformation-dialog/conformation-dialog.component';
import { ActionsComponent } from './components/layout/actions/actions.component';
import { AddComponent } from './components/layout/buttons/add/add.component';
import { UpdateComponent } from './components/layout/buttons/update/update.component';
import { DeleteComponent } from './components/layout/buttons/delete/delete.component';
import { PaginationComponent } from './components/layout/pagination/pagination.component';


@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    UserListComponent,
    UserUpsertComponent,
    MissionListComponent,
    MissionUpsertComponent,
    AdminLayoutComponent,
    SkillListComponent,
    SkillUpsertComponent,
    ConformationDialogComponent,
    ActionsComponent,
    AddComponent,
    UpdateComponent,
    DeleteComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
