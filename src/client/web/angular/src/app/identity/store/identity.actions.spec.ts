import * as fromIdentity from './identity.actions';

describe('loadIdentitys', () => {
  it('should return an action', () => {
    expect(fromIdentity.login().type).toBe('[Identity] Load Identitys');
  });
});
