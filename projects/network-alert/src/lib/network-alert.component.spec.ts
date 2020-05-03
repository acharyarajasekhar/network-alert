import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkAlertComponent } from './network-alert.component';

describe('NetworkAlertComponent', () => {
  let component: NetworkAlertComponent;
  let fixture: ComponentFixture<NetworkAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
