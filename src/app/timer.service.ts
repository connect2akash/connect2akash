import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

constructor() { }

public $reset: Subject<boolean> = new Subject();
public $start: Subject<{}> = new Subject();

public onReset(value: boolean): void {
  this.$reset.next(value);
}

public onStart(value: Object): void {
  this.$start.next(value);
}

}
