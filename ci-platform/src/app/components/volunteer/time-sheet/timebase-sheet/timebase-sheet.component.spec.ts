import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimebaseSheetComponent } from './timebase-sheet.component';

describe('TimebaseSheetComponent', () => {
  let component: TimebaseSheetComponent;
  let fixture: ComponentFixture<TimebaseSheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimebaseSheetComponent]
    });
    fixture = TestBed.createComponent(TimebaseSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
