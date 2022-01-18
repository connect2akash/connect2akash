
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AgGridModule } from 'ag-grid-angular';


import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { Route1Component } from './route-1/route-1.component';
import { Route2Component } from './route-2/route-2.component';
import { Route5Component } from './route-5/route-5.component';
import { Route6Component } from './route-6/route-6.component';
import { Route3Module } from './route-3/route-3.module';
import { Route4Module } from './route-4/route-4.module';


@NgModule({
  declarations: [							
    AppComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    Route1Component,
    Route2Component,
    Route5Component,
    Route6Component,
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollingModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    FontAwesomeModule,
    Route3Module,
    Route4Module,
    AgGridModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
