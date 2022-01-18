import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Route4TimerStampComponent } from './route-4-timer-stamp.component';

describe('TimerStampComponent', () => {
  let component: Route4TimerStampComponent;
  let fixture: ComponentFixture<Route4TimerStampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route4TimerStampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route4TimerStampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
