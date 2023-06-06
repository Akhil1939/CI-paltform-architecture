import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalbaseSheetComponent } from './goalbase-sheet.component';

describe('GoalbaseSheetComponent', () => {
  let component: GoalbaseSheetComponent;
  let fixture: ComponentFixture<GoalbaseSheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoalbaseSheetComponent]
    });
    fixture = TestBed.createComponent(GoalbaseSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
