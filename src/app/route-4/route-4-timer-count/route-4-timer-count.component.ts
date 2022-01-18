import { Component, OnInit } from '@angular/core';
import { TimerService } from './../../timer.service';

@Component({
  selector: 'app-route-4-timer-count',
  templateUrl: './route-4-timer-count.component.html',
  styleUrls: ['./route-4-timer-count.component.css']
})
export class Route4TimerCountComponent implements OnInit {

  startCount: number = 0;
  pauseCount: number = 0;

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
    this.pauseCount = 0;
    this.startCount = 0;
  }

  public onTimerStart(value: any[]): void {
    if (value[0]) {
      if (this.pauseCount === this.startCount){
        this.startCount++;
      }
    } else {
      this.pauseCount++;
    }
  }

}
