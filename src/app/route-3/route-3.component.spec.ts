/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Route3Component } from './route-3.component';

describe('Route3Component', () => {
  let component: Route3Component;
  let fixture: ComponentFixture<Route3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
