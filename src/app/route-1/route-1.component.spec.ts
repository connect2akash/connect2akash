/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Route1Component } from './route-1.component';

describe('Route1Component', () => {
  let component: Route1Component;
  let fixture: ComponentFixture<Route1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
