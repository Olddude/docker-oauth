import { createReducer, on } from '@ngrx/store';
import * as IdentityActions from './identity.actions';

export const identityFeatureKey = 'identity';

export interface State {
  readonly loading?: boolean;
  readonly data?: any;
  readonly error?: any;
}

export const initialState: State = {
};


export const reducer = createReducer(
  initialState,

  on(IdentityActions.login, state => ({
    ...state,
    loading: true
  })),
  on(IdentityActions.loginSuccess, (state, action) => ({
    ...state,
    loading: false,
    data: action.data
  })),
  on(IdentityActions.loginFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error
  })),

);

