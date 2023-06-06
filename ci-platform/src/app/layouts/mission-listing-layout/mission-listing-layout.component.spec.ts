import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionListingLayoutComponent } from './mission-listing-layout.component';

describe('MissionListingLayoutComponent', () => {
  let component: MissionListingLayoutComponent;
  let fixture: ComponentFixture<MissionListingLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MissionListingLayoutComponent]
    });
    fixture = TestBed.createComponent(MissionListingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
