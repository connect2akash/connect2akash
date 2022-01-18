import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Route4TimerInputComponent } from './route-4-timer-input.component';

describe('TimerInputComponent', () => {
  let component: Route4TimerInputComponent;
  let fixture: ComponentFixture<Route4TimerInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route4TimerInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route4TimerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
