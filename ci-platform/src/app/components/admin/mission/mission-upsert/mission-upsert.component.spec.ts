import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionUpsertComponent } from './mission-upsert.component';

describe('MissionUpsertComponent', () => {
  let component: MissionUpsertComponent;
  let fixture: ComponentFixture<MissionUpsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MissionUpsertComponent]
    });
    fixture = TestBed.createComponent(MissionUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
