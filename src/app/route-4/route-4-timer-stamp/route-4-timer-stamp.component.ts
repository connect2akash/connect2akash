import { Component, OnInit } from '@angular/core';
import { TimerService } from './../../timer.service';

@Component({
  selector: 'app-route-4-timer-stamp',
  templateUrl: './route-4-timer-stamp.component.html',
  styleUrls: ['./route-4-timer-stamp.component.css']
})
export class Route4TimerStampComponent implements OnInit {

  public timeStampArray: string[] = [];
  public reset: boolean = false;
  public started: boolean = false;

  constructor(private timerService: TimerService) { }

  ngOnInit() {
  
    this.timerService.$reset.subscribe((value: boolean) => {
      this.isReset(value);
    });

    this.timerService.$start.subscribe((value: any[]) => {
      this.isStarted(value);
    })

  }

  public isStarted(value: any[]): void {
    this.reset = false;

    let ISToffSet = 330; 
    let offset= ISToffSet*60*1000;
    let ISTdate  = new Date(new Date().getTime()+offset).toISOString();
    let dateArray;
    dateArray = ISTdate.split('T');
    let date = dateArray[0].split('-').reverse().join('-');
    let time;
    time = dateArray[1].split(".")[0];

    if (value[0] && value[0] != this.started) {
      this.timeStampArray.unshift("Started at " + date + ' ' + time + (time.split(":")[0] > 11 ? " PM" : " AM"));
    } else if (!value[0] && value[0] != this.started) {
      this.timeStampArray.unshift("Paused at " + date + ' ' + time + (time.split(":")[0] > 11 ? " PM" : " AM"));
    }
    this.started = value[0];
  }  

  public isReset(value: boolean): void {
    this.reset = value;
    this.timeStampArray = [];
    this.started = false;
  }
}
