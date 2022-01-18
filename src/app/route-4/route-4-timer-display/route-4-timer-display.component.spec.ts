import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Route4TimerDisplayComponent } from './route-4-timer-display.component';

describe('TimerDisplayComponent', () => {
  let component: Route4TimerDisplayComponent;
  let fixture: ComponentFixture<Route4TimerDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route4TimerDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route4TimerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
