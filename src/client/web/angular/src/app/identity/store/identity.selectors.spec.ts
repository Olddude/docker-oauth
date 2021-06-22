import * as fromIdentity from './identity.reducer';
import { selectIdentityState } from './identity.selectors';

describe('Identity Selectors', () => {
  it('should select the feature state', () => {
    const result = selectIdentityState({
      [fromIdentity.identityFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
