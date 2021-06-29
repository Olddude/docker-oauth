import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '../store/identity.actions';
import { selectData } from '../store/identity.selectors';

@Injectable({ providedIn: 'root' })
export class IdentityService {

  identity$ = this.store.select(selectData);

  constructor(
    private readonly store: Store<any>
  ) { }

  login(username: string, password: string) {
    const authorization = `Basic ${btoa(username + ':' + password)}`;
    this.store.dispatch(login({ authorization }));
  }

}
