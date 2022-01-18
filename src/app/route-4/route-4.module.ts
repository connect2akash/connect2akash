import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route4TimerStampComponent } from './route-4-timer-stamp/route-4-timer-stamp.component';
import { Route4TimerInputComponent } from './route-4-timer-input/route-4-timer-input.component';
import { Route4TimerDisplayComponent } from './route-4-timer-display/route-4-timer-display.component';
import { Route4TimerCountComponent } from './route-4-timer-count/route-4-timer-count.component';
import { Route4Component } from './route-4.component';
import { numbersOnlyDirectiveModule } from './../numbersOnly.directive';
@NgModule({
  declarations: [
    Route4TimerCountComponent,
    Route4TimerDisplayComponent,
    Route4TimerInputComponent,
    Route4TimerStampComponent,
    Route4Component,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    numbersOnlyDirectiveModule
  ],
  exports: [
    Route4Component,
    MatButtonModule
  ]
})
export class Route4Module { }
