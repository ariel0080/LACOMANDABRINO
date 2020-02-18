import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUsrComponent } from './manage-usr.component';

describe('ManageUsrComponent', () => {
  let component: ManageUsrComponent;
  let fixture: ComponentFixture<ManageUsrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUsrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
