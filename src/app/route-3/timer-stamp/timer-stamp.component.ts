import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-stamp',
  templateUrl: './timer-stamp.component.html',
  styleUrls: ['./timer-stamp.component.css']
})
export class TimerStampComponent implements OnInit {

  public timeStampArray: string[] = [];
  public reset: boolean = false;
  public count: number = 0;

  @Input() set isStarted(value: boolean) {

    let ISToffSet = 330; 
    let offset= ISToffSet*60*1000;
    let ISTdate  = new Date(new Date().getTime()+offset).toISOString();
    let dateArray;
    dateArray = ISTdate.split('T');
    let date = dateArray[0].split('-').reverse().join('-');
    let time;
    time = dateArray[1].split(".")[0];

    if (value && this.count != 0) {
      this.timeStampArray.unshift("Started at " + date + ' ' + time + (time.split(":")[0] > 11 ? " PM" : " AM"));
    } else if (!value && this.count != 0) {
      this.timeStampArray.unshift("Paused at " + date + ' ' + time + (time.split(":")[0] > 11 ? " PM" : " AM"));
    }    
    this.count++;
  }  

  @Input() set isReset(value: boolean) {
    this.reset = value;
    this.timeStampArray = [];
  }

  constructor() { }

  ngOnInit() {
  }

}
