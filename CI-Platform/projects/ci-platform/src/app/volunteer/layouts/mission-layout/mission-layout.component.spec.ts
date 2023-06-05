import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionLayoutComponent } from './mission-layout.component';

describe('MissionLayoutComponent', () => {
  let component: MissionLayoutComponent;
  let fixture: ComponentFixture<MissionLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MissionLayoutComponent]
    });
    fixture = TestBed.createComponent(MissionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
