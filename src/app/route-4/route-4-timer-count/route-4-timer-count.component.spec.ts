/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Route4TimerCountComponent } from './route-4-timer-count.component';

describe('TimerCountComponent', () => {
  let component: Route4TimerCountComponent;
  let fixture: ComponentFixture<Route4TimerCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route4TimerCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route4TimerCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
