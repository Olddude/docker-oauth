import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromIdentity from './identity.reducer';

export const selectIdentityState = createFeatureSelector<fromIdentity.State>(
  fromIdentity.identityFeatureKey
);

export const selectLoading = createSelector(
  selectIdentityState,
  state => state.loading
);

export const selectData = createSelector(
  selectIdentityState,
  state => state.data
);

export const selectError = createSelector(
  selectIdentityState,
  state => state.error
);
