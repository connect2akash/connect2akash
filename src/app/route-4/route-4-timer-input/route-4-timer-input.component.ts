import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TimerService } from '../../timer.service';

@Component({
  selector: 'app-route-4-timer-input',
  templateUrl: './route-4-timer-input.component.html',
  styleUrls: ['./route-4-timer-input.component.css']
})
export class Route4TimerInputComponent implements OnInit {

  public inputValue: number;
  public isTimerOn = false;
  public paused: number[] = [];

  private interval: any;

  @ViewChild('input') input: ElementRef;

  constructor(private el: ElementRef,
              private timerService: TimerService) { }

  ngOnInit() {
  }

  public onStart(): void {
    
    if (!this.isTimerOn){
      this.input.nativeElement.disabled = true;
      this.interval = setInterval(() => {
        this.inputValue = this.inputValue - 1;
        this.timerService.onStart([true, this.inputValue]);
        if (this.inputValue <= 0) {
          clearInterval(this.interval);
          this.timerService.onStart([false, this.inputValue]);
          this.isTimerOn = false;
          this.paused = [];
          this.input.nativeElement.disabled = false;
          
        }
      },1000);
      this.isTimerOn = true;

    } else {
      setTimeout(() => {
        this.isTimerOn = false;
        this.timerService.onStart([false, this.inputValue]);
        clearInterval(this.interval);
        this.paused.unshift(this.inputValue);
      },0);
      
    }
    
  }

  public onReset(): void {
    this.input.nativeElement.value = null;
    this.inputValue = null;
    this.timerService.onReset(true);
    this.paused = [];
    clearInterval(this.interval);
    this.isTimerOn = false;
    this.input.nativeElement.disabled = false;
  }

  public onKey(event: any): void {
    this.inputValue = event.target.value;
  }
}
