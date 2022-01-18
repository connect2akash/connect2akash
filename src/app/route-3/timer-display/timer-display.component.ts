import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.css']
})
export class TimerDisplayComponent implements OnInit {

  @Input() public timer: number = 1000;

  @Input() public currentTimer: number = 0;
  
  constructor() { }

  ngOnInit() {
  }

}
