import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionListingComponent } from './mission-listing.component';

describe('MissionListingComponent', () => {
  let component: MissionListingComponent;
  let fixture: ComponentFixture<MissionListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MissionListingComponent]
    });
    fixture = TestBed.createComponent(MissionListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
