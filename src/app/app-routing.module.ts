import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorPageComponent } from './error-page/error-page.component';
import { Route1Component } from './route-1/route-1.component';
import { Route2Component } from './route-2/route-2.component';
import { Route3Component } from './route-3/route-3.component';
import { Route4Component } from './route-4/route-4.component';
import { Route5Component } from './route-5/route-5.component';
import { Route6Component } from './route-6/route-6.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/route-1' , pathMatch: 'full'},
  { path: 'route-1', component:  Route1Component}, 
  { path: 'route-2', component: Route2Component },
  { path: 'route-3', component: Route3Component },
  { path: 'route-4', component: Route4Component },
  { path: 'route-5', component: Route5Component },
  { path: 'route-6', component: Route6Component },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Route not found!'} },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
