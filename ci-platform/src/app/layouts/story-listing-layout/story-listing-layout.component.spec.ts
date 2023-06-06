import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryListingLayoutComponent } from './story-listing-layout.component';

describe('StoryListingLayoutComponent', () => {
  let component: StoryListingLayoutComponent;
  let fixture: ComponentFixture<StoryListingLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoryListingLayoutComponent]
    });
    fixture = TestBed.createComponent(StoryListingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
