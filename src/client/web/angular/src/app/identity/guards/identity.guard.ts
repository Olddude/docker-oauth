import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { from, Observable, of } from 'rxjs';
import { IdentityService } from '../services/identity.service';
import { map, switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class IdentityGuard implements CanActivate {

  constructor(
    private readonly service: IdentityService,
    private readonly router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.service.identity$.pipe(
      map(identity => !!identity),
      switchMap(identity => {
        if (identity) {
          return of(true);
        } else {
          return from(this.router.navigate(['/unauthorized'])).pipe(
            switchMap(() => of(false))
          );
        }
      })
    );
  }

}
