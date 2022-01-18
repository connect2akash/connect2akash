import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-3',
  templateUrl: './route-3.component.html',
  styleUrls: ['./route-3.component.css']
})
export class Route3Component implements OnInit {

  public timer: number;
  public startCount = 0;
  public pauseCount = 0;
  public currentTimer: number;
  public isStarted: boolean = false;
  public isReset: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  public onTimerReset(value: boolean): void {
    this.timer = 0;
    this.currentTimer = 0;
    this.isReset = true;
    this.pauseCount = 0;
    this.startCount = 0;
    this.isStarted = false;
  }

  public onTimerStart(value: any[]): void {
    if (value[0]) {
      this.isStarted = true;
      this.isReset = false;
      if (this.pauseCount === this.startCount){
        this.startCount++;
      }
      this.currentTimer = value[1];
    } else {
      this.isStarted = false;
      this.pauseCount++;
      this.currentTimer = value[1];
    }
  }
}
