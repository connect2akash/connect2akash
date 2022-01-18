/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Route2Component } from './route-2.component';

describe('Route2Component', () => {
  let component: Route2Component;
  let fixture: ComponentFixture<Route2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
