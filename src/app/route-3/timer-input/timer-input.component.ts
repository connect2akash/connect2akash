import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-timer-input',
  templateUrl: './timer-input.component.html',
  styleUrls: ['./timer-input.component.css']
})
export class TimerInputComponent implements OnInit {

  public inputValue: number;
  public isTimerOn = false;
  public paused: number[] = [];

  private interval: any;

  @ViewChild('input') input: ElementRef;
  @Output() reset: EventEmitter<boolean> = new EventEmitter();
  @Output() start: EventEmitter<{}> = new EventEmitter();

  constructor(private el: ElementRef) { }

  ngOnInit() {
  }

  public onStart(): void {
    
    if (!this.isTimerOn){
      this.input.nativeElement.disabled = true;
      this.interval = setInterval(() => {
        this.inputValue = this.inputValue - 1;
        this.start.emit([true, this.inputValue]);
        if (this.inputValue <= 0) {
          clearInterval(this.interval);
          this.start.emit([false, this.inputValue]);
          this.isTimerOn = false;
          this.paused = [];
          this.input.nativeElement.disabled = false;
          
        }
      },1000);
      this.isTimerOn = true;

    } else {
      setTimeout(() => {
        this.isTimerOn = false;
        this.start.emit([false, this.inputValue]);
        clearInterval(this.interval);
        this.paused.unshift(this.inputValue);
      },0);
      
    }
    
  }

  public onReset(): void {
    this.input.nativeElement.value = null;
    this.inputValue = null;
    this.reset.emit(true);
    this.paused = [];
    clearInterval(this.interval);
    this.isTimerOn = false;
    this.input.nativeElement.disabled = false;
  }

  public onKey(event: any): void {
    this.inputValue = event.target.value;
  }
}
