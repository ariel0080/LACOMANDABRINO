import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejoLogsComponent } from './manejo-logs.component';

describe('ManejoLogsComponent', () => {
  let component: ManejoLogsComponent;
  let fixture: ComponentFixture<ManejoLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManejoLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManejoLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
