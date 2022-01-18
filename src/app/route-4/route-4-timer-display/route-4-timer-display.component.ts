import { Component, OnInit } from '@angular/core';
import { TimerService } from './../../timer.service';

@Component({
  selector: 'app-route-4-timer-display',
  templateUrl: './route-4-timer-display.component.html',
  styleUrls: ['./route-4-timer-display.component.css']
})
export class Route4TimerDisplayComponent implements OnInit {

  public timer: number = 0;
  public currentTimer: number = 0;

  constructor(private timerService: TimerService) { }

  ngOnInit() {
  
    this.timerService.$reset.subscribe((value: boolean) => {
      this.onTimerReset(value);
    });

    this.timerService.$start.subscribe((value: any[]) => {
      this.onTimerStart(value);
    })

  }

  public onTimerReset(value: boolean): void {
    this.timer = 0;
    this.currentTimer = 0;
    
  }

  public onTimerStart(value: any[]): void {
    this.currentTimer = value[1];
  }

}
