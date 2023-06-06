import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountManagementLayoutComponent } from './account-management-layout.component';

describe('AccountManagementLayoutComponent', () => {
  let component: AccountManagementLayoutComponent;
  let fixture: ComponentFixture<AccountManagementLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountManagementLayoutComponent]
    });
    fixture = TestBed.createComponent(AccountManagementLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
