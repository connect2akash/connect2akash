import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-count',
  templateUrl: './timer-count.component.html',
  styleUrls: ['./timer-count.component.css']
})
export class TimerCountComponent implements OnInit {

  @Input() startCount: number = 0;
  @Input() pauseCount: number = 0;
  
  @Input() set isReset(value: boolean) {
    this.startCount = 0;
    this.pauseCount = 0;
  }

  constructor() { }

  ngOnInit() {
  }

}
