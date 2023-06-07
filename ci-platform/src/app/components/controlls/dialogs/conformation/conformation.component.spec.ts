import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConformationComponent } from './conformation.component';

describe('ConformationComponent', () => {
  let component: ConformationComponent;
  let fixture: ComponentFixture<ConformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConformationComponent]
    });
    fixture = TestBed.createComponent(ConformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
