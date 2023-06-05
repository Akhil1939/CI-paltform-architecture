import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionLayoutComponent } from './layouts/mission-layout/mission-layout.component';
import { StoryLayoutComponent } from './layouts/story-layout/story-layout.component';
import { StoryListingComponent } from './components/story/story-listing/story-listing.component';
import { MissionListComponent } from '../admin/components/mission/mission-list/mission-list.component';

const routes: Routes = [
  {
    path: 'missions',
    component: MissionLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'missionlist',
        pathMatch: 'full',
      },
      {
        path: 'missionlist',
        component:MissionListComponent
      }
    ],
  },
  {
    path:'story',
    component:StoryLayoutComponent,
    children:[
      {
        path:'',
        redirectTo:'storylist',
        pathMatch:'full'
      },
      {
        path:'storylist',
        component:StoryListingComponent,
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolunteerRoutingModule {}
