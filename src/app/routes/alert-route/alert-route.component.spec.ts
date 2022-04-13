import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertRouteComponent } from './alert-route.component';

describe('AlertRouteComponent', () => {
  let component: AlertRouteComponent;
  let fixture: ComponentFixture<AlertRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
