import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IdentityService } from '../services/identity.service';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class IdentityGuard implements CanActivate {

  constructor(
    private readonly service: IdentityService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.service.identity$.pipe(
      map(identity => !!identity)
    );
  }

}
