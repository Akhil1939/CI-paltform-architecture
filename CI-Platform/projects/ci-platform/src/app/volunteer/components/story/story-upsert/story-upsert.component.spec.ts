import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryUpsertComponent } from './story-upsert.component';

describe('StoryUpsertComponent', () => {
  let component: StoryUpsertComponent;
  let fixture: ComponentFixture<StoryUpsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoryUpsertComponent]
    });
    fixture = TestBed.createComponent(StoryUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
