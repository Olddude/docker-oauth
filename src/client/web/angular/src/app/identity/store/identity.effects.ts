import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as IdentityActions from './identity.actions';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable()
export class IdentityEffects {

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(IdentityActions.login),
      map(action => ({
        url: `${environment.identityServer}/login`,
        options: {
          headers: {
            Authorization: action.authorization
          }
        }
      })),
      switchMap(_ => {
        return this.http.post(_.url, undefined, _.options).pipe(
          map(data => IdentityActions.loginSuccess({ data })),
          catchError(error => of(IdentityActions.loginFailure({ error })))
        );
      })
    )
  });

  redirectToPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(IdentityActions.loginSuccess),
      distinctUntilChanged(),
      tap(async () => {
        await this.router.navigate(['/post'])
      })
    );
  })

  constructor(
    private readonly actions$: Actions,
    private readonly http: HttpClient,
    private readonly router: Router
  ) { }

}
