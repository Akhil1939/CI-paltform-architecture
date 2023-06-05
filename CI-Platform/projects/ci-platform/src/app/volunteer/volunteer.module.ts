import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolunteerRoutingModule } from './volunteer-routing.module';
import { MissionListingComponent } from './components/mission/mission-listing/mission-listing.component';
import { MissionCardComponent } from './components/mission/mission-listing/mission-card/mission-card.component';
import { GridViewComponent } from './components/mission/mission-listing/grid-view/grid-view.component';
import { ListViewComponent } from './components/mission/mission-listing/list-view/list-view.component';
import { StoryListingComponent } from './components/story/story-listing/story-listing.component';
import { StoryCardComponent } from './components/story/story-listing/story-card/story-card.component';
import { StoryDetailComponent } from './components/story/story-detail/story-detail.component';
import { MissionDetailComponent } from './components/mission/mission-detail/mission-detail.component';
import { StoryUpsertComponent } from './components/story/story-upsert/story-upsert.component';
import { TimeSheetComponent } from './components/time-sheet/time-sheet.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FilterHeaderComponent } from './components/shared/filter-header/filter-header.component';
import { PaginationComponent } from './components/layout/pagination/pagination.component';
import { MissionLayoutComponent } from './layouts/mission-layout/mission-layout.component';
import { StoryLayoutComponent } from './layouts/story-layout/story-layout.component';




@NgModule({
  declarations: [
    MissionListingComponent,
    MissionCardComponent,
    GridViewComponent,
    ListViewComponent,
    StoryListingComponent,
    StoryCardComponent,
    StoryDetailComponent,
    MissionDetailComponent,
    StoryUpsertComponent,
    TimeSheetComponent,
    FooterComponent,
    HeaderComponent,
    FilterHeaderComponent,
    PaginationComponent,
    MissionLayoutComponent,
    StoryLayoutComponent,


  ],
  imports: [
    CommonModule,
    VolunteerRoutingModule
  ]
})
export class VolunteerModule { }
