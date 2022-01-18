/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Route5Component } from './route-5.component';

describe('Route5Component', () => {
  let component: Route5Component;
  let fixture: ComponentFixture<Route5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
