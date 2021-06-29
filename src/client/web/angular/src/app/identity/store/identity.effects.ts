import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';

import * as IdentityActions from './identity.actions';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable()
export class IdentityEffects {

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(IdentityActions.login),
      switchMap(action => {
        const url = `${environment.identityServer}/login`;
        const options = {
          headers: {
            Authorization: action.authorization
          }
        };
        return this.http.post(url, undefined, options).pipe(
          map(data => IdentityActions.loginSuccess({ data })),
          catchError(error => of(IdentityActions.loginFailure({ error })))
        );
      })
    )
  });

  navigate$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(IdentityActions.navigate),
      switchMap(action => {
        return from(this.router.navigate(action.path)).pipe(
          map(() => IdentityActions.navigateSuccess()),
          catchError(() => of(IdentityActions.navigateFailure()))
        );
      })
    )
  })

  redirectToPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(IdentityActions.loginSuccess),
      switchMap(() => of(IdentityActions.navigate({ path: ['/post'] })))
    );
  })

  constructor(
    private readonly actions$: Actions,
    private readonly http: HttpClient,
    private readonly router: Router
  ) { }

}
