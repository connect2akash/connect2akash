import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerStampComponent } from './timer-stamp/timer-stamp.component';
import { TimerInputComponent } from './timer-input/timer-input.component';
import { TimerDisplayComponent } from './timer-display/timer-display.component';
import { TimerCountComponent } from './timer-count/timer-count.component';
import { Route3Component } from './route-3.component';
import { numbersOnlyDirectiveModule } from './../numbersOnly.directive';
@NgModule({
  declarations: [
    TimerCountComponent,
    TimerDisplayComponent,
    TimerInputComponent,
    TimerStampComponent,
    Route3Component,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    numbersOnlyDirectiveModule
  ],
  exports: [
    Route3Component,
    MatButtonModule
  ]
})
export class Route3Module { }
