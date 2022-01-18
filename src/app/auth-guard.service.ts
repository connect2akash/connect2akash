import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
