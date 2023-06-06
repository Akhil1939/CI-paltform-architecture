import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillUpsertComponent } from './skill-upsert.component';

describe('SkillUpsertComponent', () => {
  let component: SkillUpsertComponent;
  let fixture: ComponentFixture<SkillUpsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillUpsertComponent]
    });
    fixture = TestBed.createComponent(SkillUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
