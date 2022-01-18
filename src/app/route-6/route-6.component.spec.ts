/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Route6Component } from './route-6.component';

describe('Route6Component', () => {
  let component: Route6Component;
  let fixture: ComponentFixture<Route6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
