import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Identity] Login',
  props<{ authorization: string }>()
);

export const loginSuccess = createAction(
  '[Identity] Login Success',
  props<{ data: any }>()
);

export const loginFailure = createAction(
  '[Identity] Login Failure',
  props<{ error: any }>()
);

export const navigate = createAction(
  '[Identity] Navigate',
  props<{ path: string[] }>()
);

export const navigateSuccess = createAction(
  '[Identity] Navigate Success'
);

export const navigateFailure = createAction(
  '[Identity] Navigate Failure'
);
